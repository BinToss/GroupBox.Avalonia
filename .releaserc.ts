import {
  GithubNugetRegistryInfo,
  MSBuildProject,
  NugetRegistryInfo,
} from '@halospv3/hce.shared-config/dotnet';
import { getConfig } from '@halospv3/hce.shared-config/semanticReleaseConfigDotnet';
import { env } from 'node:process';
import { inspect } from 'node:util';

let config: import('semantic-release').Options;

try {
  const projectsToPublish: MSBuildProject[] = await MSBuildProject.PackableProjectsToMSBuildProjects([
    './GroupBox.Avalonia/GroupBox.Avalonia.csproj',
    './GroupBox.Avalonia.Sample/GroupBox.Avalonia.Sample.csproj',
  ]).then(promises => Promise.all(promises));

  const mainProject = projectsToPublish[0];
  if (!mainProject)
    throw new Error('GroupBox.Avalonia.csproj was not in the evaluated projects array!');

  const opts = { project: mainProject };

  env['GITHUB_REPOSITORY_OWNER'] = 'BinToss';
  config = await getConfig(
    projectsToPublish,
    [
      new GithubNugetRegistryInfo(opts),
      new NugetRegistryInfo(opts),
    ],
  );
}
catch (error) {
  console.error(inspect(error, { depth: Infinity }));
  throw error;
}

console.log(inspect(config, { depth: Infinity }));

export default config;
