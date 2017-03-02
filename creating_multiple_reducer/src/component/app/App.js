import React, { Component } from 'react';
import {connect} from 'react-redux'
import CounterAction from './../../store/actions/counter'

function mapStateToProps(state){
  return {
    inccounter : state.increamentCounter,
    deccounter : state.decrementCounter

  }
}
function mapDispatchToProps(dispatch) {
  return {
    increment :()=>dispatch(CounterAction.increament()),
    decrement : ()=>dispatch(CounterAction.decrement())
  }
}


class App extends Component {
  constructor(){
    super();
    this.state={counterval:0}
  }

  // valueChange(event){
  //   this.setState({
  //     counterval : parseInt(event.target.value)
      
  //   })
    
  // }

  // handleClick(){
  //   // console.log(this.state.counterval)
  //   this.props.increamentwithValue(this.state.counterval)
  // }

  render() {
    return (
      <div>
      App State {this.props.inccounter + this.props.deccounter}
      <div>
        <br/>

        Event in App.js
        <br/><br/>
       
          <button onClick={this.props.increment}>Increment</button><br/>
          <button onClick={this.props.decrement}>Decrement</button><br/>
         
         
      </div>
       </div>
    );
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
