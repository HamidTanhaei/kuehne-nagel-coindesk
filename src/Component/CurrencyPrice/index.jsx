import React from 'react';


// data
import {currentPriceCodeApi, historicalApi} from '../../services/coindeskApi';
import supportedCurrencies from './supportedCurrencies';

// components
import InputDebounce from '../InputDebounce';
import CurrencyCodeList from '../CurrencyCodeList';
import CurrencyHistoryList from '../CurrencyHistoryList';

import LoadingSpinner from '../LoadingSpinner';
// assets
import '../InputDebounce/style.scss';
import '../CurrencyCodeList/style.scss';
import '../CurrencyHistoryList/style.scss';

import './style.scss';

export default class CurrencyPrice extends React.Component {
  state = {
    foundCurrencies: {},
    selectedCurrencyRate: '',
    rateHistory:{},
    rateLoading: false,
    rateHistoryLoading: false
  };
  currencyCodeFinder = (code) => {
    const upperCaseText = code.toUpperCase();
    // filter to find match codes
    return Object.keys(supportedCurrencies)
      .filter(item => {
        return (upperCaseText !== '' && supportedCurrencies[item].currency.indexOf(upperCaseText) === 0);
      }).map(item => supportedCurrencies[item]);
  };

  onType = async (text) => {
    const currencyCodeNames = this.currencyCodeFinder(text);
    this.setState({foundCurrencies: currencyCodeNames, selectedCurrencyRate: ''});
  };

  onCurrencySelect = async (code) => {
    this.setState({rateLoading: true, rateHistoryLoading: true});
    try{
      const data = await currentPriceCodeApi(code);
      this.setState({selectedCurrencyRate: data.data.bpi[code], rateLoading: false});
    } catch (e) {
      this.setState({rateLoading: false});
    }
    try{
      const historicalData = await historicalApi(code);
      this.setState({rateHistory: historicalData.data.bpi, rateHistoryLoading: false});
    } catch(e) {
      this.setState({rateHistoryLoading: false});
    }
  };

  render() {
    const {
      foundCurrencies,
      selectedCurrencyRate,
      rateHistory,
      rateLoading,
      rateHistoryLoading
    } = this.state;
    return (
      <div className='currency-price'>
        <div>
          <span className='title'>CoinDesk Bitcoin Price</span>
        </div>
        <div className="description">
          Enter your currency code (USD, EUR, ...)
        </div>
        <InputDebounce onType={this.onType}/>
        <CurrencyCodeList dataList={foundCurrencies} onSelect={this.onCurrencySelect}/>
        {rateLoading ? <LoadingSpinner /> : (
          <div className="rate">
            {selectedCurrencyRate && `${selectedCurrencyRate.code}/${selectedCurrencyRate.description}: ${selectedCurrencyRate.rate}`}
          </div>
        )}
        {rateHistoryLoading ? <LoadingSpinner /> : <CurrencyHistoryList dataList={rateHistory} />}
      </div>
    );
  }
}
