import React from 'react';
import InputDebounce from '../InputDebounce';
import '../InputDebounce/style.scss';

export default class CurrencyPrice extends React.Component{
  onType = (text) => {
    console.log('the text is' ,text)
  }
  render(){
    return(
      <React.Fragment>
        <InputDebounce onType={this.onType} />
        <ul>
          <li>currency 1</li>
          <li>currency 2</li>
          <li>currency 2</li>
        </ul>
      </React.Fragment>
    );
  }
}
