import {Grid, Box, Divider, useTheme} from '@mui/material';
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
import {ColorModeContext} from '../../App';

const SideBar = props => {
  const {currentPrices, refreshPrices, loading} = useContext(PricesContext);
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);

  return (
    <Grid style={{maxWidth: 700}}>
      <Box
        container
        className={'mainContainer'}
        style={{
          backgroundImage: theme.palette.bgSidebar,
        }}
        sx={{color: 'text.primary'}}>
        <Grid container justifyContent='center' style={{width: '100%'}}>
          <Box className={'iconContainer'}>
            <LoadingButton
              onClick={() => refreshPrices()}
              loading={loading}
              startIcon={<CachedIcon sx={{color: 'text.primary'}} />}
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
