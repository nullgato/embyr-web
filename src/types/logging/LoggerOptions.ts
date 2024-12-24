import { IntlOptions } from '@/types/time'
import { LogLevel } from './LogLevel'

type LoggerOptions = {
    logLevel: LogLevel
    intlOptions: IntlOptions
    extraSpacing?: boolean
}

export type { LoggerOptions }
