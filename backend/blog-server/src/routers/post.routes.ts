import { Router } from 'express'
import auth from '../../middlewires/auth'
import { postController } from '../controllers'


const router = Router()

router.post('/create', auth(['user']),postController.createPost)

export default router
