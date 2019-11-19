import express from "express";
import cors from "cors";
import "core-js/stable";
import "regenerator-runtime/runtime";


const app = express();

app.use(cors()).use(express.json());
app.get("/health", (req, res, next) => {
  res.send("OK!");
});

app.post("/findfriends", async (req, res, next) => {
  const website = req.body.website;
  try {
    const friends = await findFriends(website);
    res.send(friends);
    
  } catch (err) {
    console.error("oops", err)
    res.status(500).send({
      sorry: `I'm not very good at finding friends on '${website}'`,
      err: err.message,
      stack: err.stack
    });
  }
});

const port = 3000;
app.listen(port, () => {
  console.log(`server started ${port}`);
});

/** TODO return promise of friends json. */
function findFriends(website) {
  throw new Error("I don't know how to find friends!")
}
