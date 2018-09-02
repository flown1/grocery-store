import {APIFETCHER_CONFIG} from "../Configs/ApiFetcherConfig";

export function getAllProducts(callback){

  return fetch(APIFETCHER_CONFIG.ROOT_URL + APIFETCHER_CONFIG.PRODUCTS_ACTIONS.GET_ALL)
    .then(resp => resp.json())
      .then(resp => {
          console.log(resp);
          let products = [];
          resp.map((product) => {
              products.push({
                  id: product.id,
                  name: product.name,
                  price: product.price,
                  quantity: product.quantity,
                  imgUrl: product.img_url,
                  desc: {
                      vitamins: product.desc_vitamins,
                      text: product.desc_text,
                      origin: product.desc_origin
                  }
              });
          });
          callback(products);
      })
};

export function signInUser(user, callback){
    return fetch(APIFETCHER_CONFIG.ROOT_URL + APIFETCHER_CONFIG.USER_ACTIONS.SIGN_IN,
        Object.assign({}, APIFETCHER_CONFIG.METHODS_CONFIG.POST,
            {
                body: JSON.stringify({"email": user.email, "password": user.password})
            }
        )
    )
    .then( data => data.json())
    .then( (data) => {
        callback(data);
    })
    .catch( (err) => {
        console.log("Unexpected error while signing in:", err);
        callback(null);
    });
}

export function signUpUser(user,callback){
    return fetch(APIFETCHER_CONFIG.ROOT_URL + APIFETCHER_CONFIG.USER_ACTIONS.SIGN_IN,
        Object.assign({}, APIFETCHER_CONFIG.METHODS_CONFIG.POST,
            {
                body: JSON.stringify(user)
            }
        )
    )
    .then( data => data.json())
    .then( (data) => {
        console.log("here is data: ", data);
        callback(data);
    })
    .catch( (err) => {
        console.log("Unexpected error while signing up:", err);
        callback(null);
    });
}
