export const routes = {
  currentPrice: `${process.env.REACT_APP_COINDESK_API_BASE_PATH}/bpi/currentprice.json`,
  currentPriceCode: (code) => `${process.env.REACT_APP_COINDESK_API_BASE_PATH}/bpi/currentprice/${code}.json`,
}
