import express from 'express'
import { createPost, deletePost, getAllPosts, updatePost, likePost } from '../controllers/posts.js'
const router = express.Router()

router.get('/', getAllPosts)
router.post('/', createPost)
router.delete('/:id', deletePost)
router.patch('/:id', updatePost)
router.patch('/:id/likePost', likePost)

export default router