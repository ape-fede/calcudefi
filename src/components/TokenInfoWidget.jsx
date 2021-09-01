import {Grid, Box} from '@material-ui/core'
import React, {useState, useEffect} from 'react'
import axios from 'axios'
import cake from '../components/media/CAKE.png'
import banana from '../components/media/BANANA.svg'
import brew from '../components/media/BREW.svg'

const styles = {
	display: 'flex',
	justifyContent: 'space-between',
	alignItems: 'center',
	paddingBottom: '0.5em',
}

const priceInterface = {
	'pancakeswap-token': {usd: 0},
	'apeswap-finance': {usd: 0},
	'cafeswap-token': {usd: 0},
}

const TokenInfoWidget = () => {
	const [currentPrices, setCurrentPrices] = useState(priceInterface)
	const [pos, setPos] = useState(10)

	const getPrices = () => {
		return axios.get(
			'https://api.coingecko.com/api/v3/simple/price?ids=pancakeswap-token%2Capeswap-finance%2Ccafeswap-token&vs_currencies=usd',
		)
	}

	useEffect(() => {
		getPrices().then(res => {
			console.log(res.data)
			setCurrentPrices(res.data)
		})
	}, [])

	const handleWindowChange = () => {
		let width = window.visualViewport.width
		if (width > 1280) {
			setPos((width / 2 - 275) / 2 - 60)
		} else {
			setPos(width - 160)
		}
	}

	window.addEventListener('resize', handleWindowChange)

	useEffect(() => {
		handleWindowChange()
	}, [])

	const round = number => {
		let result = number
		result = Math.round(result * 100)
		result = result / 100
		return result
	}

	return (
		<Grid
			container
			style={{
				position: 'absolute',
				left: pos,
				width: 160,
				top: 100,
			}}
		>
			<Box
				style={{
					display: 'flex',
					flexDirection: 'column',
					padding: 10,
					border: '1px solid',
					marginTop: '1em',
					borderRadius: '20px',
					boxShadow: '10px 5px 10px grey',
				}}
			>
				<Grid item>
					<p style={{marginTop: 5, borderBottom: '1px solid'}}>
						Market Status
					</p>
				</Grid>
				<Grid item>
					<div style={styles}>
						<img src={cake} alt="" style={{width: '1.5em'}} />
						{` $ ${currentPrices['pancakeswap-token'].usd}`}
					</div>
					<div style={styles}>
						<img src={banana} alt="" style={{width: '1.5em'}} />
						{` $ ${currentPrices['apeswap-finance'].usd}`}
					</div>
					<div style={styles}>
						<img src={brew} alt="" style={{width: '1.5em'}} />
						{` $ ${round(currentPrices['cafeswap-token'].usd)}`}
					</div>
				</Grid>
			</Box>
		</Grid>
	)
}

export default TokenInfoWidget
