import {Grid, Box} from '@material-ui/core'
import React, {useState, useEffect} from 'react'
import axios from 'axios'
import cake from '../components/media/CAKE.png'
import banana from '../components/media/BANANA.svg'
import brew from '../components/media/BREW.svg'
import btc from '../components/media/bitcoin.webp'
import eth from '../components/media/ethereum.webp'
import bnb from '../components/media/bnb.webp'

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
	'bitcoin': {usd: 0},
	'ethereum': {usd: 0},
	'binancecoin': {usd: 0},
}

const TokenInfoWidget = () => {
	const [currentPrices, setCurrentPrices] = useState(priceInterface)
	const [pos, setPos] = useState(10)

	const getPrices = () => {
		return axios.get(
			'https://api.coingecko.com/api/v3/simple/price?ids=pancakeswap-token%2Capeswap-finance%2Ccafeswap-token%2Cbitcoin%2Cethereum%2Cbinancecoin&vs_currencies=usd',
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
			setPos((width / 2 - 275) / 2 - 75)
		} else {
			setPos(width - 160)
		}
	}

	window.addEventListener('resize', handleWindowChange)

	useEffect(() => {
		handleWindowChange()
	}, [])

	return (
		<Grid
			container
			style={{
				position: 'absolute',
				left: pos,
				width: '150px',
				top: 125,
			}}
		>
			<Box
				style={{
					display: 'flex',
					flexDirection: 'column',
					padding: 10,
					marginTop: '1em',
					borderRadius: '10px',
					boxShadow: '10px 10px 10px grey',
					width: '100%',
				}}
			>
				<Grid item>
					<p style={{marginTop: 5}}>Market Status</p>
				</Grid>
				<Grid item>
					<div style={styles}>
						<img src={btc} alt="" style={{width: '1.5em'}} />
						{` $ ${currentPrices['bitcoin'].usd.toLocaleString(
							'es-ES',
							{
								minimumFractionDigits: 2,
							},
						)}`}
					</div>
					<div style={styles}>
						<img src={eth} alt="" style={{width: '1.5em'}} />
						{` $ ${currentPrices['ethereum'].usd.toLocaleString(
							'es-ES',
							{
								minimumFractionDigits: 2,
							},
						)}`}
					</div>
					<div style={styles}>
						<img src={bnb} alt="" style={{width: '1.5em'}} />
						{` $ ${currentPrices['binancecoin'].usd.toLocaleString(
							'es-ES',
							{
								minimumFractionDigits: 2,
							},
						)}`}
					</div>
					<div style={styles}>
						<img src={cake} alt="" style={{width: '1.5em'}} />
						{` $ ${currentPrices[
							'pancakeswap-token'
						].usd.toLocaleString('es-ES', {
							minimumFractionDigits: 2,
						})}`}
					</div>
					<div style={styles}>
						<img src={banana} alt="" style={{width: '1.5em'}} />
						{` $ ${currentPrices[
							'apeswap-finance'
						].usd.toLocaleString('es-ES', {
							minimumFractionDigits: 2,
						})}`}
					</div>
					<div style={styles}>
						<img src={brew} alt="" style={{width: '1.5em'}} />
						{` $ ${currentPrices[
							'cafeswap-token'
						].usd.toLocaleString('es-ES', {
							minimumFractionDigits: 2,
							maximumFractionDigits: 2,
						})}`}
					</div>
				</Grid>
			</Box>
		</Grid>
	)
}

export default TokenInfoWidget
