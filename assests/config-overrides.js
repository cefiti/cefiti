/* eslint-disable @typescript-eslint/no-var-requires */

//const path = require('path')

const {
  override,
  addDecoratorsLegacy,
  useEslintRc,
  enableEslintTypescript,
  //disableChunk,
  //babelInclude,
  //addBundleVisualizer,
  //addWebpackAlias,
} = require('customize-cra')

module.exports = override(
  // config => console.log(config.module.rules),
  addDecoratorsLegacy(),
  useEslintRc(),
  enableEslintTypescript()
  /*
  disableChunk(),
  babelInclude([
    path.resolve("src"), // make sure you link your own source
    path.resolve("node_modules/react-native-suggester")  
  ])
  config => (process.env.BUNDLE_VISUALIZE == 1 ? addBundleVisualizer()(config) : config),
  addWebpackAlias({ ["ag-grid-react$"]: path.resolve(__dirname, "src/shared/agGridWrapper.js") }
  */
)
