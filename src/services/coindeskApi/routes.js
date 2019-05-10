export const routes = {
  historical: `${process.env.REACT_APP_COINDESK_API_BASE_PATH}/bpi/historical/close.json`,
  currentPriceCode: (code) => `${process.env.REACT_APP_COINDESK_API_BASE_PATH}/bpi/currentprice/${code}.json`,
}
