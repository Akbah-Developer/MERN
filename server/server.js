const app = require("./app");
const mongoose = require("mongoose");

require("dotenv").config({ path: "server/.env" });

//console.log(process.env.PORT);
mongoose
  .connect(process.env.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    //useCreateIndex: true,
  })
  .then((con) => {
    console.log(`MongoDB Database connected with HOST: ${con.connection.host}`);
  });

const port = process.env.PORT || 5000;
const server = app.listen(port, () => {
  console.log(
    `Server started on PORT: ${port} in ${process.env.NODE_ENV} mode.`
  );
});
