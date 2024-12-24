type InsertRequest = {
    email: string
    fields?: object
    groups?: string[]
    status?: string
    subscribed_at?: string
    ip_address?: string
    opted_in_at?: string
    optin_ip?: string
    unsubscribed_at?: string
}

export type { InsertRequest }
