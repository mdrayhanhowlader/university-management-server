import { Request, Response } from "express";
import { AcademicSemesterService } from "./academicSemester.service";
import sendResponse from "../../../shared/sendResponse";
import { AcademicSemester } from "@prisma/client";
import httpStatus from "http-status";
import catchAsync from "../../../shared/catchAsync";
import pick from "../../../shared/pick";
import { AcademicSemesterFiterableFields } from "./academicSemester.constant";

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
    const filters = pick(req.query, AcademicSemesterFiterableFields)
    const options = pick(req.query, ['limit', 'page', 'sortBy', 'sortOrder'])
    const result = await AcademicSemesterService.getAllFromDB(filters, options);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Academis Semester data fetched!!",
        meta: result.meta,
        data: result.data
    })
}) 

const getDataById = catchAsync(async(req: Request, res: Response) => {
    const result = await AcademicSemesterService.getDataById(req.params.id)
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Academis Semester data fetched!!",
        data: result
    })
} )

export const AcademicSemesterController = {
    insertIntoDB,
    getAllFromDB,
    getDataById
}