import React from 'react'
import Header from './components/Header'
import {Grid, Box, Container} from '@material-ui/core'
import DepositedTokenSection from './components/DepositedTokenSection'
import Footer from './components/Footer'
import TokenInfoWidget from './components/TokenInfoWidget'

const borderStyle = {
	border: '1px solid',
	marginTop: '1em',
	borderRadius: '20px',
	boxShadow: '10px 5px 10px grey',
}

function App() {
	return (
		<div className="App">
			<Container maxWidth="sm" style={{textAlign: 'center'}}>
				<Grid
					container
					style={{
						marginTop: '0.2em',
						marginBottom: '0.2em',
						justifyContent: 'center',
					}}
				>
					<Grid item xs={6}>
						<Box style={borderStyle}>
							<Header />
						</Box>
					</Grid>
				</Grid>
				<Grid container>
					<Grid item xs={12}>
						<Box>
							<DepositedTokenSection />
						</Box>
					</Grid>
				</Grid>
				<Grid
					container
					style={{marginTop: '0.2em', marginBottom: '0.2em'}}
				>
					<Grid item xs={12}>
						<Box>
							<Footer />
						</Box>
					</Grid>
				</Grid>
				<TokenInfoWidget />
			</Container>
		</div>
	)
}

export default App
