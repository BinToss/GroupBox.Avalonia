## [1.1.0](https://github.com/BinToss/GroupBox.Avalonia/compare/v1.0.0...v1.1.0) (2025-12-08)

### Features

* allow changing Header FontWeight ([180299b](https://github.com/BinToss/GroupBox.Avalonia/commit/180299bb1e696325ea773e58f84e9137e6780ab8)), closes [#49](https://github.com/BinToss/GroupBox.Avalonia/issues/49)
* allow dependents to use any Avalonia release in the 11.x range; add dep lock file ([934a78b](https://github.com/BinToss/GroupBox.Avalonia/commit/934a78b143c2a7d450ab794dac9f00691dbfeab3))
* allow non-text controls in GroupBoxClassic Header ([60ed3ad](https://github.com/BinToss/GroupBox.Avalonia/commit/60ed3ad45c3e5c360c0dbd71270df2200d564d8b)), closes [#42](https://github.com/BinToss/GroupBox.Avalonia/issues/42)
* **deps:** lower minimum target framework to netstandard2.0; add `Meziantou.Polyfill` to assist ([e9a9d64](https://github.com/BinToss/GroupBox.Avalonia/commit/e9a9d64f1a825073c79f90bed8eaadbbf2e69f57)), closes [#93](https://github.com/BinToss/GroupBox.Avalonia/issues/93)

### Bug Fixes

* **deps:** bump Avalonia dependencies to 11.1.1 ([0315b18](https://github.com/BinToss/GroupBox.Avalonia/commit/0315b18c87bbcf553af02dcb7d3373be3523ae90))
* **deps:** bump the nuget group across 1 directory with 10 updates ([408d0dc](https://github.com/BinToss/GroupBox.Avalonia/commit/408d0dcf8825c43211aae8d925213172d42836fc))
* **deps:** bump the nuget-dependencies group across 1 directory with 8 updates ([05447d1](https://github.com/BinToss/GroupBox.Avalonia/commit/05447d1e80877f67f0793758a3e1eb8964b82eaa))
* **deps:** update Meziantou.Polyfill to v1.0.68 ([2690cfa](https://github.com/BinToss/GroupBox.Avalonia/commit/2690cfa0072c5b1ce53c543c789a6ac2e1d06c5c))
* **deps:** upgrade Avalonia to 11.3.9 ([2bf2661](https://github.com/BinToss/GroupBox.Avalonia/commit/2bf2661d86c8e86a376efa3d6e106b9119b30c8e))
* do not anti-alias Classic GroupBox Border ([aeee5c0](https://github.com/BinToss/GroupBox.Avalonia/commit/aeee5c0d6eeac84563ebd1b7f473a5a6b4b54084)), closes [#92](https://github.com/BinToss/GroupBox.Avalonia/issues/92)

### Reverts

* lift property groups out of choose-when statement ([2c1d862](https://github.com/BinToss/GroupBox.Avalonia/commit/2c1d8627e913c83792416233210175da3fdcdf8c))

## [1.1.0-develop.2](https://github.com/BinToss/GroupBox.Avalonia/compare/v1.1.0-develop.1...v1.1.0-develop.2) (2025-11-16)

### Features

* **deps:** lower minimum target framework to netstandard2.0; add `Meziantou.Polyfill` to assist ([e9a9d64](https://github.com/BinToss/GroupBox.Avalonia/commit/e9a9d64f1a825073c79f90bed8eaadbbf2e69f57)), closes [#93](https://github.com/BinToss/GroupBox.Avalonia/issues/93)

### Reverts

* lift property groups out of choose-when statement ([2c1d862](https://github.com/BinToss/GroupBox.Avalonia/commit/2c1d8627e913c83792416233210175da3fdcdf8c))

## [1.1.0-develop.1](https://github.com/BinToss/GroupBox.Avalonia/compare/v1.0.0...v1.1.0-develop.1) (2025-08-05)

### Features

* allow changing Header FontWeight ([180299b](https://github.com/BinToss/GroupBox.Avalonia/commit/180299bb1e696325ea773e58f84e9137e6780ab8)), closes [#49](https://github.com/BinToss/GroupBox.Avalonia/issues/49)
* allow dependents to use any Avalonia release in the 11.x range; add dep lock file ([934a78b](https://github.com/BinToss/GroupBox.Avalonia/commit/934a78b143c2a7d450ab794dac9f00691dbfeab3))
* allow non-text controls in GroupBoxClassic Header ([60ed3ad](https://github.com/BinToss/GroupBox.Avalonia/commit/60ed3ad45c3e5c360c0dbd71270df2200d564d8b)), closes [#42](https://github.com/BinToss/GroupBox.Avalonia/issues/42)

### Bug Fixes

* **deps:** bump Avalonia dependencies to 11.1.1 ([0315b18](https://github.com/BinToss/GroupBox.Avalonia/commit/0315b18c87bbcf553af02dcb7d3373be3523ae90))
* **deps:** bump the nuget group across 1 directory with 10 updates ([408d0dc](https://github.com/BinToss/GroupBox.Avalonia/commit/408d0dcf8825c43211aae8d925213172d42836fc))
* **deps:** bump the nuget-dependencies group across 1 directory with 8 updates ([05447d1](https://github.com/BinToss/GroupBox.Avalonia/commit/05447d1e80877f67f0793758a3e1eb8964b82eaa))

## [1.0.0](https://github.com/BinToss/GroupBox.Avalonia/compare/v0.1.0...v1.0.0) (2024-03-18)


### ⚠ BREAKING CHANGES

* move FluentTheme, SimpleTheme deps to Sample
* convert ClassicTheme, ModernTheme styles to ControlThemes
* move themes to Themes

### Features

* **GroupBox.Avalonia.Sample:** add ComboBox to select Theme Variant (Light/Dark) ([45f1326](https://github.com/BinToss/GroupBox.Avalonia/commit/45f1326f39d5dc854cb97fce9ed4179ab91e810d))
* **GroupBox.Avalonia:** assign Names to ModernTheme elements ([f1b2994](https://github.com/BinToss/GroupBox.Avalonia/commit/f1b2994d04cb3159ee0a8c57e8c1ad131708ae71))


### Bug Fixes

* **GroupBox.Avalonia.Sample:** add background tint to MainWindow ([1784c55](https://github.com/BinToss/GroupBox.Avalonia/commit/1784c5583b9418f914e12c7f0218c001d472deff))
* **GroupBox.Avalonia.Sample:** adjust MainView Grid to evenly distribute space ([20df3bc](https://github.com/BinToss/GroupBox.Avalonia/commit/20df3bc3930b362431b72ef0cea7a4e4292f2c8f))
* **GroupBox.Avalonia:** add 1px margin to GBHeaderText ([6157178](https://github.com/BinToss/GroupBox.Avalonia/commit/615717869393db2cb1b2430173c3eeb1fb35c96d))
* **GroupBox.Avalonia:** define ThemeBorderMidBrush ourselves for ClassicTheme ([18bbcfd](https://github.com/BinToss/GroupBox.Avalonia/commit/18bbcfdd652ad54b848e10e75fc29c31486ed9b2))
* **GroupBox.Avalonia:** disable anti-aliasing for classic Border ([24dd908](https://github.com/BinToss/GroupBox.Avalonia/commit/24dd90824148f3eb092be5ebcc34f8938b75d1f8))
* **GroupBox.Avalonia:** dynamically adjust spacing ([4cb5c64](https://github.com/BinToss/GroupBox.Avalonia/commit/4cb5c648dda84c8b99cb518ff69ed1453e8c2408))
* **GroupBox.Avalonia:** dynamically update Header's border clip ([5bdd9d3](https://github.com/BinToss/GroupBox.Avalonia/commit/5bdd9d31659776ce0cd62907ae2e00f8ae54968d))
* **GroupBox.Avalonia:** move ThemeBorderMidBrush resources ([2baffe3](https://github.com/BinToss/GroupBox.Avalonia/commit/2baffe3fb459df4c7eba75db9fd9a67b6449973a))


### Performance Improvements

* **GroupBox.Avalonia:** remove redundant Border ([ce0c8d3](https://github.com/BinToss/GroupBox.Avalonia/commit/ce0c8d3bc55835464bd0c2355fee7b4db288daea))


### Code Refactoring

* convert ClassicTheme, ModernTheme styles to ControlThemes ([312bad4](https://github.com/BinToss/GroupBox.Avalonia/commit/312bad4989b43b83f2abdb5e86c0461579a7014e))
* move themes to Themes ([4d28d30](https://github.com/BinToss/GroupBox.Avalonia/commit/4d28d304d50156c4aa3f6cbb954a15c3e0232b0c))


### Build System

* move FluentTheme, SimpleTheme deps to Sample ([321e0bc](https://github.com/BinToss/GroupBox.Avalonia/commit/321e0bc1d5d5ccd987421de498d5df3b4df6ef7a))

## [1.0.0-develop.1](https://github.com/BinToss/GroupBox.Avalonia/compare/v0.1.0...v1.0.0-develop.1) (2024-03-18)


### ⚠ BREAKING CHANGES

* move FluentTheme, SimpleTheme deps to Sample
* convert ClassicTheme, ModernTheme styles to ControlThemes
* move themes to Themes

### Features

* **GroupBox.Avalonia.Sample:** add ComboBox to select Theme Variant (Light/Dark) ([45f1326](https://github.com/BinToss/GroupBox.Avalonia/commit/45f1326f39d5dc854cb97fce9ed4179ab91e810d))
* **GroupBox.Avalonia:** assign Names to ModernTheme elements ([f1b2994](https://github.com/BinToss/GroupBox.Avalonia/commit/f1b2994d04cb3159ee0a8c57e8c1ad131708ae71))


### Bug Fixes

* **GroupBox.Avalonia.Sample:** add background tint to MainWindow ([1784c55](https://github.com/BinToss/GroupBox.Avalonia/commit/1784c5583b9418f914e12c7f0218c001d472deff))
* **GroupBox.Avalonia.Sample:** adjust MainView Grid to evenly distribute space ([20df3bc](https://github.com/BinToss/GroupBox.Avalonia/commit/20df3bc3930b362431b72ef0cea7a4e4292f2c8f))
* **GroupBox.Avalonia:** add 1px margin to GBHeaderText ([6157178](https://github.com/BinToss/GroupBox.Avalonia/commit/615717869393db2cb1b2430173c3eeb1fb35c96d))
* **GroupBox.Avalonia:** define ThemeBorderMidBrush ourselves for ClassicTheme ([18bbcfd](https://github.com/BinToss/GroupBox.Avalonia/commit/18bbcfdd652ad54b848e10e75fc29c31486ed9b2))
* **GroupBox.Avalonia:** disable anti-aliasing for classic Border ([24dd908](https://github.com/BinToss/GroupBox.Avalonia/commit/24dd90824148f3eb092be5ebcc34f8938b75d1f8))
* **GroupBox.Avalonia:** dynamically adjust spacing ([4cb5c64](https://github.com/BinToss/GroupBox.Avalonia/commit/4cb5c648dda84c8b99cb518ff69ed1453e8c2408))
* **GroupBox.Avalonia:** dynamically update Header's border clip ([5bdd9d3](https://github.com/BinToss/GroupBox.Avalonia/commit/5bdd9d31659776ce0cd62907ae2e00f8ae54968d))
* **GroupBox.Avalonia:** move ThemeBorderMidBrush resources ([2baffe3](https://github.com/BinToss/GroupBox.Avalonia/commit/2baffe3fb459df4c7eba75db9fd9a67b6449973a))


### Performance Improvements

* **GroupBox.Avalonia:** remove redundant Border ([ce0c8d3](https://github.com/BinToss/GroupBox.Avalonia/commit/ce0c8d3bc55835464bd0c2355fee7b4db288daea))


### Code Refactoring

* convert ClassicTheme, ModernTheme styles to ControlThemes ([312bad4](https://github.com/BinToss/GroupBox.Avalonia/commit/312bad4989b43b83f2abdb5e86c0461579a7014e))
* move themes to Themes ([4d28d30](https://github.com/BinToss/GroupBox.Avalonia/commit/4d28d304d50156c4aa3f6cbb954a15c3e0232b0c))


### Build System

* move FluentTheme, SimpleTheme deps to Sample ([321e0bc](https://github.com/BinToss/GroupBox.Avalonia/commit/321e0bc1d5d5ccd987421de498d5df3b4df6ef7a))

## [1.0.0-develop.1](https://github.com/BinToss/GroupBox.Avalonia/compare/v0.1.0...v1.0.0-develop.1) (2024-03-17)


### ⚠ BREAKING CHANGES

* move FluentTheme, SimpleTheme deps to Sample
* convert ClassicTheme, ModernTheme styles to ControlThemes
* move themes to Themes

### Features

* **GroupBox.Avalonia.Sample:** add ComboBox to select Theme Variant (Light/Dark) ([45f1326](https://github.com/BinToss/GroupBox.Avalonia/commit/45f1326f39d5dc854cb97fce9ed4179ab91e810d))
* **GroupBox.Avalonia:** assign Names to ModernTheme elements ([f1b2994](https://github.com/BinToss/GroupBox.Avalonia/commit/f1b2994d04cb3159ee0a8c57e8c1ad131708ae71))


### Bug Fixes

* **GroupBox.Avalonia.Sample:** add background tint to MainWindow ([1784c55](https://github.com/BinToss/GroupBox.Avalonia/commit/1784c5583b9418f914e12c7f0218c001d472deff))
* **GroupBox.Avalonia.Sample:** adjust MainView Grid to evenly distribute space ([20df3bc](https://github.com/BinToss/GroupBox.Avalonia/commit/20df3bc3930b362431b72ef0cea7a4e4292f2c8f))
* **GroupBox.Avalonia:** add 1px margin to GBHeaderText ([6157178](https://github.com/BinToss/GroupBox.Avalonia/commit/615717869393db2cb1b2430173c3eeb1fb35c96d))
* **GroupBox.Avalonia:** define ThemeBorderMidBrush ourselves for ClassicTheme ([18bbcfd](https://github.com/BinToss/GroupBox.Avalonia/commit/18bbcfdd652ad54b848e10e75fc29c31486ed9b2))
* **GroupBox.Avalonia:** disable anti-aliasing for classic Border ([24dd908](https://github.com/BinToss/GroupBox.Avalonia/commit/24dd90824148f3eb092be5ebcc34f8938b75d1f8))
* **GroupBox.Avalonia:** dynamically adjust spacing ([4cb5c64](https://github.com/BinToss/GroupBox.Avalonia/commit/4cb5c648dda84c8b99cb518ff69ed1453e8c2408))
* **GroupBox.Avalonia:** dynamically update Header's border clip ([5bdd9d3](https://github.com/BinToss/GroupBox.Avalonia/commit/5bdd9d31659776ce0cd62907ae2e00f8ae54968d))
* **GroupBox.Avalonia:** move ThemeBorderMidBrush resources ([2baffe3](https://github.com/BinToss/GroupBox.Avalonia/commit/2baffe3fb459df4c7eba75db9fd9a67b6449973a))


### Performance Improvements

* **GroupBox.Avalonia:** remove redundant Border ([ce0c8d3](https://github.com/BinToss/GroupBox.Avalonia/commit/ce0c8d3bc55835464bd0c2355fee7b4db288daea))


### Code Refactoring

* convert ClassicTheme, ModernTheme styles to ControlThemes ([312bad4](https://github.com/BinToss/GroupBox.Avalonia/commit/312bad4989b43b83f2abdb5e86c0461579a7014e))
* move themes to Themes ([4d28d30](https://github.com/BinToss/GroupBox.Avalonia/commit/4d28d304d50156c4aa3f6cbb954a15c3e0232b0c))


### Build System

* move FluentTheme, SimpleTheme deps to Sample ([321e0bc](https://github.com/BinToss/GroupBox.Avalonia/commit/321e0bc1d5d5ccd987421de498d5df3b4df6ef7a))
