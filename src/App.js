import React from 'react';
import axios from 'axios';
import CurrencyPrice from './Component/CurrencyPrice';
import './theme/style.scss';

axios.defaults.headers.post['Content-Type'] ='application/x-www-form-urlencoded';

function App() {
  return (<CurrencyPrice />);
}

export default App;
