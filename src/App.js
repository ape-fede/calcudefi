import React, {useState} from 'react';
import Header from './components/Header';
import {Grid} from '@material-ui/core';
import Main from './components/Main';
import TokenInfoWidget from './components/TokenInfoWidget';
import {createTheme, ThemeProvider} from '@material-ui/core/styles';
import {Paper} from '@material-ui/core';
import {PricesProvider} from './components/context/PricesContext';
import './position.css';

function App() {
  const [theme, setTheme] = useState('light');

  const darkTheme = createTheme({
    palette: {
      type: theme,
    },
  });
  return (
    <ThemeProvider theme={darkTheme}>
      <PricesProvider>
        <Paper style={{minHeight: '100vh'}}>
          <Header theme={theme} setTheme={setTheme} />
          <Grid container direction='row' justifyContent='center' alignItems='flex-start'>
            <Grid container item xs={11} md={2} xl={1} justifyContent={'center'}>
              <TokenInfoWidget />
            </Grid>
            <Grid container item xs={11} md={7} justifyContent={'center'}>
              <Main theme={theme} />
            </Grid>
          </Grid>
        </Paper>
      </PricesProvider>
    </ThemeProvider>
  );
}

export default App;
