import { SimplifiedArtist } from './SimplifiedArtist'

/**
 * A representation of a Spotify album with simplified properties
 * @param album_type - Known external URLs for this album
 * @param href - A link to the Web API endpoint providing full details of the album
 * @param images - The cover art for the album in various sizes, widest first
 * @param release_date - The date the album was first released (ex: "1981-12")
 * @param uri - The Spotify URI for the album (ex: "spotify:album:2up3OPMp9Tb4dAKM2erWXQ")
 */
type SimplifiedAlbum = {
    album_type: 'album' | 'single' | 'compilation'
    total_tracks: number
    available_markets: string[]
    external_urls: { spotify: string }
    href: string
    id: string
    images: {
        url: string
        height?: number
        width?: number
    }[]
    name: string
    release_date: string
    release_date_precision: 'year' | 'month' | 'day'
    restrictions?: { reason: string }
    type: 'album'
    uri: string
    artists: SimplifiedArtist[]
    album_group: 'album' | 'single' | 'compilation' | 'appears_on'
}

export type { SimplifiedAlbum }
