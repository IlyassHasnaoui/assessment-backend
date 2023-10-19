const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const { getCompliment, getFortune, addGoal, getNumber, getQuoteOfTheDay} = require('./controller')

app.get("/api/get", getCompliment);
app.get("/api/fortune", getFortune);
app.get("/api/number", getNumber);
app.put("/api/addGoal", addGoal);
app.post("/api/post", getQuoteOfTheDay);

app.listen(4000, () => console.log("Server running on 4000"));