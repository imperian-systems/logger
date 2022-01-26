import fetch from "node-fetch";

const LOG_VERSION = 2;

export enum LogLevels {
  WARNING = "WARNING",
  CRITICAL = "CRITICAL",
  DEBUG = "DEBUG",
  INFO = "INFO",
}

export interface SourceType {
  /** Customer identifier */
  client_name: string;

  /** Cloud platform */
  platform: string;

  /** Type of application */
  type: string;

  /** A unique name representing this app */
  name: string;

  detail: string;
}

export interface MessageType {
  status: string;
  log_level: LogLevels;
  message: string;
  content?: any;
}

interface LogEntryType extends MessageType {
  log_version: number;
  source: SourceType;
}

class Logger {
  url: string;
  source: SourceType;

  constructor(source: SourceType, url) {
    this.source = source;
    this.url = url;
  }

  record = (message: MessageType) => {
    const entry: LogEntryType = {
      ...message,
      log_version: LOG_VERSION,
      source: this.source
    };

    fetch(this.url, {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(entry)
    });
  }
}

const logger = new Logger({ client_name: "Imperian", platform: "Linode", type: "JavaScript", name: "Tim's app", detail: "Test from index.ts" });
logger.record({ status: "SUCCESS", log_level: LogLevels.INFO, message: "Hello, world!" });

export default Logger;
