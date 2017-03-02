
import CounterAction from './../actions/counter'

function decrementCounter(state = 0 , action){
    switch(action.type){
        
        case (CounterAction.DECREMENTS):
        return  state -1
    }
    return state
}
export default decrementCounter;