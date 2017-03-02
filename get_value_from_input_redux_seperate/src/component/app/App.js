import React, { Component } from 'react';
import {connect} from 'react-redux'

function mapStateToProps(state){
  return {
    counter : state
  }
}
function mapDispatchToProps(dispatch) {
  return {
    increment :()=>dispatch({type:'INCREMENT'}),
    decrement : ()=>dispatch({type:'DECREMENT'}),
    increamentwithValue  :function (value){
      console.log("Increament with value");
      return dispatch({type : 'INCREAMENT_WITH_VALUES',val:value})
    }
  }
}


class App extends Component {
  constructor(){
    super();
    this.state={counterval:0}
  }

  valueChange(event){
    this.setState({
      counterval : parseInt(event.target.value)
      
    })
    
  }

  handleClick(){
    // console.log(this.state.counterval)
    this.props.increamentwithValue(this.state.counterval)
  }

  render() {
    return (
      <div>
      App State {this.props.counter}
      <div>
        <br/>
        Event in App.js
        <br/><br/>
        <input type="number" onChange={this.valueChange.bind(this)}/><br/><br/>
        <button onClick={this.handleClick.bind(this)}>Increament using input</button><br/>
          <button onClick={this.props.increment}>Increment</button><br/>
          <button onClick={this.props.decrement}>Decrement value with 4</button><br/>
         
      </div>
       </div>
    );
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
