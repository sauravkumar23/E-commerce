const mongoose = require("mongoose");
const uri =

  "mongodb+srv://sauravkumar23122001:iitbhumnc@cluster0.r2kvef5.mongodb.net/Project1"
mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("database connected");
  })
  .catch((err) => {
    console.log("Could not connect", err);
  });
