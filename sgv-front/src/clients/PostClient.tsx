import axios from 'axios'
import { PostEntity } from '../types/Post'

const apiClient = axios.create({
  baseURL: 'http://localhost:6060',
  headers: {
    'Content-type': 'application/json',
  },
})

type PostResponse = {
  message: PostEntity[]
}

export const getAllPosts = async () => {
  const response = await apiClient.get<PostResponse>('/posts')
  return response.data
}
