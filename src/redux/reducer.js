let initialState = { user: null }

let reducer = (state = initialState, action) => {
    switch (action.type) {
        case "add_user":
            return {...state, user: action.payload };
        case "logout":
            return {...state, user: action.payload };
        case "updateHealth":
            return {...state, user: {...state.user, bmi: action.payload.bmi, health: action.payload.health } }
        case "workout_added":
            return {...state, user: action.payload };
        default:
            return state;
    }
}


export default reducer;