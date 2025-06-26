import db from '../db/db.js';

export const getAllPosts = async (req, res) => {
  await db.read();
  res.status(200).json(db.data.posts);
};

export const createPost = async (req, res) => {
  const { title, body } = req.body;
  if (!title || !body) {
    return res.status(400).json({ error: 'Title and body are required' });
  }

  const newPost = { id: Date.now(), title, body };
  db.data.posts.push(newPost);
  await db.write();
  res.status(201).json(newPost);
};

export const updatePost = async (req, res) => {
  const { id } = req.params;
  const { title, body } = req.body;

  await db.read();
  const index = db.data.posts.findIndex(p => p.id == id);

  if (index === -1) {
    return res.status(404).json({ error: 'Post not found' });
  }

  db.data.posts[index] = { ...db.data.posts[index], title, body };
  await db.write();

  res.status(200).json(db.data.posts[index]);
};

export const deletePost = async (req, res) => {
  const { id } = req.params;

  await db.read();
  db.data.posts = db.data.posts.filter(p => p.id != id);
  await db.write();

  res.status(204).send();
};