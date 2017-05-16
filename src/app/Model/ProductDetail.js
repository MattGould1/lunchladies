'use strict'

const Lucid = use('Lucid')

class ProductDetail extends Lucid {
  product () {
    return this.belongsTo('App/Model/Product')
  }
}

module.exports = ProductDetail
