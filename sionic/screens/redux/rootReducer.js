import { combineReducers } from "redux";
import { catsReducer } from "./catsReducer";
import { prodsReducer } from "./prodsReducer";

export const rootReducer = combineReducers({
    cats: catsReducer,
    prods: prodsReducer,
})