import jwt from 'jsonwebtoken'
import { UnAuthenticatedError } from '../errors/index.js'

const auth = async (req, res, next) => {
  const token = req.cookies.token
  if (!token) {
    throw new UnAuthenticatedError('Authentication code is missing')
  }

  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET)
    req.user = { userId: payload.userId }
    next()
  } catch (error) {
    throw new UnAuthenticatedError('Authentication Invalid!')
  }
}

export default auth
