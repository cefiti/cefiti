import esbuild from "esbuild";

const context = await esbuild
  .context({
    entryPoints: [
      "./src/index.tsx"
    ],
    bundle: true,
    outdir: "./public",
    minify: true,
    sourcemap: true,
    target: ["chrome58", "firefox57", "safari11", "edge18"],
    define: {
      //"process.env.NODE_ENV": isDevServer ? '"development"' : '"production"',
    }
  })
  .catch(() => {
    console.log("ERROR");
    process.exit(1);
  });

await context.rebuild();

await context.watch();

const serveResult = await context.serve({
  servedir: "./public",
  host: "localhost",
});

console.log(`Listening on http://${serveResult.host}:${serveResult.port}`);
