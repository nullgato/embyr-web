import { MapCache } from '@/features/caching'
import { AccessToken } from '@/types/spotify'

class TokenStore extends MapCache<AccessToken> {
    constructor() {
        super('spotify-token')
    }

    public async get(): Promise<AccessToken | undefined> {
        const cache = await this._getCache()
        if (cache) return cache

        const requestedAt = new Date().getTime()
        const res = await fetch('https://accounts.spotify.com/api/token', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: new URLSearchParams({
                grant_type: 'client_credentials',
                client_id: process.env.SPOTIFY_CLIENT_ID as string,
                client_secret: process.env.SPOTIFY_CLIENT_SECRET as string,
            }),
        })

        if (res.status === 200) {
            const token = (await res.json()) as AccessToken
            this._setCache(token, requestedAt + token.expires_in)

            return token
        } else {
            console.log('[ERROR]')
            console.log(JSON.stringify(res, null, 2))
        }
    }
}

export { TokenStore }
