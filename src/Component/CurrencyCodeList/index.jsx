import React from 'react';

export default class CurrencyCodeList extends React.Component{
  render(){
    const { dataList, onSelect } = this.props;
    return(
      <ul className='currency-code-list'>
        {!!Object.keys(dataList).length && Object.keys(dataList).map((key) => {
          return (
            <li key={key} onClick={() => onSelect(dataList[key].currency)}>
              {dataList[key].currency}
            </li>);
        })}
      </ul>
    );
  }
}
