require("dotenv").config();
const express = require("express");
const path = require("path")
const app = express();
const PORT = process.env.PORT || 3000
const db_setup = require("./db/setup");
const bp_router = require("./routes/blogposts.route")
const logger = require("./middlewares/universal-log.log")
// setting up the database
db_setup();

// setting up the static files folder.
app.use(express.static(path.join(__dirname , "public")));

// parsing the body, json and url-encoded data.
app.use(express.urlencoded({extended : true}));
app.use(express.json());

// routing
app.get("/" , logger , function(req , res){
    res.status(200).send("Welcome , this is blogpost app spi ,(testing).");
})
app.use("/blog" , logger , bp_router);

app.listen(PORT , function(){
    console.log("The server is running on port " , PORT , `and the direct link is http://localhost:${PORT}`);
})