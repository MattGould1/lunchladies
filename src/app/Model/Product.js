'use strict'

const Lucid = use('Lucid')

class Product extends Lucid {
  category () {
    return this.belongsTo('App/Model/ProductCategory')
  }
  detail () {
      return this.hasOne('App/Model/ProductDetail')
  }
}

module.exports = Product
