import { Request, Response } from "express";
import { AcademicSemesterService } from "./academicSemester.service";
import sendResponse from "../../../shared/sendResponse";
import { AcademicSemester } from "@prisma/client";
import httpStatus from "http-status";
import catchAsync from "../../../shared/catchAsync";

const insertIntoDB = catchAsync(async(req: Request, res: Response) => {
    const result = await AcademicSemesterService.insertIntoDB(req.body);
    sendResponse<AcademicSemester>(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Academis Semester created",
        data: result
    })
})

const getAllFromDB = catchAsync(async(req: Request, res: Response) => {
    const result = await AcademicSemesterService.getAllFromDB();
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Academis Semester data fetched!!",
        meta: result.meta,
        data: result.data
    })
}) 

export const AcademicSemesterController = {
    insertIntoDB,
    getAllFromDB
}