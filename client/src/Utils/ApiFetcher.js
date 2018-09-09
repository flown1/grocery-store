import {APIFETCHER_CONFIG} from "../Configs/ApiFetcherConfig";

export function getAllProducts(callback){

  return fetch(APIFETCHER_CONFIG.ROOT_URL + APIFETCHER_CONFIG.PRODUCTS_REQUESTS.GET_ALL)
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
    return fetch(APIFETCHER_CONFIG.ROOT_URL + APIFETCHER_CONFIG.USER_REQUESTS.SIGN_IN,
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

export function addProduct(productData, callback) {
    const objToSend = {
        desc_origin: productData.desc.origin,
        desc_text: productData.desc.text,
        desc_vitamins: productData.desc.vitamins,
        img_url: productData.imgUrl,
        name: productData.name,
        price: productData.price,
        quantity: 1
    };
    return fetch(APIFETCHER_CONFIG.ROOT_URL + APIFETCHER_CONFIG.PRODUCTS_REQUESTS.ADD,
        Object.assign({}, APIFETCHER_CONFIG.METHODS_CONFIG.POST,
            {
                body: JSON.stringify(objToSend)
            }
        )
    )
        .then((data) => {
            console.log("Sent request. Received data: ", data);
            callback(data);
        })
        .catch((err) => {
            console.log("Unexpected error while adding product:", err);
            callback({status: 400});
        });
}

export function signUpUser(user,callback){
    return fetch(APIFETCHER_CONFIG.ROOT_URL + APIFETCHER_CONFIG.USER_REQUESTS.SIGN_UP,
        Object.assign({}, APIFETCHER_CONFIG.METHODS_CONFIG.POST,
            {
                body: JSON.stringify(user)
            }
        )
    )
    .then( (data) => {
        console.log("Sent request. Received data: ", data);
        callback(data);
    })

    .catch( (err) => {
        console.log("Unexpected error while signing up:", err);
        callback({status: 400});
    });
}

export function addOrder(order, callback){
    console.log("order:", order);
    return fetch(APIFETCHER_CONFIG.ROOT_URL + APIFETCHER_CONFIG.ORDER_REQUESTS.ADD,
        Object.assign({}, APIFETCHER_CONFIG.METHODS_CONFIG.POST,
            {
                body: JSON.stringify(order)
            }
        )
    )
    .then( (data) => {
        console.log("Sent request. Received data: ", data);
        callback(data);
    })
    .catch( (err) => {
        console.log("Unexpected error while signing up:", err);
        callback({status: 400});
    });
}
