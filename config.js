const args = process.argv.slice(2);
const data = {};

args.map((item, idx) => {
  if (idx % 2 === 1) data[args[idx - 1].slice(2)] = item
});

module.exports.appPort = process.env.APP_PORT
module.exports.env = data.env
