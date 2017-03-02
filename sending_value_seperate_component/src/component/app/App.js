import React, { Component } from 'react';
import {connect} from 'react-redux'

function mapStateToProps(state){
  return {
    counter : state
  }
}
function mapDispatchToProps(dispatch) {
  return {
    increament :()=>dispatch({type:'INCREMENT'}),
     increaments :()=>dispatch({type:'INCREMENT_WITH_VAL',val:5}),
    decreament : ()=>dispatch({type:'DECREMENT'}),
    decreaments : ()=>dispatch({type:'DECREMENT_WITH_VAL',val:5})

  }
}


class App extends Component {
  render() {
    return (
      <div>
      App State {this.props.counter}
      <div>
        <br/>
        Event in App.js
        <br/><br/>
        <button onClick={this.props.increament}>Increament</button>
         <button onClick={this.props.increaments}>Increament with val</button>
        <button onClick={this.props.decreament}>Decreament</button>  
        <button onClick={this.props.decreaments}>Decreament_with_val</button>     
      </div>
       </div>
    );
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
