import esbuild from "esbuild";
import { srcDir, distDir } from "./config.mjs";

esbuild.buildSync({
  entryPoints: [`${srcDir}/index.js`],
  outfile: `${distDir}/index.mjs`,
  platform: "browser",
  format: "esm",
  loader: { ".js": "jsx" },
  bundle: true,
  external: ["react", "react-dom"],
  minify: true,
  define: {
    "process.env.NODE_ENV": '"production"',
  },
});
