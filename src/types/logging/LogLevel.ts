const OLogLevel = {
    Trace: 0,
    Debug: 1,
    Info: 2,
    Warn: 3,
    Error: 4,
    Fatal: 5,
} as const

type LogLevel = (typeof OLogLevel)[keyof typeof OLogLevel]

export { OLogLevel }
export type { LogLevel }
