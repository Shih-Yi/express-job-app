import express from 'express'
import vhost from 'vhost'
const app = express()
const map = express()
import 'express-async-errors'
import morgan from 'morgan'
import dotenv from 'dotenv'
dotenv.config()

import { dirname } from 'path'
import { fileURLToPath } from 'url'
import path from 'path'

// Security Packages
import helmet from 'helmet'
import xss from 'xss-clean'
import mongoSanitize from 'express-mongo-sanitize'

// db
import connectDB from './db/connect.js'

// routers
import authRouter from './routes/authRoutes.js'
import jobsRouter from './routes/jobsRoutes.js'

// middleware
import notFoundMiddleware from './middleware/not-found.js'
import errorHandleMiddleware from './middleware/error-handler.js'
import authenticateUser from './middleware/auth.js'
import cookieParser from 'cookie-parser'

if (process.env.NODE_ENV !== 'production') {
  app.use(morgan('dev'))
}

const __dirname = dirname(fileURLToPath(import.meta.url))

// only when ready to deploy
app.use(express.static(path.resolve(__dirname, './client/build')))
map.use(express.static(path.resolve(__dirname, './client_new/build')))

const domain =
  process.NODE_ENV === 'production'
    ? 'express-job-app.onrender.com'
    : 'mysite.local'

app.use(vhost(`map.${domain}`, map))

app.use(express.json())
app.use(helmet())
app.use(xss())
app.use(mongoSanitize())
app.use(cookieParser())

app.use('/api/v1/auth', authRouter)
app.use('/api/v1/jobs', authenticateUser, jobsRouter)

// app.get('/', (req, res) => {
//   res.send('Welcome!')
// })

map.get('/api2', (req, res) => {
  // res.send('Welcome!')
  res.json({ msg: 'Welcome to api2' })
})

// map.get('/', (req, res) => {
//   console.log(req.headers)
//   res.send('here is the MAP subdomain')
// })
// only when ready to deploy
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, './client/build', 'index.html'))
})

map.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, './client_new/build', 'index.html'))
})

app.use(notFoundMiddleware)
app.use(errorHandleMiddleware)

const port = process.env.PORT || 3001

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL)
    app.listen(port, () => {
      console.log(`Server is listening on port ${port}...`)
    })
  } catch (error) {
    console.log(error)
  }
}

start()
