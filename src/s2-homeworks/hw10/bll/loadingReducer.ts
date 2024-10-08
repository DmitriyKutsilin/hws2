const initState: IsLoadingStateType = {
    isLoading: false,
}


export const loadingReducer = (state = initState, action: ActionTypes): IsLoadingStateType => { // fix any
    switch (action.type) {
        // пишет студент  // need to fix
        case "CHANGE_LOADING":
            return {...state, isLoading: action.isLoading}
        default:
            return state
    }
}

export const loadingAC = (isLoading: boolean): LoadingActionType => ({
    type: 'CHANGE_LOADING',
    isLoading,
})
export type IsLoadingStateType = {
    isLoading: boolean
}
type LoadingActionType = {
    type: 'CHANGE_LOADING'
    isLoading: boolean
}
type ActionTypes = LoadingActionType
