import mongoose from 'mongoose'

const { Schema } = mongoose

const userSchema = new Schema(
  {
    email: {
      type: String,
      unique: true,
      required: true
    },
    username: {
      type: String,
      unique: true,
      required: true
    },

    password: {
      type: String,
      required: true
    },
    list: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Todo',
        default: null
      }
    ]
  },
  {
    timestamps: true
  }
)

const User = mongoose.model('User', userSchema)

export default User
