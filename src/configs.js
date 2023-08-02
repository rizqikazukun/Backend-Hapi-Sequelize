const config = {
  app: {
    host: process.env.APP_BE_HOST,
    port: process.env.APP_BE_PORT
  },
  sql: {
    host: process.env.SQL_HOST,
    port: process.env.SQL_PORT,
    db: process.env.SQL_DB,
    username: process.env.SQL_USERNAME,
    password: process.env.SQL_PASSWORD

  }
}

module.exports = config
