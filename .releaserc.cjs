/** Semantic-Release configuration for GroupBox.Avalonia
 * @extends { hceSharedConfig }
 */

/**
  * @typedef { object } PluginOptionsGit 
  * @prop { string } message
  * @prop {[ string | [string] | {path:string} ]} assets
  */

/**
 * @type {import("semantic-release").Options}
 */
const hceSharedConfig = require('@halospv3/hce.shared-config')
if (process.argv.includes("--debug") || process.argv.includes("--verbose")) {
  console.info("hce.shared-config:\n" + JSON.stringify(hceSharedConfig, null, 2))
}
/** 
 * @type { typeof hceSharedConfig.plugins }
 */
const newPlugins = hceSharedConfig.plugins;

// insert and/or configure plugins
for (var i = 0; i < newPlugins.length; i++) {
  /** e.g.
  //#region Git Options | https://github.com/semantic-release/git#options
  // if defined without plugin options, replace with tuple-like array with assets option defined.
  if (plugins[i] === "@semantic-release/git") {
    plugins[i] = [plugins[i], { assets: ["README.md", "CHANGELOG.md"] }]
  }
  if (plugins[i][0] === "@semantic-release/git") {
    // if assets array undefined, define it
    if (!plugins[i][1].assets) {
      plugins[i][1].assets = [];
    }
    // ensure README.md is in assets array
    if (!plugins[i][1].assets.some(a => a === "README.md" || a.path === "README.md")) {
      plugins[i][1].assets.push("README.md");
    }
    // ensure CHANGELOG.md is in assets array
    if (!plugins[i][1].assets.some(a => a === "CHANGELOG.md" || a.path === "CHANGELOG.md")) {
      plugins[i][1].assets.push("CHANGELOG.md");
    }
  }
  //#endregion
  */
}

newPlugins.push(
  // append this tuple-like array of [pluginName, pluginConfig] to plugins
  ["@semantic-release/exec", {// https://github.com/semantic-release/exec#usage
    // 'AfterPublish' target zips the publish folder(s) to ./publish/*.zip
    prepareCmd: "dotnet publish ./GroupBox.Avalonia/GroupBox.Avalonia.csproj && dotnet publish ./GroupBox.Avalonia.Sample/GroupBox.Avalonia.Sample.csproj"
  }]
)

if (process.argv.includes("--debug") || process.argv.includes("--verbose")) {
  console.info("modified plugins array:\n" + JSON.stringify(newPlugins, null, 2))
}

/**
 * @type {import("semantic-release").Options}
 */
module.exports = {
  extends: "@halospv3/hce.shared-config",
  plugins: newPlugins
};
