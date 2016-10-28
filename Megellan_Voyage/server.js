const express = require("express"),
  morgan = require("morgan"),
  bodyParser = require("body-parser");

const app = express();
var magellan = [];

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

function magellanMorgan() {
  return function morganLog(req, res, next) {
    console.log("Morgan sails: ", req.path);
    next();
  };
}

//app.use(magellanMorgan());
app.use(morgan("dev"));

//app.use(express.static("public"));

app.get("/", function rootRoute(req, res) {
  res.sendFile("seville.html", { root: "./public/templates" });
});

app.get("/canaryislands", function canaryislandsRoute(req, res) {
  res.sendFile("canaryislands.html", { root: "./public/templates" });
});

app.get("/capeverde", function capeverdeRoute(req, res) {
  res.sendFile("capeverde.html", { root: "./public/templates" });
});

app.get("/straitofmagellan", function straightofmagellanRoute(req, res) {
  res.sendFile("straightofmagellan.html", { root: "./public/templates" });
});

app.get("/guam", function guamRoute(req, res) {
  res.sendFile("guam.html", { root: "./public/templates" });
});

app.get("/philippines", function philippinesRoute(req, res) {
  res.sendFile("philippines.html", { root: "./public/templates" });
});

app.get("/next", function nextRoute(req, res) {
  console.log("/next: location: " + req.query);
  //res.end(`<H1>send post completed</H1>`);

  const CITIES = [ { route: "seville", name: "Seville" },
    { route: "canaryislands", name: "Canary Islands" },
    { route: "capeverde", name: "Cape Verde" },
    { route: "straitofmagellan", name: "Strait of Magellan" },
    { route: "guam", name: "Guam" },
    { route: "philippines", name: "Philippines" } ];

  let index = CITIES.findIndex(function findCity(e, i, a) {
    if (e.name === req.query.location)
      return true;
    return false;
  });

  let response = { "location": req.query.location, "nextLocation": "" };

  if (index !== -1 && index !== (CITIES.length-1)) {
    response.nextLocation = CITIES[index+1].name;
  }

  res.end(JSON.stringify(response));
  
  //res.end("location: " + req.query.location);
});

app.get("/*", function unknownRoutes(req, res) {
  res.send(`<H1>Magellan did not travel to ${req.originalUrl.slice(1)}<H1>`);
});

const PORT = process.env.PORT || 8080;
const HOST_IP = process.env.HOST_IP || "192.168.150.5";

app.listen(POST, HOST_IP, function listener(err) {
  if (err)  {
    console.log("Error", err);
    process.exit(1);
  }

  console.log("Server is listening on 192.168.150.5:3000");
});
