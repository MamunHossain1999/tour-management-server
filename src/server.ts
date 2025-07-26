/* eslint-disable no-console */

import dotenv from "dotenv";
import app from "./app";
// import { Server } from "http";
import mongoose from "mongoose";
dotenv.config();



const PORT = process.env.PORT || 5000;
const DB_URI = process.env.DB_URI as string;

const startServer = async () => {
  try {
    await mongoose.connect(DB_URI);
    console.log(" Connected to MongoDB");

    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error(" Failed to connect to database:", error);
    // process.exit(1);
  }
};

startServer();


// unhandled rejection error
// process.on("unhandledRejection", (error) =>{
//     console.log("Unhangled Rejection detected... server shutting down..", error);
//     if(server){
//         server.close(()=>{
//             process.exit(1)
//         });
//     }
//     process.exit(1)
// })

// Promise.reject(new Error("I forgot to catch this promise"))



// // uncaught rejection error
// process.on("uncaughtException", (error) =>{
//     console.log("Uncaught Rejection detected... server shutting down..", error);
//     if(server){
//         server.close(()=>{
//             process.exit(1)
//         });
//     }
//     process.exit(1)
// })
// throw new Error("I forgot to handle this local erro")


// // signal termination sigterm
// process.on("SIGTERM", (error) =>{
//     console.log("Sigterm Rejection detected... server shutting down..", error);
//     if(server){
//         server.close(()=>{
//             process.exit(1)
//         });
//     }
//     process.exit(1)
// })
