'use strict'

const Schema = use('Schema')

class ProductCategoriesTableSchema extends Schema {

  up () {
    this.create('product_categories', (table) => {
      table.increments()
      table.timestamps()
      table.string('name')
    })
  }

  down () {
    this.drop('product_categories')
  }

}

module.exports = ProductCategoriesTableSchema
