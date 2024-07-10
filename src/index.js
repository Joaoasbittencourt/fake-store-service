import "dotenv/config";
import express from "express";

const app = express();

const PORT = process.env.PORT;
const FAKE_STORE_API_URL = process.env.FAKE_STORE_API_URL;

app.get("/users/:username", async (req, res) => {
  req.path;
  const username = req.params.username;
  const users = await fetch(`${FAKE_STORE_API_URL}/users`).then((res) =>
    res.json()
  );

  const user = users.find((user) => user.username === username);

  if (!user) {
    console.log("GET", req.path, 404, "User not found");
    return res.status(404).send("User not found");
  }

  console.log("GET", req.path, 200, user);
  res.json(user);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
