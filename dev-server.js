const { createServer } = require("https");
const { parse } = require("url");
const fs = require("fs");
const next = require("next");

const hostname = "local.hyeok9.com";
const port = 443;

const app = next({ dev: true, hostname, port });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  createServer(
    {
      key: fs.readFileSync("local.hyeok9.com-key.pem"),
      cert: fs.readFileSync("local.hyeok9.com.pem"),
    },
    async (req, res) => {
      try {
        // Be sure to pass `true` as the second argument to `url.parse`.
        // This tells it to parse the query portion of the URL.
        if (!req.url) throw Error("req.url is undefined");
        const parsedUrl = parse(req.url, true);

        await handle(req, res, parsedUrl);
      } catch (err) {
        console.error("Error occurred handling", req.url, err);
        res.end("dev-server: internal server error");
      }
    }
  ).listen(port, () => {
    console.log(`> Ready on https://${hostname}`);
  });
});
