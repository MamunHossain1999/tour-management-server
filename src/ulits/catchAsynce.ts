/* eslint-disable @typescript-eslint/no-explicit-any */
// src/utils/catchAsync.ts
import { Request, Response, NextFunction } from "express";

// ✅ Properly define the type of async function handler
type AsyncHandler = (req: Request, res: Response, next: NextFunction) => Promise<any>;

export const catchAsync = (fn: AsyncHandler) => {
  return (req: Request, res: Response, next: NextFunction) => {
    Promise.resolve(fn(req, res, next)).catch(next); // সরাসরি next(err) করলেই যথেষ্ট
  };
};
