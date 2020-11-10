import mongoose from 'mongoose'

const postSchema = mongoose.Schema({
    title: String,
    message: String,
    creater: String,
    tags: [String],
    selectedFile: String,
    price: Number,
    stars: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        Default: new Date()
    }, 
})


const PostMessage= mongoose.model('PostMessage', postSchema)

export default PostMessage