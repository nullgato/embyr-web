import { Logger } from './Logger'

abstract class Loggable {
    private _logger: Logger

    public get logger(): Logger {
        return this._logger
    }

    constructor() {
        this._logger = new Logger()
    }
}

export { Loggable }
