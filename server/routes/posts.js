import express from 'express'
import { createPost, deletePost, getAllPosts, getOnePost, updatePost } from '../controllers/posts.js'
const router = express.Router()

router.get('/', getAllPosts)
router.get('/:id', getOnePost)
router.post('/', createPost)
router.delete('/:id', deletePost)
router.patch('/:id', updatePost)

export default router