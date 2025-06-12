require("dotenv").config();
const express = require("express");
const path = require("path")
const app = express();
const PORT = process.env.PORT || 3000
const db_setup = require("./db/setup");
const bp_router = require("./routes/blogposts.route")
// setting up the database
db_setup();

// setting up the static files folder.
app.use(express.static(path.join(__dirname , "public")));

// parsing the body, json and url-encoded data.
app.use(express.urlencoded({extended : true}));
app.use(express.json());

// routing
app.use("/blog" , bp_router);

app.listen(PORT , function(){
    console.log("The server is running on port " , PORT , `and the direct link is http://localhost:${PORT}`);
})