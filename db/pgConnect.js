import { Sequelize } from 'sequelize'

const sequelize = new Sequelize({
  dialect: 'postgres',
  database: 'express_job_dev',
  username: 'sychien',
  host: 'localhost',
  port: 5432,
})

const connectPgDB = async (sequelize) => {
  try {
    await sequelize.authenticate()
    console.log('PG Connection has been established successfully.')
  } catch (error) {
    console.error('Unable to connect to the PG database:', error)
  }
}

export { connectPgDB, sequelize }
