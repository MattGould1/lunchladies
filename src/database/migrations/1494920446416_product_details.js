'use strict'

const Schema = use('Schema')

class ProductDetailsTableSchema extends Schema {

  up () {
    this.create('product_details', (table) => {
      table.increments()
      table.timestamps()
      table.int('product_id')
      table.string('name')
      table.string('price')
      table.string('size')
      table.string('quantity')
    })
  }

  down () {
    this.drop('product_details')
  }

}

module.exports = ProductDetailsTableSchema
