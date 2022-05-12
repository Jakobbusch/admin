const model = (getProducts,filter =() => true) =>{
        const productmap = {}

        getProducts.foreach(p => productmap[p.productID] =p)


    return {getProducts}
}

export default model