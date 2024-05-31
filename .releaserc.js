import { getConfig } from '@halospv3/hce.shared-config/semanticReleaseConfigDotnet'

const projectsToPublish = [
  './GroupBox.Avalonia/GroupBox.Avalonia.csproj',
  './GroupBox.Avalonia.Sample/GroupBox.Avalonia.Sample.csproj'];
const projectsToPackAndPush = [
  './GroupBox.Avalonia/GroupBox.Avalonia.csproj'
];
const config = getConfig(projectsToPublish, projectsToPackAndPush);

export default config;
