const initState = {
    themeId: 1,
}

type InitStateType = {
    themeId: number
}

type ChangeThemeIdActionType = {
    type: 'SET_THEME_ID'
    id: number
}

type ActionTypes = ChangeThemeIdActionType

export const themeReducer = (state: InitStateType = initState, action: ActionTypes): InitStateType => { // fix any
    switch (action.type) {
        case "SET_THEME_ID":
            return {...state, themeId: action.id}
        default:
            return state
    }
}

export const changeThemeId = (id: number): ChangeThemeIdActionType => ({ type: 'SET_THEME_ID', id }) // fix any
