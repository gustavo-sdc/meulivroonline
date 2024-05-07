
exports.up = knex => knex.schema.createTable("user", table =>{
    table.increments("id")
    table.text("name")
    table.text("email")
    table.text("password")
})

exports.down = knex => knex.schema.dropTable("user")