import esbuild from "esbuild";

esbuild.buildSync({
  entryPoints: ["./index.js"],
  outfile: "./dist/baby-yoda.js",
  platform: "node",
  format: "cjs",
  loader: { ".js": "jsx" },
  bundle: true,
  external: ["react", "react-dom"],
  minify: true,
  define: {
    "process.env.NODE_ENV": '"production"',
  },
});
