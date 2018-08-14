export const signIn = (login, password) => {
    return {
        type: "USER_SIGN_IN",
        payload: {
            login: login,
            password: password
        }
    }
};