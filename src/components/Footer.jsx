import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faLinkedin} from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
	return (
		<>
			<div
				container
				style={{
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'flex-end',
					paddingRight: '0.4em',
				}}
			>
				<p>Calcu DeFi by Fede Straus.</p>
				<a href="https://www.linkedin.com/in/federico-straus12345/">
					<FontAwesomeIcon
						icon={faLinkedin}
						style={{fontSize: '1.4em', paddingLeft: '0.4em'}}
					/>
				</a>
			</div>
		</>
	)
}

export default Footer
