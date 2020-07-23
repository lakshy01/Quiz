export default (state = [], action) => {
    switch (action.type) {
        case 'SELECTED_ANSWER': return [...state, action.payload];
        default: return state
    }
}