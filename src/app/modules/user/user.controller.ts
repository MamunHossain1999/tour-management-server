/* eslint-disable @typescript-eslint/no-unused-vars */
// src/controllers/user.controller.ts
import { NextFunction, Request, Response } from "express";
import httpStatus from "http-status-codes";
import { catchAsync } from "../../../ulits/catchAsynce";
import { UserService } from "./user.service";
import { success } from "zod";

const createUser = catchAsync(async (req: Request, res: Response) => {
  const user = await UserService.createUserService(req.body);

  res.status(httpStatus.CREATED).json({
    success: true,
    message: "User Created Successfully",
    data: user,
  });
});

const getAllUsers = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const users = await UserService.getAllUsers();

    res.status(httpStatus.OK).json({
      success: true,
      message: "All Users Retrieved Successfully",
      data: users,
    });
  }
);

export const UserController = {
  createUser,
  getAllUsers,
};
