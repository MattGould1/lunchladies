'use strict'

const Schema = use('Schema')

class TransactionDetailsTableSchema extends Schema {

  up () {
    this.create('transaction_details', (table) => {
      table.increments()
      table.timestamps()
      table.integer('transaction_id')
      table.integer('product_id')
      table.integer('quantity')
      table.integer('price')
      table.string('special_request')
    })
  }

  down () {
    this.drop('transaction_details')
  }

}

module.exports = TransactionDetailsTableSchema
