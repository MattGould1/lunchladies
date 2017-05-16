'use strict'

const productCategory = use('App/Model/ProductCategory')

class ProductsCategoryController {
  * store(request, response) {
    const body = request.all()

    const productcategory = yield productCategory.create({
      name: body.name
    })

    return response.send(productcategory)
  }

  * update(request, response) {
    const body = request.all()
    const id = request.param('id')

    const productcategory = yield productCategory.find(id)

    productcategory.name = body.name

    yield productcategory.save()

    return response.send(productcategory)
  }
}

module.exports = ProductsCategoryController
