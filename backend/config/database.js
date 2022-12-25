const mongoose=require("mongoose");
mongoose.set('strictQuery',true);

exports.connect = () => {
    const MONGO_URI=process.env.MONGO_URI || 'mongodb://localhost:27017/cars_db'
    // Connecting to the database
    mongoose
      .connect(MONGO_URI, {})
      .then(() => {
        console.log("Successfully connected to database");
      })
      .catch((error) => {
        console.log("database connection failed. exiting now...");
        console.error(error);
        process.exit(1);
      });
  };
