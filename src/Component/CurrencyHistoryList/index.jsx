import React from 'react';

export default class CurrencyCodeList extends React.Component{
  render(){
    const { dataList} = this.props;
    return(
      <ul className='currency-history-list'>
        {!!Object.keys(dataList).length && Object.keys(dataList).map((key) => {
          return (
            <li key={key}>
              {key}: ${dataList[key]}
            </li>);
        })}
      </ul>
    );
  }
}
