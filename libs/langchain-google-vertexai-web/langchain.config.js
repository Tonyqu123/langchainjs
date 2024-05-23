import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

/**
 * @param {string} relativePath
 * @returns {string}
 */
function abs(relativePath) {
  return resolve(dirname(fileURLToPath(import.meta.url)), relativePath);
}


export const config = {
  internals: [/node\:/, /@langchain\/core\//, /@langchain\/google-webauth/],
  entrypoints: {
    index: "src/index.ts",
    utils: "src/utils.ts",
    types: "src/types.ts",
  },
  tsConfigPath: resolve("./tsconfig.json"),
  cjsSource: "./dist-cjs",
  cjsDestination: "./dist",
  abs,
  tSupConfig: {
    name: "@langchain/google-vertexai-web",
    dts: true,
    format: ["cjs", "esm"],
    splitting: false,
    sourcemap: false,
    clean: true,
    platform: "neutral",
    outDir: `dist`,
    tsconfig: `tsconfig.json`,
  }
}