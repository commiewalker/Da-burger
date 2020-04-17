const express = require("express");
const exphbs = require("express-handlebars");

const PORT = process.env.PORT || 7777;

const app = express();

// serve static file for app
app.use(express.static("public"));

// Parse application body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// set handlebar 
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//routes
let routes = require("./routes/myroutes.js");
app.use(routes);

app.listen(PORT, function(){
    console.log("Server listening on : http://localhost:" + PORT);
})
