'use strict'

const Lucid = use('Lucid')

class ProductCategory extends Lucid {
  product () {
    return this.hasMany('App/Model/Product')
  }
}

module.exports = ProductCategory
