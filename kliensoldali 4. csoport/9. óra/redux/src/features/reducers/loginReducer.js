const loginReducer = (state = false, action) => {
    switch(action.type){
        case "AUTH":
            return !state
        default:
            return state
    }

}

export default loginReducer;