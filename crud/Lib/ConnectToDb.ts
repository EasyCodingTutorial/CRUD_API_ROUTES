import mongoose from "mongoose";


// If We Already Connected To DB Then We Don't Need To Connect Again
//  Lets Make A Flg
let isConnected = false

const ConnectToDb = async() => {

    const DataBaseUrl = process.env.MONGODBURI

    if (!DataBaseUrl) {
        throw new Error("Database URL not Defined")
    }

   if (isConnected) {
      console.log("Alread Connected")
      return
   }
   
   
     try {
        await mongoose.connect(DataBaseUrl)
        console.log("Connected to DB")
        isConnected = true
     } catch (error) {
        console.log(error)  
     }
}
export default ConnectToDb

