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
    decreament : ()=>dispatch({type:'DECREMENT'})

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
        <button onClick={this.props.decreament}>Decreament</button>      
      </div>
       </div>
    );
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
