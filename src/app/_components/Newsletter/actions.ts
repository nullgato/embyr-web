'use server'

import { Logger } from '@/features/logging'
import { subscribe } from '@/features/mailerlite'

export async function enrollNewsletter(email: string): Promise<boolean> {
    const logger = new Logger()

    const result = await subscribe(email)
    if (result) logger.logInfo(`MailerLite Enrollment: ${email}`)
    else logger.logError(`MailerLite Failure: ${email}`)

    return result
}
