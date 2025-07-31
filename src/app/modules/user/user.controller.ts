/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from "express";
import httpStatus from "http-status-codes";
import { User } from "./user.model";

const creatreUser = async (req: Request, res: Response) => {
  try {
    const { name, email } = req.body;
    const user = await User.create({
      name,
      email,
    });
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