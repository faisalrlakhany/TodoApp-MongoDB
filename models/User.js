import mongoose from 'mongoose'

const { Schema } = mongoose

const userSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true
    },

    password: {
      type: String,
      required: true
    },
    list: {
      type: mongoose.types.ObjectId,
      ref: 'Todo'
    }
  },
  {
    timestamps: true
  }
)

const User = mongoose.model('User', userSchema)

export default User
