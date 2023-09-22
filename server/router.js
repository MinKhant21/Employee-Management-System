import express from 'express'
import AuthController from './controller/AuthController'

const router = express.Router();

router.post('/api/login',AuthController.login)
router.get('/test',AuthController.test)

export default router