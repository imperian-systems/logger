export declare enum LogLevels {
    WARNING = "WARNING",
    CRITICAL = "CRITICAL",
    DEBUG = "DEBUG",
    INFO = "INFO"
}
export declare enum Status {
    SUCCESS = "SUCCESS",
    FAIL = "FAIL",
    INFO = "INFO"
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
declare class Logger {
    url: string;
    source: SourceType;
    constructor(source: SourceType, url: any);
    record: (message: MessageType) => void;
}
export default Logger;
