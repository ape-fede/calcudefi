import React, {useContext, useEffect, useState} from 'react';
import {FormControl, Select, MenuItem, Grid} from '@material-ui/core';
import PricesContext from './components/context/PricesContext';
import {makeStyles} from '@material-ui/core/styles';
import {style} from './components/InputsSection/styles';
import '../src/position.css';

const useStyles = makeStyles(style);

const TokenSelector = () => {
  const classes = useStyles();
  const {currentPrices, setCurrentPrices} = useContext(PricesContext);
  const [showAddInput, setShowAddInput] = useState(false);

  const handleChange = event => {
    setCurrentPrices(prevState => {
      return {...prevState, selectedToken: event.target.value};
    });
  };

  useEffect(() => {
    if (currentPrices.selectedToken === 'Bitcoin') {
      setCurrentPrices(prevState => {
        return {...prevState, selectedPrice: currentPrices.bitcoin.usd};
      });
    }
    if (currentPrices.selectedToken === 'Ethereum') {
      setCurrentPrices(prevState => {
        return {...prevState, selectedPrice: currentPrices.ethereum.usd};
      });
    }
    if (currentPrices.selectedToken === 'BNB') {
      setCurrentPrices(prevState => {
        return {...prevState, selectedPrice: currentPrices.binancecoin.usd};
      });
    }
    if (currentPrices.selectedToken === 'Cake') {
      setCurrentPrices(prevState => {
        return {...prevState, selectedPrice: currentPrices['pancakeswap-token'].usd};
      });
    }
    if (currentPrices.selectedToken === 'Banana') {
      setCurrentPrices(prevState => {
        return {...prevState, selectedPrice: currentPrices['apeswap-finance'].usd};
      });
    }
    if (currentPrices.selectedToken === 'Brew') {
      setCurrentPrices(prevState => {
        return {...prevState, selectedPrice: currentPrices['cafeswap-token'].usd};
      });
    }
    //eslint-disable-next-line
  }, [currentPrices.selectedToken]);

  const addInputHandler = () => setShowAddInput(!showAddInput);

  const clean = () => setShowAddInput(false);

  return (
    <Grid container direction={'row'} spacing={3}>
      <Grid item xs={12} md={6} style={{display: 'flex', justifyContent: 'center', padding: 12}}>
        <FormControl className={classes.container}>
          <Select
            value={currentPrices.selectedToken}
            onChange={handleChange}
            autoWidth
            variant={'outlined'}
            style={{width: 230}}>
            <MenuItem value='Token'>
              <em>None</em>
            </MenuItem>
            <MenuItem value={'Bitcoin'} onClick={clean}>
              Bitcoin
            </MenuItem>
            <MenuItem value={'Ethereum'} onClick={clean}>
              Ethereum
            </MenuItem>
            <MenuItem value={'BNB'} onClick={clean}>
              BNB
            </MenuItem>
            <MenuItem value={'Cake'} onClick={clean}>
              Cake
            </MenuItem>
            <MenuItem value={'Banana'} onClick={clean}>
              Banana
            </MenuItem>
            <MenuItem value={'Brew'} onClick={clean}>
              Brew
            </MenuItem>
            <MenuItem value={' '} onClick={addInputHandler}>
              Agregar Token
            </MenuItem>
          </Select>
        </FormControl>
      </Grid>
      {showAddInput ? (
        <Grid item xs={3} style={{display: 'flex', alignItems: 'center'}}>
          Próximamente...
        </Grid>
      ) : null}
    </Grid>
  );
};

export default TokenSelector;
