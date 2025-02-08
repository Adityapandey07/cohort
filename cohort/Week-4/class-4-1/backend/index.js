const express = require("express");
const app = express();
const cors = require('cors');

app.use(express.json());
app.use(cors());  

app.get("/sum", function (req, res) {
  const a = req.query.a;
  const b = req.query.b;
  const c = parseInt(a) + parseInt(b);
  res.send(c.toString());
});

app.listen(3000);
