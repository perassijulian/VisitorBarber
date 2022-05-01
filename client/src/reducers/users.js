const users = (state = [], action) => {
    switch (action.type) {
        case 'SIGNUP':
            return [...state, action.payload];
        
        case 'LOGIN':
            return state;
        
        case 'LOGOUT':
            return state;
        
        default:
            return state;
    }
};

export default users;