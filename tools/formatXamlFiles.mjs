import { exec } from "node:child_process";
import * as fs from "node:fs/promises"
import path, { dirname } from "node:path";
import { exit } from "node:process";
import { fileURLToPath } from "node:url";

process.chdir(dirname(fileURLToPath(import.meta.url)) + '/..');

const projNames = ["GroupBox.Avalonia", "GroupBox.Avalonia.Sample"];
const pwd = process.cwd();
Promise.all(projNames
    .map(async (projName) =>
        (await fs.readdir(projName, { recursive: true }))
            .map(relativeFilePath =>
                path.normalize(path.join(pwd, projName, relativeFilePath))
            )
    )).then(
        function (v) {
            // must be comma-separated!
            const axamlFiles = v.flat().filter(file => file.endsWith('.axaml')).join(',');
            const args = ['xstyler', '-c', './Settings.XamlStyler', '-f', axamlFiles, ...process.argv.slice(2)];
            const xstyler = exec(`dotnet ${args.join(' ')}`);
            xstyler.stdout.on('data', chunk => process.stdout.write(chunk));
            xstyler.stderr.on('data', chunk => process.stderr.write(chunk));
        }
    )
