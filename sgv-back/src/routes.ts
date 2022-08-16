import express from 'express';
import controller from './controllers/posts';
const routes = express.Router();

routes.get('/posts', controller.getPosts);
routes.get('/posts/:id', controller.getPost);
routes.put('/posts/:id', controller.updatePost);
routes.delete('/posts/:id', controller.deletePost);
routes.post('/posts', controller.addPost);
routes.get('/reloadPosts/:key', controller.loadUpStaticPosts);

export default routes;