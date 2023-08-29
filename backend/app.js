import  express  from "express";

const app = express();

app.get("/", (req,res) => {
  res.send("Hello sibi")
})




app.listen(3000);