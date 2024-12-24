/**
 * A representation of a Spotify artist with simplified properties
 * @param href - A link to the Web API endpoint providing full details of the artist
 * @param uri - The Spotify URI for the artist
 */
type SimplifiedArtist = {
    external_urls: { spotify: string }
    href: string
    id: string
    name: string
    type: 'artist'
    uri: string
}

export type { SimplifiedArtist }
