import { SimplifiedArtist } from './SimplifiedArtist'

/**
 * A representation of a Spotify album with simplified properties
 * @param album_type - Known external URLs for this album
 * @param href - A link to the Web API endpoint providing full details of the album
 * @param images - The cover art for the album in various sizes, widest first
 * @param release_date - The date the album was first released (ex: "1981-12")
 * @param uri - The Spotify URI for the album (ex: "spotify:album:2up3OPMp9Tb4dAKM2erWXQ")
 */
type SimplifiedTrack = {
    artists: SimplifiedArtist[]
    available_markets: string[]
    disc_number: number
    duration_ms: number
    explicit: boolean
    external_urls: { spotify: string }
    href: string
    id: string
    is_playable?: boolean
    linked_from?: {
        external_urls: { spotify: string }
        href: string
        id: string
        type: 'track'
        uri: string
    }
    restrictions?: { reason: string }
    name: string
    preview_url?: string
    track_number: number
    type: 'string'
    uri: string
    is_local: boolean
}

export type { SimplifiedTrack }
