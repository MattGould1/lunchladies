'use strict'

const Schema = use('Schema')

class TransactionsTableSchema extends Schema {

  up () {
    this.create('transactions', (table) => {
      table.increments()
      table.timestamps()
      table.integer('user_id')
      table.integer('transaction_detail_id')
      table.string('delivery_time')
      table.string('location')
      table.integer('payment_status')
      table.integer('total_price')
    })
  }

  down () {
    this.drop('transactions')
  }

}

module.exports = TransactionsTableSchema
