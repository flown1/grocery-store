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

export const productQuantityDecrease = (product) => {
    return {
        type: "PRODUCT_QUANTITY_DECREASE",
        payload: {
            product: product
        }
    }
};