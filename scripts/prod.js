import esbuild from "esbuild";

esbuild.buildSync({
  entryPoints: ["src/index.js"],
  outfile: "dist/index.js",
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
