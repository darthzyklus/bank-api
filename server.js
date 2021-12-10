const express = require("express");
const server = express();
const port = process.envPORT || 3000;

server.use("/api/v1/users", require("./routes/users"));
server.use("/api/v1/transfers", require("./routes/transfers"));

server.get("/api/v1", (_, res) => {
  res.send("200");
});

server.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
