const RUNTIME =  [
  "@babel/plugin-transform-runtime",
  {
    "corejs": false,
    "helpers": true,
    "regenerator": true,
    "useESModules": false
  }
]
const DECORATOR = ["@babel/plugin-proposal-decorators", { "legacy": true }]
const PROPOSAL = ["@babel/plugin-proposal-class-properties", { "loose" : true }]
const TRANSFORM_LITERALS = [ "@babel/plugin-transform-template-literals", { "loose": true, } ]

const STYLED = [ 
  "babel-plugin-styled-components", 
  { 
    "fileName": true,
    "displayName": true,
    "ssr": false,
    "minify": true,
    "pure": true,
    "transpileTemplateLiterals": true
  } 
]
module.exports = {
  "presets": [ "@babel/preset-env", "@babel/preset-react", "@babel/preset-typescript", ],
  "plugins": [ DECORATOR, PROPOSAL, RUNTIME, TRANSFORM_LITERALS, STYLED ],
}
 