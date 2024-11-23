import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import prisma from "./prisma"; 

const app = express();
app.use(bodyParser.json());
app.use(cors());


app.get("/users", async (req, res) => {
  const users = await prisma.user.findMany();
  res.json(users);
});


app.post("/users", async (req, res) => {
  const { name, email } = req.body;
  const user = await prisma.user.create({
    data: { name, email },
  });
  res.json(user);
});

const PORT = 4000;
app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
