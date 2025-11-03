# todo.md

## npm -> yarn

Experimental branch. DO NOT MERGE before <https://github.com/yarnpkg/berry/issues/6487> is implemented and released!

<https://yarnpkg.com/getting-started/qa#which-files-should-be-gitignored>

workflow files
deps?

- [ ] Troubleshoot Jiti for shareable configs (commitlint, semantic-release, eslint)

  - ```pwsh
    2025-11-02 22:50:00.574 [info] file:///home/noah/.yarn/berry/cache/@commitlint-cli-npm-20.1.0-4537edc89a-10c0.zip/node_modules/@commitlint/cli/lib/cli.js:132
        throw err;
        ^

    Error: Package subpath './commitlintConfig' is not defined by "exports" in /home/noah/repos/bintoss/GroupBox.Avalonia/.yarn/unplugged/@halospv3-hce.shared-config-patch-60e59d9c37/node_modules/@halospv3/hce.shared-config/package.json imported from /home/noah/repos/bintoss/GroupBox.Avalonia/
    Require stack:

    - /home/noah/repos/bintoss/GroupBox.Avalonia/commitlint.config.ts
        at require$$0.Module._resolveFilename (/home/noah/repos/bintoss/GroupBox.Avalonia/.pnp.cjs:13374:13)
        at require.resolve (node:internal/modules/helpers:163:19)
        at jitiResolve (/home/noah/.yarn/berry/cache/jiti-npm-2.6.0-ffdbbb0e02-10c0.zip/node_modules/jiti/dist/jiti.cjs:4:3372)
        at jitiRequire (/home/noah/.yarn/berry/cache/jiti-npm-2.6.0-ffdbbb0e02-10c0.zip/node_modules/jiti/dist/jiti.cjs:4:4931)
        at import (/home/noah/.yarn/berry/cache/jiti-npm-2.6.0-ffdbbb0e02-10c0.zip/node_modules/jiti/dist/jiti.cjs:6:1740)
        at /home/noah/repos/bintoss/GroupBox.Avalonia/commitlint.config.ts:1:250
        at eval_evalModule (/home/noah/.yarn/berry/cache/jiti-npm-2.6.0-ffdbbb0e02-10c0.zip/node_modules/jiti/dist/jiti.cjs:5:3522)
        at jitiRequire (/home/noah/.yarn/berry/cache/jiti-npm-2.6.0-ffdbbb0e02-10c0.zip/node_modules/jiti/dist/jiti.cjs:4:5561)
        at Function.import (/home/noah/.yarn/berry/cache/jiti-npm-2.6.0-ffdbbb0e02-10c0.zip/node_modules/jiti/dist/jiti.cjs:6:1740)
        at file:///home/noah/repos/bintoss/GroupBox.Avalonia/.yarn/__virtual__/cosmiconfig-typescript-loader-virtual-9e6ec286f5/4/.yarn/berry/cache/cosmiconfig-typescript-loader-npm-6.1.0-8f457225f5-10c0.zip/node_modules/cosmiconfig-typescript-loader/dist/esm/loader.mjs:8:41 {
      name: '_TypeScriptCompileError',
      filepath: '/home/noah/repos/bintoss/GroupBox.Avalonia/commitlint.config.ts'
    }

    Node.js v25.1.0
    husky - commit-msg script failed (code 1)
    ```

- [ ] provenance, audit signatures, attestation
  - how does yarn handle `npm audit signatures`?
    - <https://github.com/yarnpkg/berry/issues/6487>
  - <https://yarnpkg.com/configuration/manifest#publishConfig.provenance>
  - `yarn run npm audit signatures`? The important part is wrapping NPM with Yarn so NPM can see the VFS
  - is there a yarn plugin for this?
- [x] replace `npm` calls
- [x] check dependabot/renovate configs
  - <https://docs.github.com/en/code-security/dependabot/working-with-dependabot/dependabot-options-reference>
- [x] replace `node_modules` paths
  - how? `yarn unplug` everything?
  - [x] re-route in Directory.Build.props
- `- run: corepack enable` BEFORE `actions/set-node`!
- migration
  - <https://v3.yarnpkg.com/getting-started/migration>
  - <https://yarnpkg.com/migration/pnp>
  - <https://yarnpkg.com/getting-started/qa#which-files-should-be-gitignored>
- cli stuff
  - <https://yarnpkg.com/cli>
  - <https://yarnpkg.com/cli/npm/audit#details>
