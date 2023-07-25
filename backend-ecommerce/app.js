const path = require("path");
const express = require("express");
const app = express();
require("dotenv").config({path : "config.env"})
const morgan = require("morgan");
const dbConnection = require("./config/database");
const categoryRoute = require("./routes/categoryRoutes");
const subCategoryRoute = require("./routes/subCategoryRoutes");
const brandRoute = require("./routes/brandRoutes");
const productRoute = require("./routes/productRoute");
const userRoute = require("./routes/userRoutes");
const authRoute = require("./routes/authRoutes");
const ApiError = require("./utils/apiError");
const globalError = require("./middlewares/erroeMiddleware");


  // connect with db 
  dbConnection();

// middlewares 
app.use(express.json());
app.use(express.static(path.join(__dirname , "uploads")));

if (process.env.NODE_ENV === "development")
{
  app.use(morgan("dev"));
  console.log(`mode : ${process.env.NODE_ENV}`);
}




// mount routes

app.use("/api/v1/categories" , categoryRoute)
app.use("/api/v1/subcategories" , subCategoryRoute);
app.use("/api/v1/brands" , brandRoute);
app.use("/api/v1/products" , productRoute);
app.use("/api/v1/users" , userRoute);
app.use("/api/v1/auth" , authRoute);


app.all("*" , (req , res , next) => {
  // const err = new Error(`can't find this route ${req.originalUrl}`);
  // next(err.message);
  next(new ApiError(`can't find this route ${req.originalUrl}` , 400));
})

//global error handling middleware

app.use(globalError)

const port = process.env.PORT || 8000;
const server = app.listen(port, () => {
  console.log(`app running on port ${port}`);
})


// handle rejection outside express
process.on("unhandledRejection" , (err) => {
  console.error(`unhandledRejection : ${err.name} | ${err.message}`);
  server.close();
  console.log("shutting down....");
  process.exit(1);
})