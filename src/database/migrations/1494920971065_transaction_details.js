'use strict'

const Schema = use('Schema')

class TransactionDetailsTableSchema extends Schema {

  up () {
    this.create('transaction_details', (table) => {
      table.increments()
      table.timestamps()
      table.int('transaction_id')
      table.int('product_id')
      table.int('delivery_time')
      table.int('location')
      table.int('payment')
      table.string('special_request')
    })
  }

  down () {
    this.drop('transaction_details')
  }

}

module.exports = TransactionDetailsTableSchema
