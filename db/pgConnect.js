import { Sequelize } from 'sequelize'
import config from '../config/config.js'

const sequelize = new Sequelize(config.development)

const connectPgDB = async (sequelize) => {
  try {
    await sequelize.authenticate()
    console.log('PG Connection has been established successfully.')
  } catch (error) {
    console.error('Unable to connect to the PG database:', error)
  }
}

export { connectPgDB, sequelize }
