import React from 'react'
import Header from './components/Header'
import {Grid, Box, Container} from '@material-ui/core'
import DepositedTokenSection from './components/DepositedTokenSection'
import Footer from './components/Footer'

const borderStyle = {
	border: '1px solid',
	marginTop: '1em',
	borderRadius: '20px',
}

function App() {
	return (
		<div className="App">
			<Container maxWidth="sm" style={{textAlign: 'center'}}>
				<Grid
					container
					style={{marginTop: '0.2em', marginBottom: '0.2em'}}
				>
					<Grid item xs={12}>
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
			</Container>
		</div>
	)
}

export default App
