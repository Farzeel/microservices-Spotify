import mongoose  from "mongoose";


const connectDB = async (uri: string) => {
    try {
      await mongoose.connect(uri);
      console.log('✅ Connected to MongoDB');
    } catch (error) {
      console.error('❌ MongoDB connection error:', error);
      process.exit(1); 
    }
  };
  
  export default connectDB;