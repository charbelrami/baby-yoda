import esbuild from "esbuild";
import { srcDir, serveDir, port } from "./config.mjs";

esbuild.serve(
  {
    port,
    servedir: serveDir,
  },
  {
    entryPoints: [`${serveDir}/index.js`],
    outfile: `${serveDir}/dist/index.mjs`,
    platform: "browser",
    format: "esm",
    loader: { ".js": "jsx" },
    inject: [`${srcDir}/react-shim.js`],
    bundle: true,
    sourcemap: true,
    define: {
      "process.env.NODE_ENV": '"development"',
    },
  }
);
