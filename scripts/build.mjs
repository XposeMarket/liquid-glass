import { mkdir, copyFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
await mkdir(resolve(root, "dist"), { recursive: true });
await copyFile(resolve(root, "src/liquid-glass.js"), resolve(root, "dist/liquid-glass.js"));
console.log("built dist/liquid-glass.js");
