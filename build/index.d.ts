export declare enum LogLevels {
    WARNING = "WARNING",
    CRITICAL = "CRITICAL",
    DEBUG = "DEBUG",
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
    status: string;
    log_level: LogLevels;
    message: string;
    content?: any;
}
declare class Logger {
    url: string;
    source: SourceType;
    constructor(source: SourceType, url?: string);
    record: (message: MessageType) => void;
}
export default Logger;
