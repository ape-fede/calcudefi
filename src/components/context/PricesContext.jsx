import {createContext, useState, useEffect} from 'react';
import axios from 'axios';

const priceInterface = {
  'pancakeswap-token': {usd: 0},
  'apeswap-finance': {usd: 0},
  'cafeswap-token': {usd: 0},
  bitcoin: {usd: 0},
  ethereum: {usd: 0},
  binancecoin: {usd: 0},
  selectedToken: 'Token',
  selectedPrice: 0,
};

const PricesContext = createContext();

const PricesProvider = ({children}) => {
  const [currentPrices, setCurrentPrices] = useState(priceInterface);
  const data = {currentPrices, setCurrentPrices};

  const getPrices = () => {
    return axios.get(
      'https://api.coingecko.com/api/v3/simple/price?ids=pancakeswap-token%2Capeswap-finance%2Ccafeswap-token%2Cbitcoin%2Cethereum%2Cbinancecoin&vs_currencies=usd'
    );
  };

  useEffect(() => {
    getPrices().then(res => {
      let updated = res.data;
      updated.selectedToken = currentPrices.selectedToken;
      updated.selectedPrice = currentPrices.selectedPrice;
      setCurrentPrices(updated);
    });
    //eslint-disable-next-line
  }, []);

  return <PricesContext.Provider value={data}>{children}</PricesContext.Provider>;
};

export {PricesProvider};
export default PricesContext;
