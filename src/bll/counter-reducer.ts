type ActionType = IncValueActionType | ResetValueActionType


const initialState = {
    value: 0
}

type InitialStateType = typeof initialState;

export const CounterReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case 'INC-VALUE': {
            return {
                ...state,
                value: state.value + 1
            }
        }
        case 'RESET-VALUE': {
            return {
                ...state,
                value: 0
            }
        }
        default:
            return state
    }
}
export const IncValueActionCreator = (value: number): IncValueActionType => {
    return ({type: 'INC-VALUE', value}) as const
}
export const ResetValueActionCreator = (value: number): ResetValueActionType => {
    return ({type: 'RESET-VALUE', value}) as const
}
type IncValueActionType = {
    type: 'INC-VALUE'
    value: number
}

type ResetValueActionType = {
    type: 'RESET-VALUE'
    value: number
}

