
exports.up = function (knex) {
  return Promise.all([knex.schema
    .createTable('account', table => {
      table.increments('id').primary()
      table.string('email')
      table.string('password')
      table.timestamps()
    })])
}

exports.down = function (knex) {
  return Promise.all([knex.schema
    .dropTable('account')
  ])
}
