export const addProduct = (product) => {
    return {
      type: "ADD_PRODUCT_TO_CART",
      payload: {
          product: product
      }
    }
};

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

export const productsFetchBegin = () => {
    return {
        type: "PRODUCTS_FETCH_BEGIN"
    }
};

export const productsFetchSuccess = (products) => {
    return {
        type: "PRODUCTS_FETCH_SUCCESS",
        payload: {
            products: products
        }
    }
};

export const productsFetchFailure = (error) => {
    return {
        type: "PRODUCTS_FETCH_FAILURE",
        payload: {
            error: error
        }
    }
};