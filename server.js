const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 5172;
const cors = require("cors");
require("dotenv").config();

app.use(cors());

app.use(bodyParser.json());

app.post("/bfhl", (req, res) => {
  const { data } = req.body;
  console.log(data);

  if (!Array.isArray(data)) {
    return res.status(400).json({
      is_success: false,
      user_id: "polu_siva_sai_cherish_04122003",
      email: "sivasai_cherish@srmap.edu.in",
      roll_number: "AP21110010001",
      error: "Invalid input format: data should be an array",
    });
  }

  const numbers = data.filter((item) => !isNaN(item) && item.trim() !== "");
  const alphabets = data.filter((item) => /^[a-zA-Z]$/.test(item));
  const highestAlphabet = alphabets.length
    ? [alphabets.sort((a, b) => b.localeCompare(a))[0]]
    : [];

  res.json({
    is_success: true,
    user_id: "polu_siva_sai_cherish_04122003",
    email: "sivasai_cherish@srmap.edu.in",
    roll_number: "AP21110010001",
    numbers,
    alphabets,
    highest_alphabet: highestAlphabet,
  });
});

app.get("/bfhl", (req, res) => {
  res.json({
    operation_code: 1,
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
