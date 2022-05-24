Load neon files as object via webpack to your application.

# Install

```bash
npm install --save-dev webpack-neon-loader
```

# Example

*NEON*
```neon
someString: "Watermelon has same colors is Italian flag."

list:
	- 1
	- 2
	- 3

struct:
	item1: Orange
	item2: Banana
	item3:
	item4: null

```

*JS*
```json
{
  "someString": "Watermelon has same colors is Italian flag.",
  "list": {
    "0": 1,
    "1": 2,
    "2": 3
  },
  "struct": {
    "item1": "Orange",
    "item2": "Banana",
    "item3": null,
    "item4": null
  }
}
```


# Usage

### Inline

```js
const neon = require('webpack-neon-loader!./file.neon');
```

### Configuration (recommended)

```js
const neon = require('./file.neon');
```

**webpack.config.js**

```js
module.exports = {
  module: {
    loaders: [
      {
        test: /\.neon$/,
        loader: 'webpack-neon-loader'
      }
    ]
  }
}
```

**Encore**

```js
Encore.addLoader(
    {
        test: /\.neon$/,
        use: 'webpack-neon-loader',
    }
);
```
