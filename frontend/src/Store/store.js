import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { Reducer } from "./store.reducer";




const  RootReducer=combineReducers({
     users:Reducer
})

export const store=legacy_createStore(RootReducer,applyMiddleware(thunk))