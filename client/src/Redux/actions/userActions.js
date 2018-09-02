export const signIn = (email, password) => {
    return {
        type: "USER_SIGN_IN",
        payload: {
            email: email,
            password: password
        }
    }
};

export const userSignedIn = (user) => {
    return {
        type: "USER_SIGNED_IN",
        payload: {
            user: user
        }
    }
};