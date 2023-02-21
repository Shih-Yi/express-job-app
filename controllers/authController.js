import User from '../models/User.js'
import { StatusCodes } from 'http-status-codes'

class CustomAPIError extends Error {
  constructor(message) {
    super(message)
  }
}

class BadRequestError extends CustomAPIError {
  constructor(message) {
    super(message)
    this.statusCode = StatusCodes.BAD_REQUEST
  }
}

const register = async (req, res) => {
  const { name, email, password } = req.body

  if (!name || !email || !password) {
    throw new BadRequestError('please provide all values')
  }

  console.log(req.body)
  const user = await User.create(req.body)
  res.status(StatusCodes.CREATED).json({ user })
}

const login = async (req, res) => {
  res.send('register user')
}

const updateUser = async (req, res) => {
  res.send('update user')
}

export { register, login, updateUser }
