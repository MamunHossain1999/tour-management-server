import express, { Request, Response } from "express";
import { UserRoutes } from "./app/modules/user/user.route";
import cors from "cors";
import { globalErrorHandler } from "./middleware/globalErrorHandler";
import { notFoundHandler } from "./middleware/notFoundHandler";



const app = express();
app.use(express.json())
app.use(cors())



app.use("/api/v1/user",UserRoutes)
app.get("/", (req: Request, res: Response) => {
  res.status(200).json({
    message: "Welcome to tour management system server",
  });
});
app.use(notFoundHandler)
app.use(globalErrorHandler);
export default app;
