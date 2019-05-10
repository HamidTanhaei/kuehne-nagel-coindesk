import React from 'react';
import supportedCurrencies from './supportedCurrencies.json';
import InputDebounce from '../InputDebounce';
import '../InputDebounce/style.scss';
import './style.scss';

export default class CurrencyPrice extends React.Component {
  state = {
    foundCurrencies: {}
  }
  currencyCodeFinder = (code) => {
    const upperCaseText = code.toUpperCase();
    //filter to find complete code names
    const currencyCodes = Object.keys(supportedCurrencies)
      .filter(item => {
        return (upperCaseText !== '' && supportedCurrencies[item].currency.indexOf(upperCaseText) === 0);
      }).map(item => supportedCurrencies[item]);
    return currencyCodes;
  }

  onType = async (text) => {
    const currencyCodeNames = this.currencyCodeFinder(text);
    this.setState({foundCurrencies: currencyCodeNames});
  };

  onCurrencySelect = (code) => {
    console.log(code);
  }

  render() {
    const {foundCurrencies} = this.state;
    return (
      <div className='currency-price'>
        <div className='title'>Type to find</div>
        <InputDebounce onType={this.onType}/>
        <ul className='currency-list'>
          {!!Object.keys(foundCurrencies).length && Object.keys(foundCurrencies).map((key) => {
            return (
              <li key={key} onClick={() => this.onCurrencySelect(foundCurrencies[key].currency)}>
                {foundCurrencies[key].currency}
              </li>);
          })}
        </ul>
      </div>
    );
  }
}
