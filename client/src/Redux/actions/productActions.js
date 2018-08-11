export const addProduct = (product) => {
    return {
      type: "ADD_PRODUCT_TO_CART",
      payload: {
          product: product
      }
    }
}

export const productQuantityIncrease = (product) => {
    return {
        type: "PRODUCT_QUANTITY_INCREASE",
        payload: {
            product: product
        }
    }
};