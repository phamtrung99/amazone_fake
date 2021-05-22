const express = require("express");
const { mongoTestCo, neo4jTestCo, redisTestCo} = require("../Controller/testConnect.con");
const route = express.Router();

route.get('/mongo', mongoTestCo);
route.get('/neo4j', neo4jTestCo);
route.get('/redis', redisTestCo);

module.exports = route;