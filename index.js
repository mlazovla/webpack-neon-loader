const neon = require('neon-js');

module.exports = function (source) {
  if (this.cacheable) {
      this.cacheable();
  }

  let value = neon.decode(source)
      .toObject(true);

  value = JSON.stringify(value)
    .replace(/\u2028/g, '\\u2028')
    .replace(/\u2029/g, '\\u2029');

  return `module.exports = ${value}`;
}
