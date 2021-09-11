import React from 'react'

const Header = () => {
	return (
		<div
			style={{
				textAlign: 'center',
				background: '#CDD8E0',
				padding: 20,
				display: 'flex',
				justifyContent: 'center',
			}}
		>
			<h1 style={{margin: 0, fontWeight: 700, fontSize: 50}}>
				Calcu DeFi
			</h1>
			<p style={{margin: 0, display: 'flex', alignItems: 'flex-end'}}>
				(Beta)
			</p>
		</div>
	)
}

export default Header
