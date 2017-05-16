'use strict'

const Lucid = use('Lucid')

class Transaction extends Lucid {
    details () {
    return this.hasMany('App/Model/TransactionDetail')
  }
}

module.exports = Transaction
