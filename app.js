const config = require('./config')
const logger = require('./logger')

const http = require('http');

http.createServer((req, res) => {
  res.end(JSON.stringify({ message: 'Hello world!' }));
}).listen(config.appPort, () => logger.log(`Server is listening on port ${config.appPort}. Env is ${config.env}.`));

