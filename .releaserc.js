//@ts-check
import {
  GithubNugetRegistryInfo,
  MSBuildProject,
  NugetRegistryInfo
} from '@halospv3/hce.shared-config/dotnet';
import { getConfig } from '@halospv3/hce.shared-config/semanticReleaseConfigDotnet';
import { inspect } from 'node:util';

/** @type {MSBuildProject[]} */
const projectsToPublish = await MSBuildProject.PackableProjectsToMSBuildProjects([
  './GroupBox.Avalonia/GroupBox.Avalonia.csproj',
  './GroupBox.Avalonia.Sample/GroupBox.Avalonia.Sample.csproj'
]).then(promises => Promise.all(promises));

const mainProject = projectsToPublish[0];
if (!mainProject)
  throw new Error('GroupBox.Avalonia.csproj was not in the evaluated projects array!');

const opts = { project: mainProject };

const config = await getConfig(
  projectsToPublish,
  [
    new GithubNugetRegistryInfo(opts),
    new NugetRegistryInfo(opts),
  ]
);

console.log(inspect(config, { depth: Infinity }));

export default config;
