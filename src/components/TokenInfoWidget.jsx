import {Grid, Box} from '@material-ui/core'
import React, {useState} from 'react'
import axios from 'axios'

const TokenInfoWidget = () => {
	const [currentPrice, setCurrentPrice] = useState('cargando')
	const [image, setImage] = useState(null)

	axios
		.get('https://api.coingecko.com/api/v3/coins/pancakeswap-token')
		.then(res => {
			console.log(res)
			setCurrentPrice(res.data.market_data.current_price.usd)
			setImage(res.data.image.small)
		})

	return (
		<Grid container>
			<Box
				style={{
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					border: 'solid 1px',
					borderRadius: 20,
					padding: 10,
				}}
			>
				<Grid item>
					<p>DeFi current Price</p>
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
							<img src={image} alt="" style={{width: '1.5em'}} />:
							${currentPrice}
						</>
					) : null}
				</Grid>
			</Box>
		</Grid>
	)
}

export default TokenInfoWidget
