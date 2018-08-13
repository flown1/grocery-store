const initialState = {

    products: [
      {
        id:     0,
        name: "Schab",
        price: 999,
        quantity: 1,
        imgUrl: 'http://3.bp.blogspot.com/-szPx_TTTS-Y/U4bcr0rPTRI/AAAAAAAAFyU/Y0ucPWe_qek/s1600/Kotlety+Schabowe+5.jpg',
      },{
        id:    1,
        name: 'Carrot',
        price: 123.12,
        quantity: 1,
        imgUrl: "https://media.mercola.com/assets/images/foodfacts/carrot-nutrition-facts.jpg"
      },{
        id:    2,
        name: 'Beetroot',
        price: 64,
        quantity: 1,
        imgUrl: "http://countryfruit.uy/238-thickbox_default/remolacha.jpg"
      }
    ],
    cart:[],
    total: 0
};

const handleAddProductToCart = (state, action) => {
    let newTotal = state.total + action.payload.product.price;

    let newCart = state.cart;
    const productToAdd = action.payload.product;

    let found = false;
    for(let i = 0; i <state.cart.length; i++){
        if(state.cart[i].id === productToAdd.id){
            state.cart[i].quantity += 1;//productToAdd.quantity;
            found = true;
            break;
        }
    }
    if(!found) {
        newCart = [
            ...state.cart,
            action.payload.product
        ];
    }else{
        console.log("not found will send cart:", newCart);
    }
    return ({
        ...state,
        cart: newCart,
        total: newTotal
    })
};

function handleProductQuantityIncrease(state, action) {
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
}

function handleProductQuantityDecrease(state, action) {
    return undefined;
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_PRODUCT_TO_CART":
        return handleAddProductToCart(state, action);
    case "PRODUCT_QUANTITY_INCREASE":
        return handleProductQuantityIncrease(state, action);
    case "PRODUCT_QUANTITY_DECREASE":
        return handleProductQuantityDecrease(state, action);
    default:
      return state
  }
}