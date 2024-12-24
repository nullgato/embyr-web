import { Loggable } from '@/features/logging'
import { kv } from '@vercel/kv'

const FORCED_REFRESH_INTERVAL = 1000 * 10

abstract class MapCache<TData> extends Loggable {
    private _data?: TData
    private _key: string
    private _expiresAt: number

    constructor(subkey: string) {
        super()

        this._key = `nullgato-cache:${subkey}`
        this._expiresAt = 0

        this.logger.logDebug(`Cache Init: ${this._key}`)
    }

    private _isExpired(): boolean {
        const now = new Date().getTime()
        const isExpired = now > this._expiresAt

        if (isExpired) this.logger.logDebug(`Cache Expiry: ${this._key}`)

        return isExpired
    }

    protected async _getCache(): Promise<TData | undefined> {
        if (this._data && !this._isExpired()) {
            this.logger.logDebug(`Cache Validated: ${this._key}`)
            return this._data
        }

        if (!this._isExpired()) {
            const cache = await kv.hgetall<{ expiresAt: number; data: TData }>(
                this._key
            )
            if (!cache) return

            this._expiresAt = cache.expiresAt
            if (this._isExpired()) this._data = undefined
            else {
                this.logger.logDebug(`Cache Freshened: ${this._key}`)
                this._data = cache.data
            }

            return this._data
        }

        return
    }

    protected async _setCache(data: TData, expiresAt?: number): Promise<void> {
        this._expiresAt =
            expiresAt ?? new Date().getTime() + FORCED_REFRESH_INTERVAL

        await kv.hset(this._key, { expiresAt: this._expiresAt, data })
        this._data = data
    }
}

export { MapCache }
