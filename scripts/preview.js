import esbuild from "esbuild";

esbuild.serve(
  { port: 3000, servedir: "preview" },
  {
    entryPoints: ["preview/index.js"],
    outfile: "preview/dist/index.mjs",
    platform: "browser",
    format: "esm",
    loader: { ".js": "jsx" },
    bundle: true,
    sourcemap: true,
    define: {
      "process.env.NODE_ENV": '"development"',
    },
  }
);
