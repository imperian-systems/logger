import fetch from "node-fetch";
const LOG_VERSION = 2;
const LOG_URL = "https://api.imperian.systems/api/log/json";
export var LogLevels;
(function (LogLevels) {
    LogLevels["WARNING"] = "WARNING";
    LogLevels["CRITICAL"] = "CRITICAL";
    LogLevels["DEBUG"] = "DEBUG";
    LogLevels["INFO"] = "INFO";
})(LogLevels || (LogLevels = {}));
class Logger {
    constructor(source, url = LOG_URL) {
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
const logger = new Logger({ client_name: "Imperian", platform: "Linode", type: "JavaScript", name: "Tim's app", detail: "Test from index.ts" });
logger.record({ status: "SUCCESS", log_level: LogLevels.INFO, message: "Hello, world!" });
export default Logger;
