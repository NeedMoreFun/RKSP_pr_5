const initialState: Record<string, boolean> = {}

export const checkboxReducer = (
    state = initialState,
    action: {type: string, payload?:string}
    ) => {
    if ( action.type === 'checkbox/click' && action.payload) {
        return {...state, [action.payload]: !state[action.payload]}
    }
    return state
}