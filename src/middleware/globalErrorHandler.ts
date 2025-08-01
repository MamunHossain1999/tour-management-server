/* eslint-disable @typescript-eslint/no-explicit-any */
// src/middlewares/globalErrorHandler.ts
import { Request, Response, NextFunction } from "express";
import { AppError } from "./AppError";


export const globalErrorHandler = (
  err: any,
  req: Request,
  res: Response,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  next: NextFunction
) => {
  let statusCode = 500;
  let message = "Something went wrong";

  if (err instanceof AppError) {
    statusCode = err.statusCode;
    message = err.message;
  } else if (err instanceof Error) {
    message = err.message;
  }

  res.status(statusCode).json({
    success: false,
    message,
    error: err?.message,
    stack: process.env.NODE_ENV === "development" ? err.stack : undefined,
  });
};
