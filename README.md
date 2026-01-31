<!-- Unfortunately, the AvaloniaUI badge is updated via the Release workflow instead of via Shields.io and NuGet's API. -->

<div align="center">
  <div>
    <img src="./README.Banner.svg" align="center" alt="SVG replication of GroupBox border and header"
      style="height: 12em;" />
    <div style="
      transform: translateY(-105px);
      height: 0">
      <div>
        <a href="https://github.com/semantic-release/semantic-release">
          <img alt="semantic-release: conventionalcommits"
            src="https://img.shields.io/badge/semantic--release-conventionalcommits-e10079?logo=semantic-release" />
        </a>
        <a href="https://github.com/AvaloniaUI/Avalonia">
          <img calt="avalonia" src="https://img.shields.io/badge/avalonia-v11.*-8b44ac?logo=avaloniaui" />
        </a>
      </div>
      <div>
        <a href="https://github.com/BinToss/GroupBox.Avalonia/actions/workflows/ci.yml">
          <img alt="CI" src="https://github.com/BinToss/GroupBox.Avalonia/actions/workflows/ci.yml/badge.svg" />
        </a>
        <a href="https://github.com/BinToss/GroupBox.Avalonia/actions/workflows/release.yml">
          <img alt="Release"
            src="https://github.com/BinToss/GroupBox.Avalonia/actions/workflows/release.yml/badge.svg" />
        </a>
      </div>
      <div>
        <a href="https://www.nuget.org/packages/BinToss.GroupBox.Avalonia/">
          <img alt="latest" src="https://img.shields.io/nuget/v/BinToss.GroupBox.Avalonia" />
        </a>
        <a href="https://www.nuget.org/packages/BinToss.GroupBox.Avalonia/#versions-body-tab">
          <img calt="prerelease"
            src="https://img.shields.io/nuget/vpre/BinToss.GroupBox.Avalonia?label=nuget%20(prerelease)" />
        </a>
      </div>
    </div>
  </div>
</div>

# GroupBox.Avalonia

</p>

Another attempt to recreate the GroupBox control for AvaloniaUI.

Based on @derekantrican's Classic and Modern GroupBox examples at [[GroupBox] Missing · Issue #823 · AvaloniaUI/Avalonia](https://github.com/AvaloniaUI/Avalonia/issues/823#issuecomment-692270581).

When this library is production-ready, its themes/styles _may_ be pull-requested to teast/Avalonia.GroupBox. Otherwise, someone else will need to maintain this project.

![GroupBox.Avalonia.Sample_Dark.png](./GroupBox.Avalonia.Sample_Dark.png)
![GroupBox.Avalonia.Sample_Light.png](./GroupBox.Avalonia.Sample_Light.png)

# Known Issues

- Sample app re-distributes the checkbox labels...weirdly.

# Usage

1. Add the package: <https://www.nuget.org/packages/BinToss.GroupBox.Avalonia/>

    ```sh
    dotnet add package BinToss.GroupBox.Avalonia
    ```

2. In an AXAML/XAML file, add the following xmlns statement: `xmlns:gb="using:GroupBox.Avalonia.Controls"`. I used `ctrl` in the sample project, but other projects should use `gb`.
    <https://github.com/BinToss/GroupBox.Avalonia/blob/5515704496a0103200733b788bcfcad1c1ce5ea1/GroupBox.Avalonia.Sample/Views/MainView.axaml#L1-L5>

3. Add a basic GroupBox via `<gb:GroupBox/>`
    <https://github.com/BinToss/GroupBox.Avalonia/blob/5515704496a0103200733b788bcfcad1c1ce5ea1/GroupBox.Avalonia.Sample/Views/MainView.axaml#L25-L31>

    For its contents, you should use a `Panel`-based `Control` such as `Grid` or `StackPanel`. It's a *Group*Box, after all.

4. (Optional) To use the "classic" theme replicating Windows' classic GroupBox, use `Theme="{StaticResource GroupBoxClassic}"`
    <https://github.com/BinToss/GroupBox.Avalonia/blob/5515704496a0103200733b788bcfcad1c1ce5ea1/GroupBox.Avalonia.Sample/Views/MainView.axaml#L16-L18>

---

For more info, see [GroupBox.Avalonia.Sample](https://github.com/BinToss/GroupBox.Avalonia/tree/main/GroupBox.Avalonia.Sample).
