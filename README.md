### `Step 1`

```
$ npx react-create-app react-mobx-market-example
$ cd react-mobx-market-example
```

### `Step 2`

```
$ npm install customize-cra --save-dev
$ npm install react-app-rewired --save-dev
```

### `Step 3 - package.json`

```json
...
  "scripts": {
    "start": "react-app-rewired start",
    "build": "react-app-rewired build",
    "test" : "react-app-rewired test",
    "eject": "react-scripts eject"
  },
...
```

### `Step 4`

```
$ npm install --save-dev @babel/plugin-proposal-decorators
```

### `Step 5 - config-overrides.js`

```
const {
  override,
  addDecoratorsLegacy, // customize-cra가 지원해주는 addDecoratorsLegacy 를 통해 decorator문법을 사용할 수 있게 되었다.
  disableEsLint // mobx-react의 observer decorator를 App.js에 적용해 볼 것이다. customize-cra 문서에서 disableEsLint 플러그인을 같이 사용하라고 나타나있기 때문에 설정파일에 명시하였다.
} = require("customize-cra");

module.exports = {
  webpack: override(disableEsLint(), addDecoratorsLegacy())
};
```

### `Step 6`

```
$ npm install mobx --save
$ npm install mobx-react --save
```

### `Step 7`

```
$ npm start
```

### `Step 8`

```
$ npm install --save-dev mobx-react-devtools
```

`src/App.js`

```javascript
import React, { Component } from "react";
import Counter from "./components/Counter";
import SuperMarket from "./components/SuperMarket";
import DevTools from "mobx-react-devtools";

class App extends Component {
  render() {
    return (
      <div>
        <Counter />
        <hr />
        <SuperMarket />
        {process.env.NODE_ENV === "development" && <DevTools />}
      </div>
    );
  }
}

export default App;
```

DevTools 사용시 에러 발생.

mobx-react-devtools 6.1.1. 버전에서 에러가 발생한다고 하는데 정확한 원인은 모르겠음.

추후 찾아 봐야 할듯.

Chrome 의 웹 스토어에서 `MobX Developer Tools` 설치 후 사용.
