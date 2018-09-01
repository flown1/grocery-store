export const signIn = (email, password) => {
    return {
        type: "USER_SIGN_IN",
        payload: {
            email: email,
            password: password
        }
    }
};