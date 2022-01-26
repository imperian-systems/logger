import fetch from "node-fetch";
const LOG_VERSION = 2;
export var LogLevels;
(function (LogLevels) {
    LogLevels["WARNING"] = "WARNING";
    LogLevels["CRITICAL"] = "CRITICAL";
    LogLevels["DEBUG"] = "DEBUG";
    LogLevels["INFO"] = "INFO";
})(LogLevels || (LogLevels = {}));
class Logger {
    constructor(source, url) {
        this.record = (message) => {
            const entry = Object.assign(Object.assign({}, message), { log_version: LOG_VERSION, source: this.source });
            fetch(this.url, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(entry)
            });
        };
        this.source = source;
        this.url = url;
    }
}
export default Logger;
