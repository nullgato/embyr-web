import { SimplifiedAlbum } from './SimplifiedAlbum'

/**
 * The response upon successful request of the artist's albums
 * @param href - A link to the Web API endpoint returning the full result of the request (ex: https://api.spotify.com/v1/me/shows?offset=0&limit=20)
 * @param limit - The maximum number of items in the response (as set in the query or by default)
 * @param next - URL to the next page of items (null if none)
 * @param offset - The offset of the items returned (as set in the query or by default)
 * @param previous - URL to the previous page of items (null if none)
 * @param total - The total number of items available to return
 */
type ArtistAlbumResponse = {
    href: string
    limit: number
    next: string
    offset: string
    previous: string
    total: number
    items: SimplifiedAlbum[]
}

export type { ArtistAlbumResponse }
