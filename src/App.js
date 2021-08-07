import React from 'react'
import Header from './components/Header'
import {Grid, Box, Container} from '@material-ui/core'
import DepositedTokenSection from './components/DepositedTokenSection'

function App() {
	return (
		<div className="App">
			<Container maxWidth="sm" style={{textAlign: 'center'}}>
				<Grid container style={{marginTop: 15, marginBottom: 5}}>
					<Grid item xs={12}>
						<Box border={1}>
							<Header />
						</Box>
					</Grid>
				</Grid>
				<Grid container>
					<Grid item xs={12}>
						<Box border={1}>
							<DepositedTokenSection />
						</Box>
					</Grid>
				</Grid>
			</Container>
		</div>
	)
}

export default App
