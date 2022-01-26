# imperian-systems/logger

## Usage

```
import Logger, { SourceType, MessageType, LogLevels } from "@imperian-systems/logger";

const source: SourceType = {
  client_name: "Imperian",
  platform: "Linux",
  type: "JavaScript",
  name: "Tim's app",
  detail: "Test from index.ts",
};

const logger = new Logger(source, "https://logserver/api/logs");

const message: MessageType = {
  status: "SUCCESS",
  log_level: LogLevels.INFO,
  message: "Hello, world!",
};

logger.record(message);
```
