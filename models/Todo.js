import mongoose from 'mongoose'

const { Schema } = mongoose

const todoSchema = new Schema(
  {
    title: {
      type: String,
      required: true
    },
    body: {
      type: String,
      required: true
    },
    user: [{
      type: mongoose.Schema.Types.ObjectId ,
      ref: 'User',
      default: null
    }]
  },
  {
    timestamps: true
  }
)

const Todo = mongoose.model('Todo', todoSchema)

export default Todo
