'use strict'

const Lucid = use('Lucid')

class TransactionDetail extends Lucid {
  transaction () {
    return this.belongsTo('App/Model/Transaction')
  }
}

module.exports = TransactionDetail
