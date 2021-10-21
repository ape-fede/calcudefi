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
  const [loading, setLoading] = useState(false);

  const getPrices = () => {
    return axios.get(
      'https://api.coingecko.com/api/v3/simple/price?ids=pancakeswap-token%2Capeswap-finance%2Ccafeswap-token%2Cbitcoin%2Cethereum%2Cbinancecoin&vs_currencies=usd'
    );
  };

  const refreshPrices = () => {
    setLoading(true);
    setTimeout(() => {
      updatePrices();
    }, 500);
  };

  const updatePrices = () => {
    setLoading(true);
    getPrices().then(res => {
      let updated = res.data;
      updated.selectedToken = currentPrices.selectedToken;
      updated.selectedPrice = currentPrices.selectedPrice;
      setCurrentPrices(updated);
      setLoading(false);
    });
  };

  useEffect(() => {
    updatePrices();
    //eslint-disable-next-line
  }, []);

  const data = {currentPrices, setCurrentPrices, refreshPrices, loading};

  return <PricesContext.Provider value={data}>{children}</PricesContext.Provider>;
};

export {PricesProvider};
export default PricesContext;
