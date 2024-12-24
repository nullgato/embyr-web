import { Logger } from '@/features/logging'
import { SimplifiedTrack } from '@/types/spotify'
import { kv } from '@vercel/kv'
import { AlbumStore, TokenStore, TrackStore } from '../stores'

const CACHE_KEY = 'cache:spotify-latest'
const EXPIRY_INTERVAL = 1000 * 10

type Cache = {
    expiresAt: number
    data: SimplifiedTrack
}

const getLatest = async (
    store: TokenStore
): Promise<SimplifiedTrack | undefined> => {
    const logger = new Logger()

    const now = new Date().getTime()
    const cache = await kv.hgetall<Cache>(CACHE_KEY)
    if (cache !== null && now < cache.expiresAt) {
        logger.logDebug(`Cache Validated: ${CACHE_KEY}`)
        return cache.data
    }

    const albums = await new AlbumStore().get(store)
    if (!albums) return

    const latestSingle = albums
        .sort((a, b) => {
            const aDate = a.release_date.split('-').join('')
            const bDate = b.release_date.split('-').join('')
            return aDate.localeCompare(bDate)
        })
        .reverse()[0]
    const tracks = await new TrackStore().get(store, latestSingle.id)
    if (!tracks) return

    kv.hset(CACHE_KEY, {
        expiresAt: now + EXPIRY_INTERVAL,
        data: tracks[0],
    })

    return tracks[0]
}

export { getLatest }
