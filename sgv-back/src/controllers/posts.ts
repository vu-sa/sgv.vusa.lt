import { Post, PrismaClient } from '@prisma/client';
import { Request, Response, NextFunction } from 'express';
import { PostData } from '../staticData/PostData';
import { mapDtoToPost, mapPostToDto, mapPostToDtos, PostDto, PostEntity } from '../types/Post';

const prisma = new PrismaClient();

const loadUpStaticPosts = async (req: Request, res: Response, next: NextFunction) => {
    let apiKey: string = req.params.key;
    if (!(apiKey 
        === "z2b1x5q7ZlmS1YvwqBl080iaPN7267CtQdTU9rMEQzmu4iLOjmPxELpUER4YLZWUqwbqRPPn8EKtxOzkAO3BicG38rs10B22y7NnaMIoVMJQuUR5VsARB80Qkjpnxxau"))
    {
        return res.status(403).json({
            message: "Forbidden"
        });
    }
    let posts = await prisma.post.findMany()
    if(posts.length >= 1)
    {
        prisma.post.deleteMany({}).then(x =>
            {
                
            }
        )
    }
    if(posts.length < 1)
    {
        PostData.forEach(async (x: PostDto) => await prisma.post.create({
            data: mapDtoToPost(x)
        }));
    }
    
    return res.status(200).json({
        message: 'Success!'
    });

};


// getting all posts
const getPosts = async (req: Request, res: Response, next: NextFunction) => {
    // get some posts
    let result: PostEntity [] = mapPostToDtos(await prisma.post.findMany());
    return res.status(200).json({
        message: result
    });
};

// getting a single post
const getPost = async (req: Request, res: Response, next: NextFunction) => {
    // get the post id from the req
    let id: string = req.params.id;
    // get the post
    const postData = await prisma.post.findUnique({
        where: { id: Number(id) },
    })
    return res.status(200).json({
        message: postData
    });
};

// updating a post
const updatePost = async (req: Request, res: Response, next: NextFunction) => {
    let apiKey: string = req.body.apiKey;
    if (!(apiKey 
        === "z2b1x5q7ZlmS1YvwqBl080iaPN7267CtQdTU9rMEQzmu4iLOjmPxELpUER4YLZWUqwbqRPPn8EKtxOzkAO3BicG38rs10B22y7NnaMIoVMJQuUR5VsARB80Qkjpnxxau"))
    {
        return res.status(403).json({
            message: "Forbidden"
        });
    }
    // get the post id from the req.params
    let id: string = req.params.id;
    // get the data from req.body
    let data: any = {}
    let title: string = req.body.title ?? null;
    if (title)
    {
        data.title = title
    }
    let content: string = req.body.content ?? null;
    if (content)
    {
        data.content = content
    }
    let priority: string = req.body.priority ?? null;
    if (priority)
    {
        data.priority = priority
    }
    let category: string = req.body.category ?? null;
    if (category)
    {
        data.category = category
    }
    let subcategory: string = req.body.subcategory ?? null;
    if (subcategory)
    {
        data.subcategory = subcategory
    }
    let moreLink: string = req.body.moreLink ?? null;
    if (moreLink)
    {
        data.moreLink = moreLink
    }
    let isSponsored: string = req.body.isSponsored ?? null;
    if (isSponsored)
    {
        data.isSponsored = isSponsored
    }

    // update the post
    const updatedPost = await prisma.post.update({
        where: { id: Number(id) || undefined },
        data,
      })
    // return response
    return res.status(200).json({
        message: updatedPost
    });
};

// deleting a post
const deletePost = async (req: Request, res: Response, next: NextFunction) => {
    // get the post id from req.params
    let id: string = req.params.id;
    // delete the post
    // get the data from req.body
    let apiKey: string = req.body.apiKey;
    if (!(apiKey 
        === "z2b1x5q7ZlmS1YvwqBl080iaPN7267CtQdTU9rMEQzmu4iLOjmPxELpUER4YLZWUqwbqRPPn8EKtxOzkAO3BicG38rs10B22y7NnaMIoVMJQuUR5VsARB80Qkjpnxxau"))
    {
        return res.status(403).json({
            message: "Forbidden"
        });
    }
    let postDto: Post = req.body.post;
    // add the post
    const postEntity = await prisma.post.delete({
        where: { id: postDto.id || undefined },
      })
    // return response
    return res.status(200).json({
        message: 'post deleted successfully'
    });
};

// adding a post
const addPost = async (req: Request, res: Response, next: NextFunction) => {
    // get the data from req.body
    let apiKey: string = req.body.apiKey;
    if (!(apiKey 
        === "z2b1x5q7ZlmS1YvwqBl080iaPN7267CtQdTU9rMEQzmu4iLOjmPxELpUER4YLZWUqwbqRPPn8EKtxOzkAO3BicG38rs10B22y7NnaMIoVMJQuUR5VsARB80Qkjpnxxau"))
    {
        return res.status(403).json({
            message: "Forbidden"
        });
    }
    let post: Post = req.body.post;
    // add the post
    const postEntity = await prisma.post.create({
        data: {
            ...post
        }
      })
    // return response
    return res.status(200).json({
        message: postEntity
    });
};

export default { getPosts, getPost, updatePost, deletePost, addPost, loadUpStaticPosts };