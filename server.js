const express = require("express");
const path = require("path")
const app = express();
const PORT = 3000

// setting up the static files folder.
app.use(express.static(path.join(__dirname , "public")));

// parsing the body, json and url-encoded data.
app.use(express.urlencoded({extended : true}));
app.use(express.json());

// trial
app.get("/" , function(req , res){
    res.status(201).json({status: true});
})

app.listen(PORT , function(){
    console.log("The server is running on port " , PORT , `and the direct link is http://localhost:${PORT}`);
})