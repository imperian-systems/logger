import fetch from "node-fetch";

const LOG_VERSION = 2;

export enum LogLevels {
  WARNING = "WARNING",
  CRITICAL = "CRITICAL",
  DEBUG = "DEBUG",
  INFO = "INFO",
}

export enum Status {
  SUCCESS = "SUCCESS",
  FAIL = "FAIL",
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
  /** Attempt number */
  attempt: number;

  status: Status;

  log_level: LogLevels;

  message: string;

  /** Additional details (optional) */
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

export default Logger;
