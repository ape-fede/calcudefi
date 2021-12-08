import React, {useContext} from 'react';
import {useTheme} from '@mui/material/styles';
import {Button, Box} from '@mui/material';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faLightbulb, faMoon} from '@fortawesome/free-solid-svg-icons';
import {ColorModeContext} from '../App';

const Header = props => {
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);

  return (
    <Box
      style={{
        textAlign: 'center',
        padding: 10,
        display: 'flex',
        justifyContent: 'center',
        backgroundImage: theme.palette.bgHeader,
      }}
      sx={{
        color: 'text.primary',
      }}>
      <h1
        style={{
          margin: 0,
          fontWeight: 800,
          fontSize: '3em',
          fontFamily: 'kanit',
        }}>
        Calcu DeFi
      </h1>
      <p style={{margin: 0, display: 'flex', alignItems: 'flex-end', textShadow: 'none'}}>(Beta)</p>
      <Button
        style={{
          padding: '25px 0px',
          position: 'absolute',
          left: '80vw',
        }}
        onClick={colorMode.toggleColorMode}>
        {theme.palette.mode === 'light' ? (
          <FontAwesomeIcon icon={faMoon} style={{fontSize: '2em'}} />
        ) : (
          <FontAwesomeIcon icon={faLightbulb} style={{fontSize: '2em'}} />
        )}
      </Button>
    </Box>
  );
};

export default Header;
