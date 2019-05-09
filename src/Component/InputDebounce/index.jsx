import React from 'react';
import {debounce} from '../../utils';


export default class InputDebounce extends React.Component{
  constructor(props){
    super(props);
    // initialize debounce function
    this.debounceHandler = debounce(this.props.onType, 1000);
  }
  state = {
    inputHasValue: false // uses for showing clear button
  };
  onInputChange = (event) => {
    // persist event to make it accessible in asynchronous
    event.persist();
    this.debounceHandler(event.target.value);
    if(event.target.value !== ''){
      this.setState({inputHasValue: true});
    }else{
      this.setState({inputHasValue: false});
    }
  };
  clearHandler = () => {
    this.inputRef.value = ''; // clear input
    this.debounceHandler(''); // update debounce with empty string
    this.setState({inputHasValue: false});
  };
  render(){
    const {inputHasValue} = this.state;
    return(
      <div className="input-debounce">
        <input onChange={this.onInputChange} ref={node=>this.inputRef = node}/>
        {inputHasValue && <div className="clear" onClick={this.clearHandler} />}
      </div>);
  }
}
