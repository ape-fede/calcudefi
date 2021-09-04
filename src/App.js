import React from 'react'
import Header from './components/Header'
import {Grid, Hidden} from '@material-ui/core'
import DepositedTokenSection from './components/DepositedTokenSection'
import TokenInfoWidget from './components/TokenInfoWidget'

function App() {
	return (
		<div className="App">
			<Header />
			<Grid
				container
				direction="row-reverse"
				justifyContent="space-around"
				alignItems="center"
				style={{
					display: 'flex',
					marginTop: '0.2em',
					marginBottom: '0.2em',
				}}
				xs={12}
			>
				<Grid item xs={11} md={2} xl={1}>
					<TokenInfoWidget />
				</Grid>
				<Grid item xs={11} md={6}>
					<DepositedTokenSection />
				</Grid>
				<Hidden smDown>
					<Grid item xs={11} md={2} xl={1}>
						<TokenInfoWidget />
					</Grid>
				</Hidden>
			</Grid>
		</div>
	)
}

export default App
