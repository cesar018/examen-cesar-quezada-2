import { Router } from 'express'
const router=Router();
import * as postCtr from '../controllers/posts.controller'
const {checkToken}=require('../auth/token_validation')
router.get('/',postCtr.readAllPost);
router.get('/:id',checkToken,postCtr.readPost);
router.delete('/:id',checkToken,postCtr.delPost);
router.post('/',postCtr.createPost);
router.put('/:id',checkToken,postCtr.updatePost);
export default router;