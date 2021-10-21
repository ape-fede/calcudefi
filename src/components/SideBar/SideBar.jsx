import {Grid, Box, Divider} from '@material-ui/core';
import React, {useContext} from 'react';
import cake from '../media/CAKE.png';
import banana from '../media/BANANA.svg';
import brew from '../media/BREW.svg';
import btc from '../media/bitcoin.webp';
import eth from '../media/ethereum.webp';
import bnb from '../media/bnb.webp';
import PricesContext from '../context/PricesContext';
import LoadingButton from '@mui/lab/LoadingButton';
import './styles.css';
import CachedIcon from '@mui/icons-material/Cached';

const SideBar = props => {
  const {theme} = props;
  const {currentPrices, refreshPrices, loading} = useContext(PricesContext);

  return (
    <Grid style={{maxWidth: 700}}>
      <Box
        container
        className={'mainContainer'}
        sx={
          theme === 'light'
            ? window.innerWidth > 960
              ? {
                  background:
                    'linear-gradient(151deg, hsl(240deg 7% 62%) 0%, rgb(255 255 255 / 4%) 100%)',
                }
              : {background: '#fff'}
            : window.innerWidth > 960
            ? {
                background: 'linear-gradient(151deg, #1b1b1b, #424242);',
              }
            : {
                background: '#424242',
              }
        }>
        <Grid container justifyContent='center' style={{width: '100%'}}>
          <Box className={'iconContainer'}>
            <LoadingButton
              onClick={() => refreshPrices()}
              loading={loading}
              startIcon={<CachedIcon sx={{color: '#000'}} />}
              style={
                loading
                  ? {visibility: 'hidden', width: 15, minWidth: 15, padding: 0, paddingTop: 5}
                  : {width: 15, minWidth: 15, padding: 0, paddingTop: 5}
              }
            />
          </Box>
          <h2>Market Status</h2>
        </Grid>
        <Divider />
        <Grid item>
          <Grid container alignItems='center'>
            <Grid item xs={6} sm={3} md={12} style={{display: 'flex', justifyContent: 'center'}}>
              <div className={'tokensContainer'}>
                <img src={btc} alt='' />

                {` $ ${currentPrices['bitcoin'].usd.toLocaleString('es-ES', {
                  minimumFractionDigits: 2,
                })}`}
              </div>
            </Grid>
            <Grid item xs={6} sm={3} md={12} style={{display: 'flex', justifyContent: 'center'}}>
              <div className={'tokensContainer'}>
                <img src={eth} alt='' />
                {` $ ${currentPrices['ethereum'].usd.toLocaleString('es-ES', {
                  minimumFractionDigits: 2,
                })}`}
              </div>
            </Grid>
            <Grid item xs={6} sm={3} md={12} style={{display: 'flex', justifyContent: 'center'}}>
              <div className={'tokensContainer'}>
                <img src={bnb} alt='' />
                {` $ ${currentPrices['binancecoin'].usd.toLocaleString('es-ES', {
                  minimumFractionDigits: 2,
                })}`}
              </div>
            </Grid>
            <Grid item xs={6} sm={3} md={12} style={{display: 'flex', justifyContent: 'center'}}>
              <div className={'tokensContainer'}>
                <img src={cake} alt='' />
                {` $ ${currentPrices['pancakeswap-token'].usd.toLocaleString('es-ES', {
                  minimumFractionDigits: 2,
                })}`}
              </div>
            </Grid>
            <Grid item xs={6} sm={3} md={12} style={{display: 'flex', justifyContent: 'center'}}>
              <div className={'tokensContainer'}>
                <img src={banana} alt='' />
                {` $ ${currentPrices['apeswap-finance'].usd.toLocaleString('es-ES', {
                  minimumFractionDigits: 2,
                })}`}
              </div>
            </Grid>
            <Grid item xs={6} sm={3} md={12} style={{display: 'flex', justifyContent: 'center'}}>
              <div className={'tokensContainer'}>
                <img src={brew} alt='' />
                {` $ ${currentPrices['cafeswap-token'].usd.toLocaleString('es-ES', {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}`}
              </div>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Grid>
  );
};

export default SideBar;
