export const APIFETCHER_CONFIG = {
    ROOT_URL: "http://localhost:8080/",
    METHODS_CONFIG:{
        POST: {
            method: "POST",
            mode: "cors",
            cache: "no-cache",
            credentials: "same-origin",
            headers:
                new Headers({
                    'Content-Type': 'application/json',
                    'Authorization': 'abcdef'
                }),
            redirect: "follow",
            referrer: "no-referrer",
        }
    },
    PRODUCTS_ACTIONS: {
        GET_ALL: "product/products",
        ADD: "product/add"
    },
    USER_ACTIONS: {
        SIGN_IN: "users/signIn",
        SIGN_UP: "users/signUp"
    }
};