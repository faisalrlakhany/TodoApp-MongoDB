import express from 'express'
import 'dotenv/config'
import mongoose from 'mongoose'
import morgan from 'morgan'
import authRouter from './routers/auth.js'
import todoRouter from './routers/todo.js'
import cors from 'cors'

const app = express()
const PORT = 4000

app.use(express.json())
app.use(morgan('tiny'))
app.use(cors())

mongoose
  .connect(process.env.MONGODBURI)
  .then(() => console.log('MongoDb connected'))
  .catch(err => console.log('MongoDb connection error', err))

app.get('/', (req, res) => {
  res.send('Todo App Api')
})

app.use('/todo', authRouter)
app.use('/todo', todoRouter)

app.listen(PORT, () => {
  console.log(`Server Is Running On Port ${PORT}`)
})
