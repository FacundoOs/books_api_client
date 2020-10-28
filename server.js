const superstatic = require("superstatic");
const browserSync = require("browser-sync");

browserSync.init({
  server: {
    middleware: [superstatic({ stack: "strict" })],
  },
  //to control what hotreload is watching
  port: 3474,
  watch: true,
  files: ["*.html", "*.css", "*.js"],
});
