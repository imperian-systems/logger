import fetch from 'node-fetch';

class Logger {
  constructor(url) {
    this.url = url;
  }

  record = (message) => {
    fetch(this.url, {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(message)
    });
  }
}

export default Logger;
