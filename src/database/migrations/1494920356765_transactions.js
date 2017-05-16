'use strict'

const Schema = use('Schema')

class TransactionsTableSchema extends Schema {

  up () {
    this.create('transactions', (table) => {
      table.increments()
      table.timestamps()
      table.int('user_id')
      table.int('transaction_detail_id')
      table.decimal('price')
    })
  }

  down () {
    this.drop('transactions')
  }

}

module.exports = TransactionsTableSchema
