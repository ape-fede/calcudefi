import React, {useState} from 'react';
import Header from './components/Header';
import {Grid} from '@material-ui/core';
import Main from './components/Main';
import SideBar from './components/SideBar/SideBar';
import {createTheme, ThemeProvider} from '@material-ui/core/styles';
import {Paper} from '@material-ui/core';
import {PricesProvider} from './components/context/PricesContext';
import './position.css';

function App() {
  const [theme, setTheme] = useState('light');

  const darkTheme = createTheme({
    palette: {
      type: theme,
      theme,
      ...(theme === 'light'
        ? {
            background: {
              default: '#9ea7aa',
              paper: '#efefef',
            },
            secondary: {main: 'rgb(228, 228, 228, 0.5)'},
            divider: '#9d9d9d',
          }
        : {
            background: {
              default: '#1b1b1b',
              paper: '#424242',
            },
            secondary: {main: '#6d6d6d'},
          }),
    },
  });
  return (
    <ThemeProvider theme={darkTheme}>
      <PricesProvider>
        <Paper style={{minHeight: '100vh'}} elevation={0}>
          <Header theme={theme} setTheme={setTheme} />
          <Grid container direction='row' justifyContent='center' alignItems='flex-start'>
            <Grid container item xs={11} md={2} xl={1} justifyContent={'center'}>
              <SideBar theme={theme} />
            </Grid>
          </Grid>
          <Grid container direction='row' justifyContent='center' alignItems='flex-start'>
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
