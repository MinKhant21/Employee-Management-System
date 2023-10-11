import express from 'express'
import AuthController from './controller/AuthController'
import EmployeeController from './controller/EmployeeController'
import NotificationController from './controller/NotificationController'
import authenticate from './middleware/authenticate'
const router = express.Router();

router.post('/api/login',AuthController.login)
router.get('/test',AuthController.test)
router.get('/api/employee',authenticate,EmployeeController.all)
router.post('/api/employee/create',authenticate,EmployeeController.create)

router.post('/api/notification',NotificationController.notification)
export default router