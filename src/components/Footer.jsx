import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faLinkedin} from '@fortawesome/free-brands-svg-icons';

const Footer = props => {
  return (
    <>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-end',
          paddingRight: '1em',
        }}>
        <p style={{margin: 0}}>Calcu DeFi by Fede.</p>
        <a
          href='https://www.linkedin.com/in/fede-s/'
          target='_blank'
          rel='noreferrer'>
          <FontAwesomeIcon
            icon={faLinkedin}
            style={{
              fontSize: '1.4em',
              paddingLeft: '0.4em',
              color: '#0077b5',
            }}
          />
        </a>
      </div>
    </>
  );
};

export default Footer;
