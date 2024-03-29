<!-- Unfortunately, the AvaloniaUI badge is updated via the Release workflow instead of via Shields.io and NuGet's API. Also, simpleicons.org does not have Avalonia's icon right now. -->

<div align="center">
<image src="./GroupBox.Avalonia.256.png" />

[![semantic-release: conventionalcommits](https://img.shields.io/badge/semantic--release-conventionalcommits-e10079?logo=semantic-release)](https://github.com/semantic-release/semantic-release)
[![avalonia](https://img.shields.io/badge/avalonia-v11.0.10-8b44ac?logo=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjM1IiB2aWV3Qm94PSIwIDAgMzUgMzUiIHdpZHRoPSIzNSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJtMzAuNDY2MSAzNC45MjhoLjIwOTNjMi4xODQyIDAgMy45Nzg2LTEuNjM2MiA0LjIyOTktMy43NTI4bC4wMzAzLTE0LjE3OTdjLS4yNDg0LTkuNDI4NTMtNy45Njk0LTE2Ljk5NTUtMTcuNDU3OS0xNi45OTU1LTkuNjQ1MDcgMC0xNy40NjM5NjcxIDcuODE4OS0xNy40NjM5NjcxIDE3LjQ2NCAwIDkuNTQxOSA3LjY1MjQ0NzEgMTcuMjk5MSAxNy4xNTQ5NjcxIDE3LjQ2NHoiIGZpbGw9IiNmZmYiLz48ZyBmaWxsPSIjOGI0NGFjIj48cGF0aCBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Im0xNy41MjM5IDUuOTQ4Yy01LjQ5NzEgMC0xMC4wOTQyMyAzLjg1MzE3LTExLjIzNzkgOS4wMDYgMS4wOTQ5Mi4zMDY5IDEuODk3ODUgMS4zMTI0IDEuODk3ODUgMi41MDUzIDAgMS4xOTMtLjgwMjkzIDIuMTk4NC0xLjg5Nzg1IDIuNTA1NCAxLjE0MzY2IDUuMTUyOCA1Ljc0MDggOS4wMDU5IDExLjIzNzkgOS4wMDU5IDIuMDAxMSAwIDMuODgyOS0uNTEwNSA1LjUyMjMtMS40MDg2djEuMzMwN2g1Ljk4OXYtMTAuOTU2MmMuMDA1NS0uMTQ1NyAwLS4zMzAyIDAtLjQ3NzIgMC02LjM1NzUtNS4xNTM4LTExLjUxMTMtMTEuNTExMy0xMS41MTEzem0tNS41MTQxIDExLjUxMTNjMC0zLjA0NTMgMi40Njg4LTUuNTE0MSA1LjUxNDEtNS41MTQxIDMuMDQ1NCAwIDUuNTE0MSAyLjQ2ODggNS41MTQxIDUuNTE0MSAwIDMuMDQ1NC0yLjQ2ODcgNS41MTQxLTUuNTE0MSA1LjUxNDEtMy4wNDUzIDAtNS41MTQxLTIuNDY4Ny01LjUxNDEtNS41MTQxeiIgZmlsbC1ydWxlPSJldmVub2RkIi8%2BPHBhdGggZD0ibTcuMzY4NDEgMTcuNDUxN2MwIDEuMDE3NC0uODI0NzMgMS44NDIxLTEuODQyMSAxLjg0MjFzLTEuODQyMTEtLjgyNDctMS44NDIxMS0xLjg0MjEuODI0NzQtMS44NDIxIDEuODQyMTEtMS44NDIxIDEuODQyMS44MjQ3IDEuODQyMSAxLjg0MjF6Ii8%2BPC9nPjwvc3ZnPg%3D%3D)](https://github.com/AvaloniaUI/Avalonia)

[![CI](https://github.com/BinToss/GroupBox.Avalonia/actions/workflows/ci.yml/badge.svg)](https://github.com/BinToss/GroupBox.Avalonia/actions/workflows/ci.yml)
[![Release](https://github.com/BinToss/GroupBox.Avalonia/actions/workflows/release.yml/badge.svg)](https://github.com/BinToss/GroupBox.Avalonia/actions/workflows/release.yml)
[![latest](https://buildstats.info/nuget/BinToss.GroupBox.Avalonia)](https://www.nuget.org/packages/BinToss.GroupBox.Avalonia/)

</div>

<!-- [![prerelease](https://buildstats.info/nuget/BinToss.GroupBox.Avalonia?includePreReleases=true)](https://www.nuget.org/packages/BinToss.GroupBox.Avalonia/1.0.0-CI00021) -->

# GroupBox.Avalonia

</p>

Another attempt to recreate the GroupBox control for AvaloniaUI.

Based on @derekantrican's Classic and Modern GroupBox examples at [[GroupBox] Missing · Issue #823 · AvaloniaUI/Avalonia](https://github.com/AvaloniaUI/Avalonia/issues/823#issuecomment-692270581).

When this library is production-ready, its themes/styles _may_ be pull-requested to teast/Avalonia.GroupBox. Otherwise, someone else will need to maintain this project.

![GroupBox.Avalonia.Sample.png](./GroupBox.Avalonia.Sample_Dark.png)
![GroupBox.Avalonia.Sample.png](./GroupBox.Avalonia.Sample_Light.png)

# Known Issues

- Sample app re-distributes the checkbox labels...weirdly.
