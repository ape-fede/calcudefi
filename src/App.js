import React, {useState} from 'react'
import Header from './components/Header'
import {Grid, Hidden} from '@material-ui/core'
import DepositedTokenSection from './components/DepositedTokenSection'
import TokenInfoWidget from './components/TokenInfoWidget'
import {createTheme, ThemeProvider} from '@material-ui/core/styles'
import {Paper} from '@material-ui/core'

function App() {
	const [theme, setTheme] = useState('light')

	const darkTheme = createTheme({
		palette: {
			type: theme,
		},
	})
	return (
		<ThemeProvider theme={darkTheme}>
			<Paper style={{minHeight: '100vh'}}>
				<Header theme={theme} setTheme={setTheme} />
				<Grid
					container
					direction="row-reverse"
					justifyContent="space-around"
					alignItems="flex-start"
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
						<DepositedTokenSection theme={theme} />
					</Grid>
					<Hidden smDown>
						<Grid item xs={11} md={2} xl={1}>
							<TokenInfoWidget />
						</Grid>
					</Hidden>
				</Grid>
			</Paper>
		</ThemeProvider>
	)
}

export default App
