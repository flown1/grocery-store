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
    let newTotal = state.total + action.payload.price;
    return ({
        ...state,
        cart: [
            ...state.cart,
            action.payload
        ],
        total: newTotal
    })
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_PRODUCT_TO_CART":
        return handleAddProductToCart(state, action);
    default:
      return state
  }

}