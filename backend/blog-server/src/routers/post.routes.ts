import { Router } from 'express'
import multer from 'multer'
import auth from '../../middlewires/auth'
import { postController } from '../controllers'


const router = Router()
const upload = multer({ dest: 'uploads/' })

router.post('/create', auth(['user']),postController.createPost)
router.post('/view/radius', auth(['user']), postController.viewPostWithinaRadius)
router.get(
  '/view/global',
  auth(['user']),
  postController.viewGlobalPostData
)
router.get('/view/image/:key', auth(['user']), postController.viewImage)
router.get(
  '/descryption/search',
  auth(['user']),
  postController.searchWithDescryption
)

router.get('/view/global', auth(['user']), postController.viewGlobalPostData)
router.post(
  '/images/upload',
  [auth(['admin']), upload.any()],
  postController.uploadPostImages
)
export default router
