// Update with your config settings.
console.log(process.env.DATABASE_URL)
module.exports = {
  client: 'postgresql',
  connection: process.env.DATABASE_URL,
  pool: {
    min: 2,
    max: 10
  },
  migrations: {
    tableName: 'knex_migrations',
    directory: './lib/migrations'
  },
  seeds: {
    directory: './seeds'
  }
}
