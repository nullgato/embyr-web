'server-only'

import { getString } from '@/features/env'
import { InsertRequest } from '@/types/mailerlite'
import { Logger } from '../logging'

const url = 'https://connect.mailerlite.com/api/subscribers'

const headers: HeadersInit = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    Authorization: `Bearer ${getString(process.env.MAILER_API_KEY)}`,
}

const subscribe = async (email: string): Promise<boolean> => {
    const logger = new Logger()

    const body: InsertRequest = {
        email,
        groups: ['141212608064652379'],
    }

    const response = await fetch(url, {
        method: 'POST',
        headers,
        body: JSON.stringify(body),
    })

    switch (response.status) {
        case 200:
        case 201: {
            logger.logDebug(`Newsletter Subscription: ${email}`)
            return true
        }
        default: {
            logger.logError(
                `Newsletter Error (${response.status}): ${JSON.stringify(
                    response.json(),
                    null,
                    2
                )}`
            )

            return false
        }
    }
}

export { subscribe }
