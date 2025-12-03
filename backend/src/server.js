const express = require("express");
const app = express();

app.get("/hello", (req, res) => {
  res.json({ message: "Hello Backend" });
});

module.exports = app;

if (require.main === module) {
  app.listen(3001, () => console.log("Backend running on port 3001"));
}