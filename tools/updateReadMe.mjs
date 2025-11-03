//@ts-check
import { execFileSync } from "child_process";
import { readFileSync, writeFileSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

// this file's directory
const __dirname = dirname(fileURLToPath(import.meta.url));

function updateVersionInAvaloniaBadge() {

    const dotnet = "dotnet";
    const args = ['msbuild', './GroupBox.Avalonia/GroupBox.Avalonia.csproj', '-getItem:PackageReference'];
    const subprocess = execFileSync(dotnet, args, { encoding: 'utf8', stdio: "pipe", });

    const out = subprocess;
    // console.log('dotnet output: ' + out);
    // console.log(JSON.parse(out));
    /** @type {string | undefined} */
    const avaloniaVersion = JSON.parse(out)?.Items?.PackageReference?.find((/** @type {{ Identity: string; }} */ v) => v.Identity === 'Avalonia').Version?.toString();
    const pattern = RegExp('(?<=\\[!\\[avalonia]\\(https:\\/\\/img\\.shields\\.io\\/badge\\/avalonia-v)\\d+\\.\\d+\\.\\d+');
    const readmePath = join(dirname(__dirname), "README.md");
    const readMeBuffer = readFileSync(readmePath, { encoding: 'utf8' });
    //console.log(readMeBuffer);
    //console.log(readMeBuffer.replace(pattern, avaloniaVersion));
    if (avaloniaVersion)
        writeFileSync(readmePath, readMeBuffer.replace(pattern, avaloniaVersion), { encoding: "utf8" });
}

updateVersionInAvaloniaBadge();