import {Grid} from '@material-ui/core';
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import cake from '../components/media/CAKE.png';
import banana from '../components/media/BANANA.svg';
import brew from '../components/media/BREW.svg';
import btc from '../components/media/bitcoin.webp';
import eth from '../components/media/ethereum.webp';
import bnb from '../components/media/bnb.webp';

const styles = {
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
  paddingBottom: '0.5em',
  width: '120px',
};

const priceInterface = {
  'pancakeswap-token': {usd: 0},
  'apeswap-finance': {usd: 0},
  'cafeswap-token': {usd: 0},
  bitcoin: {usd: 0},
  ethereum: {usd: 0},
  binancecoin: {usd: 0},
};

const TokenInfoWidget = () => {
  const [currentPrices, setCurrentPrices] = useState(priceInterface);

  const getPrices = () => {
    return axios.get(
      'https://api.coingecko.com/api/v3/simple/price?ids=pancakeswap-token%2Capeswap-finance%2Ccafeswap-token%2Cbitcoin%2Cethereum%2Cbinancecoin&vs_currencies=usd'
    );
  };

  useEffect(() => {
    getPrices().then(res => {
      setCurrentPrices(res.data);
    });
  }, []);

  return (
    <Grid style={{maxWidth: 700}}>
      <Grid
        container
        style={{
          display: 'inline-flex',
          flexDirection: 'column',
          padding: 10,
          margin: '1em 1em 0em 1em',
          borderRadius: '10px',
          boxShadow: '0px 0px 10px 5px grey',
          alignItems: 'center',
          width: '-webkit-fill-available',
          minWidth: 180,
        }}>
        <Grid item>
          <p style={{marginTop: 5}}>Market Status</p>
        </Grid>
        <Grid item>
          <Grid container alignItems='center'>
            <Grid item xs={6} sm={3} md={12} style={{display: 'flex', justifyContent: 'center'}}>
              <div style={styles}>
                <img src={btc} alt='' style={{width: '1.5em', paddingRight: 3}} />

                {` $ ${currentPrices['bitcoin'].usd.toLocaleString('es-ES', {
                  minimumFractionDigits: 2,
                })}`}
              </div>
            </Grid>
            <Grid item xs={6} sm={3} md={12} style={{display: 'flex', justifyContent: 'center'}}>
              <div style={styles}>
                <img src={eth} alt='' style={{width: '1.5em', paddingRight: 3}} />
                {` $ ${currentPrices['ethereum'].usd.toLocaleString('es-ES', {
                  minimumFractionDigits: 2,
                })}`}
              </div>
            </Grid>
            <Grid item xs={6} sm={3} md={12} style={{display: 'flex', justifyContent: 'center'}}>
              <div style={styles}>
                <img src={bnb} alt='' style={{width: '1.5em', paddingRight: 3}} />
                {` $ ${currentPrices['binancecoin'].usd.toLocaleString('es-ES', {
                  minimumFractionDigits: 2,
                })}`}
              </div>
            </Grid>
            <Grid item xs={6} sm={3} md={12} style={{display: 'flex', justifyContent: 'center'}}>
              <div style={styles}>
                <img src={cake} alt='' style={{width: '1.5em', paddingRight: 3}} />
                {` $ ${currentPrices['pancakeswap-token'].usd.toLocaleString('es-ES', {
                  minimumFractionDigits: 2,
                })}`}
              </div>
            </Grid>
            <Grid item xs={6} sm={3} md={12} style={{display: 'flex', justifyContent: 'center'}}>
              <div style={styles}>
                <img src={banana} alt='' style={{width: '1.5em', paddingRight: 3}} />
                {` $ ${currentPrices['apeswap-finance'].usd.toLocaleString('es-ES', {
                  minimumFractionDigits: 2,
                })}`}
              </div>
            </Grid>
            <Grid item xs={6} sm={3} md={12} style={{display: 'flex', justifyContent: 'center'}}>
              <div style={styles}>
                <img src={brew} alt='' style={{width: '1.5em', paddingRight: 3}} />
                {` $ ${currentPrices['cafeswap-token'].usd.toLocaleString('es-ES', {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}`}
              </div>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default TokenInfoWidget;
