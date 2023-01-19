const express = require("express");

const app = express()

app.get("/", (req, res) => {
    res.json("API is running..");
  });


const PORT = process.env.PORT || 5000;

app.listen(PORT,console.log(`server start ${PORT}`)); 


