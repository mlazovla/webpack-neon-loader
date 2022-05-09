Load neon files as object via webpack to your application.

# Install

```bash
npm install --save-dev webpack-neon-loader
```

# Usage

### Inline

```js
const json = require('webpack-neon-loader!./file.json');
```

### Configuration (recommended)

```js
const json = require('./file.neon');
```

**webpack.config.js**
```js
module.exports = {
  module: {
    loaders: [
      {
        test: /\.neon/,
        loader: 'webpack-neon-loader'
      }
    ]
  }
}
```
