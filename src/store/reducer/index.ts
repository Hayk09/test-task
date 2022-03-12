import { todoReducer } from "./todoReducer";
import { combineReducers } from 'redux'

export const rootReducer = combineReducers({
    todo: todoReducer
})