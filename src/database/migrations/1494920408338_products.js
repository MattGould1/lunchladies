'use strict'

const Schema = use('Schema')

class ProductsTableSchema extends Schema {

  up () {
    this.create('products', (table) => {
      table.increments()
      table.timestamps()
      table.integer('product_category_id')
      table.string('name')
      table.string('picture')
      table.string('price')
      table.string('description')
      table.string('sizes')
    })
  }

  down () {
    this.drop('products')
  }

}

module.exports = ProductsTableSchema
