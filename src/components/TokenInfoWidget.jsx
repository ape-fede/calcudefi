import {Grid, Box} from '@material-ui/core'
import React, {useState} from 'react'
import axios from 'axios'

// 888

const TokenInfoWidget = () => {
	const [currentPrice, setCurrentPrice] = useState('cargando')
	const [image, setImage] = useState(null)
	const [pos, setPos] = useState(window.visualViewport.width - 160)

	axios
		.get('https://api.coingecko.com/api/v3/coins/pancakeswap-token')
		.then(res => {
			setCurrentPrice(res.data.market_data.current_price.usd)
			setImage(res.data.image.small)
		})

	const handleWindowChange = () => {
		let width = window.visualViewport.width
		if (width > 1280) {
			setPos(width * 0.75)
		} else {
			setPos(width - 160)
		}
	}

	window.addEventListener('resize', handleWindowChange)

	return (
		<Grid
			container
			style={{
				position: 'absolute',
				left: pos,
				width: 160,
			}}
		>
			<Box
				style={{
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					padding: 10,
					border: '1px solid',
					marginTop: '1em',
					borderRadius: '20px',
					boxShadow: '10px 5px 10px grey',
				}}
			>
				<Grid item>
					<p style={{marginTop: 5}}>DeFi current Price</p>
				</Grid>
				<Grid
					item
					style={{
						display: 'flex',
						alignItems: 'center',
					}}
				>
					{image ? (
						<>
							<img src={image} alt="" style={{width: '1.5em'}} />$
							{currentPrice}
						</>
					) : null}
				</Grid>
			</Box>
		</Grid>
	)
}

export default TokenInfoWidget
