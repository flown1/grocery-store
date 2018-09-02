
const initialState = {
    isLoggedIn: false,
    userInfo: {
        firstName: 'Pszemek',
        lastName: 'Placek',
    }
};

const handleUserSignIn = (state, action) => {
    return undefined
};

const handleUserSignedIn = (state, action) => {
    return ({
        ...state,
        isLoggedIn: true,
        userInfo: action.payload.user
    });
};

export default function reducer(state = initialState, action) {
    switch(action.type){
        case 'USER_SIGN_IN':
            return handleUserSignIn(state, action);
        case 'USER_SIGNED_IN':
            return handleUserSignedIn(state, action);
    }
    return state;
}