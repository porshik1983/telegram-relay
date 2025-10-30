import express from "express";
import fetch from "node-fetch";

const app = express();
app.use(express.json());

const TOKEN = "8299883288:AAHm9e7qwtT4NgbQ8UvePrNi9OIiCst3FSU";
const CHAT_ID = "486256930";

app.post("/send", async (req, res) => {
  const { text } = req.body;
  const url = `https://api.telegram.org/bot${TOKEN}/sendMessage`;
  await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ chat_id: CHAT_ID, text }),
  });
  res.send("OK");
});

app.get("/", (req, res) => res.send("Relay server is online ✅"));

app.listen(3000, () => console.log("Server started on port 3000"));
