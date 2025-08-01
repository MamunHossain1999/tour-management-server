/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from "express";
import httpStatus from "http-status-codes";
import { UserService } from "./user.service";

const creatreUser = async (req: Request, res: Response) => {
  try {
   const user = await UserService.createUserService(req.body) //user service theke ana hoyese
  
    res.status(httpStatus.CREATED).json({
        message: "User Created Successfully",
        user
    });
  } catch (err: any) {
    res.status(httpStatus.BAD_REQUEST).json({
      message: `Something Went Wrong ${err.message}`,
      err,
    });
  }
};


export const UserControllers = {
    creatreUser
}