const initialState = {
    isLoggedIn: true,
    userInfo: {
        firstName: 'Pszemek',
        lastName: 'Placek',
    }
};

const handleUserSignIn = (state, action) => {
    return undefined
};

export default function reducer(state = initialState, action) {
    switch(action.TYPE){
        case 'USER_SIGN_IN':
            return handleUserSignIn(state, action);

    }
    return state;
}