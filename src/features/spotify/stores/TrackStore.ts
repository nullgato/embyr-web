import { MapCache } from '@/features/caching'
import { SimplifiedTrack } from '@/types/spotify'
import { spotifetch } from '../lib/spotifetch'
import { TokenStore } from './TokenStore'

/**
 * The response upon successful request of the artist's albums
 * @param href - A link to the Web API endpoint returning the full result of the request (ex: https://api.spotify.com/v1/me/shows?offset=0&limit=20)
 * @param limit - The maximum number of items in the response (as set in the query or by default)
 * @param next - URL to the next page of items (null if none)
 * @param offset - The offset of the items returned (as set in the query or by default)
 * @param previous - URL to the previous page of items (null if none)
 * @param total - The total number of items available to return
 */
interface IResponse {
    href: string
    limit: number
    next: string
    offset: string
    previous: string
    total: number
    items: SimplifiedTrack[]
}

class TrackStore extends MapCache<SimplifiedTrack[]> {
    constructor() {
        super('spotify-tracks')
    }

    public async get(
        store: TokenStore,
        albumId: string
    ): Promise<SimplifiedTrack[] | undefined> {
        const cache = await this._getCache()
        if (cache) return cache

        const baseUrl = 'https://api.spotify.com/v1/albums'
        const url = `${baseUrl}/${albumId}/tracks`

        const res = await spotifetch<IResponse>(store, url, {
            method: 'GET',
        })
        if (!res) return

        await this._setCache(res.items)
        return res.items
    }
}

export { TrackStore }
