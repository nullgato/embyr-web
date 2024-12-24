import { LoggerOptions, LogLevel, LogObject, OLogLevel } from '@/types/logging'
import pc from 'picocolors'
import { getBoolean, getString } from '../env'

class Logger {
    private _loggerOptions: LoggerOptions

    constructor() {
        this._loggerOptions = {
            logLevel: this.getLogLevel(),
            intlOptions: {
                locale: process.env.LOG_LOCALE ?? 'en-US',
                timezone: process.env.LOG_TIMEZONE ?? 'America/Chicago',
            },
            extraSpacing: getBoolean(process.env.LOG_SPACING),
        }
    }

    private getLogLevel(): LogLevel {
        const level = getString(process.env.LOG_LEVEL)
        switch (level.toLowerCase()) {
            case 'trace':
                return OLogLevel.Trace
            case 'debug':
                return OLogLevel.Debug
            case 'info':
                return OLogLevel.Info
            case 'warn':
                return OLogLevel.Warn
            case 'error':
                return OLogLevel.Error
            case 'fatal':
                return OLogLevel.Fatal
            default:
                return OLogLevel.Info
        }
    }

    private getTimeText(): string {
        const now = new Date()
        const opts: Intl.DateTimeFormatOptions = {
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric',
            timeZone: this._loggerOptions.intlOptions.timezone,
        }
        return Intl.DateTimeFormat(
            this._loggerOptions.intlOptions.locale,
            opts
        ).format(now)
    }

    private getLogPrefix(logLevel: LogLevel): string {
        switch (logLevel) {
            case OLogLevel.Trace:
                return pc.gray(`[TRACE:\t${this.getTimeText()}]`)
            case OLogLevel.Debug:
                return pc.blue(`[DEBUG:\t${this.getTimeText()}]`)
            case OLogLevel.Info:
                return pc.green(`[INFO:\t${this.getTimeText()}]`)
            case OLogLevel.Warn:
                return pc.yellow(`[WARN:\t${this.getTimeText()}]`)
            case OLogLevel.Error:
                return pc.red(`[ERROR:\t${this.getTimeText()}]`)
            case OLogLevel.Fatal:
                return pc.redBright(pc.bold(`[FATAL:\t${this.getTimeText()}]`))
        }
    }

    public log(logObject: LogObject, logLevel: LogLevel): Logger {
        const prefixText = this.getLogPrefix(logLevel)
        const debugObjJson = logObject.debugObject
            ? JSON.stringify(logObject.debugObject, null, 4)
            : undefined
        let message = ''

        if (logLevel === OLogLevel.Fatal) message += pc.bgRed(logObject.message)
        else {
            message += `${logObject.message}${
                !debugObjJson ? '' : '\n' + debugObjJson + '\n'
            }`
        }

        console.log(
            `${prefixText} ${message}${
                this._loggerOptions.extraSpacing ? '\n' : ''
            }`
        )

        return this
    }

    public logTrace(data: string | LogObject): Logger {
        return this._loggerOptions.logLevel > OLogLevel.Trace
            ? this
            : this.log(
                  typeof data === 'string'
                      ? { message: data }
                      : (data as LogObject),
                  OLogLevel.Trace
              )
    }

    public logDebug(data: string | LogObject): Logger {
        return this._loggerOptions.logLevel > OLogLevel.Debug
            ? this
            : this.log(
                  typeof data === 'string'
                      ? { message: data }
                      : (data as LogObject),
                  OLogLevel.Debug
              )
    }

    public logInfo(data: string | LogObject): Logger {
        return this._loggerOptions.logLevel > OLogLevel.Info
            ? this
            : this.log(
                  typeof data === 'string'
                      ? { message: data }
                      : (data as LogObject),
                  OLogLevel.Info
              )
    }

    public logWarn(data: string | LogObject): Logger {
        return this._loggerOptions.logLevel > OLogLevel.Warn
            ? this
            : this.log(
                  typeof data === 'string'
                      ? { message: data }
                      : (data as LogObject),
                  OLogLevel.Warn
              )
    }

    public logError(data: string | LogObject): Logger {
        return this._loggerOptions.logLevel > OLogLevel.Error
            ? this
            : this.log(
                  typeof data === 'string'
                      ? { message: data }
                      : (data as LogObject),
                  OLogLevel.Error
              )
    }

    public logFatal(data: string | LogObject): Logger {
        return this._loggerOptions.logLevel > OLogLevel.Fatal
            ? this
            : this.log(
                  typeof data === 'string'
                      ? { message: data }
                      : (data as LogObject),
                  OLogLevel.Fatal
              )
    }
}

export { Logger }
