'use strict'

const Schema = use('Schema')

class ProductDetailsTableSchema extends Schema {

  up () {
    this.create('product_details', (table) => {
      table.increments()
      table.timestamps()
      table.integer('product_id')
      table.integer('product_category_id')
      table.integer('price')
      table.integer('stock')
    })
  }

  down () {
    this.drop('product_details')
  }

}

module.exports = ProductDetailsTableSchema
