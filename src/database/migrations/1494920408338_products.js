'use strict'

const Schema = use('Schema')

class ProductsTableSchema extends Schema {

  up () {
    this.create('products', (table) => {
      table.increments()
      table.timestamps()
      table.string('name')
      table.string('picture')
      table.string('description')
    })
  }

  down () {
    this.drop('products')
  }

}

module.exports = ProductsTableSchema
