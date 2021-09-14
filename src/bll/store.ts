import {CounterReducer} from './counter-reducer';
import {combineReducers, createStore} from 'redux';

const rootReducer = combineReducers({
    counter: CounterReducer
})

export const store = createStore(rootReducer)

export type AppRootState = ReturnType<typeof rootReducer>
