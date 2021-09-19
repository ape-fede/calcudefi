import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faLinkedin} from '@fortawesome/free-brands-svg-icons'

const Footer = props => {
	const {theme} = props

	return (
		<>
			<div
				container
				style={{
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'flex-end',
					paddingRight: '0.4em',
					paddingTop: 12,
				}}
			>
				<p>Calcu DeFi by Fede Straus.</p>
				<a href="https://www.linkedin.com/in/federico-straus12345/">
					<FontAwesomeIcon
						icon={faLinkedin}
						style={{
							fontSize: '1.4em',
							paddingLeft: '0.4em',
							color: theme === 'light' ? null : '#fff',
						}}
					/>
				</a>
			</div>
		</>
	)
}

export default Footer
