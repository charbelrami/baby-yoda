import esbuild from "esbuild";

esbuild.buildSync({
  entryPoints: ["./preview.js"],
  outfile: "./preview/dist/preview.mjs",
  platform: "browser",
  format: "esm",
  loader: { ".js": "jsx" },
  bundle: true,
  define: {
    "process.env.NODE_ENV": '"development"',
  },
});
