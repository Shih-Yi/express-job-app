export default {
  development: {
    dialect: 'postgres',
    host: 'localhost',
    port: 5432,
    database: 'express_job_dev',
    username: 'sychien',
    password: null,
    logging: true
  },
  test: {
    dialect: 'postgres',
    host: 'localhost',
    port: 5432,
    database: 'your_test_database_name',
    username: 'your_test_username',
    password: 'your_test_password',
    logging: false
  },
  production: {
    dialect: 'postgres',
    host: 'localhost',
    port: 5432,
    database: 'your_prod_database_name',
    username: 'your_prod_username',
    password: 'your_prod_password',
    logging: false
  }
}

