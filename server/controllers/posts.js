import mongoose from 'mongoose'
import Post from '../models/Post.js'

export const getAllPosts = async (req, res) => {
    try {
        const posts = await Post.find()
        res.send(posts)
    } catch (error) {
        console.log(error)
    }
}

export const getOnePost = (req, res) => {
    res.send('Get One Posts')
}

export const createPost = async (req, res) => {
    const post = req.body
    const newPost = new Post(post)
    try {
        await newPost.save()
        res.send(newPost)
    } catch (error) {
        console.log(error)
    }
}

export const deletePost = (req, res) => {
    res.send('Delete One Post')
}

export const updatePost = (req, res) => {
    res.send('Update One Post')
}