// @ts-check
import { execFileSync } from 'child_process';
import { readFileSync, writeFileSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
// import { inspect } from 'node:util';

// this file's directory
const __dirname = dirname(fileURLToPath(import.meta.url));

function updateVersionInAvaloniaBadge() {
  const dotnet = 'dotnet';
  const args = ['msbuild', './GroupBox.Avalonia/GroupBox.Avalonia.csproj', '-getItem:PackageReference'];
  const subprocess = execFileSync(dotnet, args, { encoding: 'utf8', stdio: 'pipe' });

  const out = subprocess;
  // console.log('dotnet output: ' + out);
  // console.log(inspect(JSON.parse(out), undefined, 8));

  // eslint-disable-next-line @stylistic/no-extra-parens
  const parsedOutput = (/** @type {unknown} */(JSON.parse(out)));
  if (typeof parsedOutput != 'object' || parsedOutput == null) throw new Error(`The command \`${dotnet} ${args.join(' ')}\` did not print a JSON object`);
  if (!('Items' in parsedOutput) || typeof parsedOutput.Items != 'object' || parsedOutput.Items == null) throw new Error('JSON .Items is missing or is not object-like');
  if (!('PackageReference' in parsedOutput.Items) || !Array.isArray(parsedOutput.Items.PackageReference)) throw new Error('JSON .Items.PackageReference is missing or is not an array.');

  /** @type {string | undefined} */
  let avaloniaVersion = undefined;

  for (const v of /** @type {unknown[]} */(parsedOutput.Items.PackageReference)) {
    if (!v || typeof v != 'object'
      || !('Identity' in v) || v.Identity !== 'Avalonia'
      || !('Version' in v) || typeof v.Version != 'string') {
      continue;
    }
    avaloniaVersion = v.Version;
  }
  if (avaloniaVersion === undefined)
    throw new Error('Failed to determine Avalonia\'s version');

  const pattern = RegExp('(?<=\\[!\\[avalonia]\\(https:\\/\\/img\\.shields\\.io\\/badge\\/avalonia-v)\\d+\\.\\d+\\.\\d+');
  const readmePath = join(dirname(__dirname), 'README.md');
  const readMeBuffer = readFileSync(readmePath, { encoding: 'utf8' });
  // console.log(readMeBuffer);
  // console.log(readMeBuffer.replace(pattern, avaloniaVersion));
  writeFileSync(readmePath, readMeBuffer.replace(pattern, avaloniaVersion), { encoding: 'utf8' });
}

updateVersionInAvaloniaBadge();
