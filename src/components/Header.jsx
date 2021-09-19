import React from 'react'
import {Button, Box} from '@material-ui/core'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faLightbulb, faMoon} from '@fortawesome/free-solid-svg-icons'

const Header = props => {
	const {theme, setTheme} = props

	const changeTheme = () => {
		if (theme === 'light') {
			setTheme('dark')
		} else {
			setTheme('light')
		}
	}

	return (
		<Box
			style={{
				textAlign: 'center',
				padding: 20,
				display: 'flex',
				justifyContent: 'center',
				background: theme === 'light' ? '#CDD8E0' : '#303030',
			}}
		>
			<h1 style={{margin: 0, fontWeight: 700, fontSize: 50}}>
				Calcu DeFi
			</h1>
			<p style={{margin: 0, display: 'flex', alignItems: 'flex-end'}}>
				(Beta)
			</p>
			<Button
				style={{
					padding: '25px 0px',
					position: 'absolute',
					left: '80vw',
				}}
				onClick={changeTheme}
			>
				{theme === 'light' ? (
					<FontAwesomeIcon icon={faMoon} style={{fontSize: '2em'}} />
				) : (
					<FontAwesomeIcon
						icon={faLightbulb}
						style={{fontSize: '2em'}}
					/>
				)}
			</Button>
		</Box>
	)
}

export default Header
