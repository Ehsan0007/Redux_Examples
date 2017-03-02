
import CounterAction from './../actions/counter'

function counter(value = 0, action) {
  switch (action.type) {

  case CounterAction.INCREAMENTS:
    return value + 1
  
  case CounterAction.DECREMENTS:
  return value-1

  // case 'DECREMENT':
  //   return value - 1

  //   case 'INCREMENT_WITH_VAL':
  //   return value+action.val

  //   case 'DECREMENT_WITH_VAL':
  //   return value-action.val

  //   case 'INCREAMENT_WITH_VALUES':
  //   return value+action.val
  default:
    return value
  }  
}

export default counter;