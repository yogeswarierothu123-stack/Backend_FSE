const mongoose = require("mongoose")

const connectDB = async () => {
  console.log("MONGO_URI check:", process.env.MONGO_URI ? "SET" : "UNDEFINED") 
  if (!process.env.MONGO_URI) {
    console.error("MONGO_URI is missing in Environment Variables ❌")
    process.exit(1)
  }
  
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI) 
    console.log(`MongoDB Connected ✅: ${conn.connection.host}`)
  } catch (error) {
    console.error("MongoDB connection error ❌", error.message)
    process.exit(1)
  }
}

module.exports = connectDB