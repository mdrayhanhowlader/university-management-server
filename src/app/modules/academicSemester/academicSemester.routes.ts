import express from 'express';
import { AcademicSemesterController } from './academicSemester.controller';
import validateRequest from '../../middlewares/validateRequest';
import { AcademicSemesterValidation } from './academicSemester.validation';

const router = express.Router()

router.get('/', AcademicSemesterController.getAllFromDB)
router.get('/:id', AcademicSemesterController.getDataById)
router.post('/',
validateRequest(AcademicSemesterValidation.create),
AcademicSemesterController.insertIntoDB)

export const AcademicSemesterRoutes = router