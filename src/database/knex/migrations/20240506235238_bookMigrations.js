exports.up = knex => knex.schema.createTable("book", table => {
    table.increments("id")
    table.text("name")
    table.text("description")
    table.text("category")
    table.text("file_name")
    table.text("user_id").references("id").inTable("user").onDelete("CASCADE")
})

exports.down = knex => knex.schema.deleteTable("book")