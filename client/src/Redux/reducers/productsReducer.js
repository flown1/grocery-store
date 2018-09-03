const initialState = {

    products: [],
    filteredProducts: this.products,
    loading: false,
    error: null,
    cart:[],
    total: 0
};

const handleAddProductToCart = (state, action) => {
    let newTotal = state.total + action.payload.product.price;

    let newCart = state.cart;
    const productToAdd = action.payload.product;

    if(productToAdd.quantity > 0) {
        let found = false;
        for (let i = 0; i < state.cart.length; i++) {
            if (state.cart[i].id === productToAdd.id) {
                state.cart[i].quantity += 1; //productToAdd.quantity;
                found = true;
                break;
            }
        }
        if (!found) {
            newCart = [
                ...state.cart,
                action.payload.product
            ];
        }
    }
    return ({
        ...state,
        cart: newCart,
        total: newTotal
    })
};

const handleProductQuantityIncrease = (state, action) => {
    let newProducts = [];
    state.products.map( (p) => {
        if(p.id === action.payload.product.id){
            p.quantity += 1;
        }
        newProducts.push(p);
    });
    return ({
        ...state,
        products: newProducts
    })
};

const handleProductQuantityDecrease = (state, action) => {
    let newProducts = [];
    state.products.map( (p) => {
        if(p.id === action.payload.product.id && p.quantity > 0){
            p.quantity -= 1;
        }
        newProducts.push(p);
    });
    return ({
        ...state,
        products: newProducts
    })
};

const handleProductsFetchBegin = (state, action) => {
    return ({
        ...state,
        loading: true,
        error: null
    });
};

const handleProductsFetchSuccess = (state, action) => {
    return ({
        ...state,
        products: action.payload.products,
        filteredProducts: action.payload.products,
        loading: false,
        error: null
    });
};

const handleProductsFetchFailure = (state, action) => {
    return ({
        ...state,
        loading: false,
        error: action.payload.error
    });
};

const handleProductsFilter = (state, action) => {
    let newFilteredProducts = [];

    newFilteredProducts = state.products.filter((prod) => {
        if(action.payload.searchQuery === '')
            return state.products;
        return prod.name.toLowerCase().includes(action.payload.searchQuery.toLowerCase());
    });
    return ({
        ...state,
        filteredProducts: newFilteredProducts
    });
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_PRODUCT_TO_CART":
        return handleAddProductToCart(state, action);
    case "PRODUCT_QUANTITY_INCREASE":
        return handleProductQuantityIncrease(state, action);
    case "PRODUCT_QUANTITY_DECREASE":
        return handleProductQuantityDecrease(state, action);
    case "PRODUCTS_FETCH_BEGIN":
        return handleProductsFetchBegin(state, action);
    case "PRODUCTS_FETCH_SUCCESS":
          return handleProductsFetchSuccess(state, action);
    case "PRODUCTS_FETCH_FAILURE":
          return handleProductsFetchFailure(state, action);
    case "PRODUCTS_FILTER":
          return handleProductsFilter(state, action);
    default:
        return state
  }
}