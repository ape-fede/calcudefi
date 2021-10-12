import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faLinkedin} from '@fortawesome/free-brands-svg-icons';

const Footer = props => {
  const {theme} = props;

  return (
    <>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-end',
          paddingRight: '1em',
        }}>
        <p style={{margin: 0}}>Calcu DeFi by Federico Straus.</p>
        <a
          href='https://www.linkedin.com/in/federico-straus12345/'
          target='_blank'
          rel='noreferrer'>
          <FontAwesomeIcon
            icon={faLinkedin}
            style={{
              fontSize: '1.4em',
              paddingLeft: '0.4em',
              color: theme === 'light' ? '#0077b5' : '#fff',
            }}
          />
        </a>
      </div>
    </>
  );
};

export default Footer;
