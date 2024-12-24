import { getString } from '@/features/env'
import { Logger } from '@/features/logging'
import { kv } from '@vercel/kv'
import * as muse from 'libmuse'

const CACHE_KEY = 'cache:latest-youtube'
const EXPIRY_INTERVAL = 1000 * 10

type Cache = {
    expiresAt: number
    data: muse.ParsedAlbum
}

const getLatest = async () => {
    const logger = new Logger()

    const now = new Date().getTime()
    const cache = await kv.hgetall<Cache>(CACHE_KEY)
    if (cache !== null && now < cache.expiresAt) {
        logger.logDebug(`Cache Validated: ${CACHE_KEY}`)
        return cache.data
    }

    const artist = await muse.get_artist(
        getString(process.env.YOUTUBE_ARTIST_ID)
    )

    const latestTrack = artist.singles.results[0]
    kv.hset(CACHE_KEY, {
        expiresAt: now + EXPIRY_INTERVAL,
        data: latestTrack,
    })

    return artist.singles.results[0]
}

export { getLatest }
