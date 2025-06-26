import express from 'express';
import {
  getAllPosts,
  createPost,
  updatePost,
  deletePost
} from '../controllers/postController.js';

const router = express.Router();

router.get('/posts', getAllPosts);
router.post('/posts', createPost);
router.put('/posts/:id', updatePost);
router.delete('/posts/:id', deletePost);

export default router;