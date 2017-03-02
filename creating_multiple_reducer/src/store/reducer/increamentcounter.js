import CounterAction from '../actions/counter'

function increamentCounter(state = 0, action) {
    switch (action.type) {
        case (CounterAction.INCREAMENTS):
            return state + 1
    }
    return state

}
export default increamentCounter;