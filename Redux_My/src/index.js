import React from 'react';
import ReactDOM from 'react-dom';
import App from './component/app/App'

import {createStore} from 'redux'
import {Provider} from 'react-redux'


function counter(value=0,action){
  switch(action.type){
    case "INCREMENT":
    return value+1
    case "DECREMENT":
    return value-1
    default :
    return value
  }
}

let store = createStore(counter)

store.subscribe(()=>{
  console.log("State Updated "+store.getState() )
})

// store.dispatch({
//   type : "INC"
// })
// store.dispatch({
//   type : "INC"
// })


// store.dispatch({
//   type : "DEC"
// })

// function handleIncrement(){
//   store.dispatch({
//     type : "INCREMENT"
//   })
// }


ReactDOM.render(
    <Provider store={store}>
  <div>
    <App/>
    <div>
      <br/>
     
      
    </div>
  </div>
  </Provider>
  ,document.getElementById('root')
  
);
