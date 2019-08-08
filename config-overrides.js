const {
  override,
  addDecoratorsLegacy, // customize-cra가 지원해주는 addDecoratorsLegacy 를 통해 decorator문법을 사용할 수 있게 되었다.
  disableEsLint // mobx-react의 observer decorator를 App.js에 적용해 볼 것이다. customize-cra 문서에서 disableEsLint 플러그인을 같이 사용하라고 나타나있기 때문에 설정파일에 명시하였다.
} = require("customize-cra");

module.exports = {
  webpack: override(disableEsLint(), addDecoratorsLegacy())
};
