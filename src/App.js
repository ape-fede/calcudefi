import React from 'react'
import Header from './components/Header'
import {Grid, Box, Container} from '@material-ui/core'
import DepositedTokenSection from './components/DepositedTokenSection'
import Footer from './components/Footer'
import TokenInfoWidget from './components/TokenInfoWidget'

function App() {
	return (
		<div className="App">
			<Header />
			<Container maxWidth="sm" style={{textAlign: 'center'}}>
				<TokenInfoWidget />
				<Grid
					container
					style={{
						marginTop: '0.2em',
						marginBottom: '0.2em',
						justifyContent: 'center',
					}}
				>
					<Grid item xs={12}>
						<Box>
							<DepositedTokenSection />
						</Box>
					</Grid>
					<Grid item xs={12}>
						<Box>
							<Footer />
						</Box>
					</Grid>
				</Grid>
			</Container>
		</div>
	)
}

export default App
