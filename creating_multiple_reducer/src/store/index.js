import { createStore, combineReducers } from 'redux';


import decrementCounter from './reducer/decrementcounter'
import increamentCounter from './reducer/increamentcounter'


export const rootReducer = combineReducers({
    decrementCounter,
    increamentCounter

})


let store = createStore(rootReducer)


store.subscribe(() => console.log(store.getState()));

export default store;