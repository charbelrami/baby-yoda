const { join } = require("path");
const polka = require("polka");

const { PORT = 3000 } = process.env;
const dir = join(__dirname, "preview");
const serve = require("serve-static")(dir);

polka()
  .use(serve)
  .listen(PORT, (err) => {
    if (err) throw err;
    console.log(`> Running on localhost:${PORT}`);
  });
