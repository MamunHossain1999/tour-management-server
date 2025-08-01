import httpStatus  from 'http-status-codes';
/* eslint-disable @typescript-eslint/no-unused-vars */
// src/middlewares/notFoundHandler.ts
import { Request, Response, NextFunction } from "express";

export const notFoundHandler = (req: Request, res: Response, next: NextFunction) => {
  res.status(httpStatus.NOT_FOUND).json({
    success: false,
    message: "API Route Not Found",
    url: req.originalUrl,
  });
};
