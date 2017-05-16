'use strict'

const Schema = use('Schema')

class ProductsTableSchema extends Schema {

  up () {
    this.create('products', (table) => {
      table.increments()
      table.timestamps()
      table.int('product_category_id')
      table.int('product_details')
      table.string('name')
      table.string('price')
    })
  }

  down () {
    this.drop('products')
  }

}

module.exports = ProductsTableSchema
