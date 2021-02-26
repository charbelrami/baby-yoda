import esbuild from "esbuild";
import { srcDir, distDir } from "./config.mjs";

esbuild.buildSync({
  entryPoints: [`${srcDir}/index.js`],
  outfile: `${distDir}/index.cjs`,
  platform: "browser",
  format: "cjs",
  loader: { ".js": "jsx" },
  bundle: true,
  external: ["react", "react-dom"],
  minify: true,
  define: {
    "process.env.NODE_ENV": '"production"',
  },
});
