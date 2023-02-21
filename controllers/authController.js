import User from '../models/User.js'

const register = async (req, res) => {
  try {
    console.log(req.body)
    const user = await User.create(req.body)
    res.status(201).json({ user })
  } catch (error) {
    res.status(500).json({ msg: 'create user error' })
  }
}

const login = async (req, res) => {
  res.send('register user')
}

const updateUser = async (req, res) => {
  res.send('update user')
}

export { register, login, updateUser }
