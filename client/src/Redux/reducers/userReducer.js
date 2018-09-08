
const initialState = {
    isLoggedIn: false,
    userInfo: {
        firstName: 'Pszemek',
        lastName: 'Placek',
        admin: false
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

const handleUserSignedOut = (state, action) =>{
    return ({
        ...state,
        isLoggedIn: action.payload.isLoggedIn
    });
}

export default function reducer(state = initialState, action) {
    switch(action.type){
        case 'USER_SIGN_IN':
            return handleUserSignIn(state, action);
        case 'USER_SIGNED_IN':
            return handleUserSignedIn(state, action);
        case 'USER_SIGNED_OUT':
            return handleUserSignedOut(state, action);
    }
    return state;
}