'use strict'

// models
const Product = use('App/Model/Product')

class ProductsController {

  * store(request, response) {
    const body = request.all()

    // const product = yield Product.create({
    //     name: body.name,
    //     picture: body.picture,
    //     price: body.price,
    //     sizes: body.sizes,
    //     description: body.description,
    //     product_category_id: body.product_category_id
    // })

    return response.send(1);
  }

  * update(request, response) {
    const body = request.all()
    const id = request.param('id')
    console.log(id)

    return response.send(id)
    // const product = yield Product.find(id)

    // product.name = body.name
    // product.picture = body.picture
    // product.price = body.price
    // product.sizes = body.sizes
    // product.description = body.description
    // product_category_id = body.product_category_id

    // yield product.save()

    // return response.send(product)
  }

}

module.exports = ProductsController
