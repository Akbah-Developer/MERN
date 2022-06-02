const express = require("express");
const app = express();
const productRout = require("./router/productRout");

app.use(express.json());
app.use("/api/v1/product", productRout);

app.use((err, req, res, next) => {
  console.log(`i am here`);
  if (err.errorcode === 11000) {
    const message = "Please try another name";
    return message;
  }
});
// export
module.exports = app;
