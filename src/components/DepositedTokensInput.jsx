import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'

const useStyles = makeStyles(theme => ({
	root: {
		'& > *': {
			margin: theme.spacing(1),
			width: 200,
		},
	},
}))

export default function DepositedTokensInput(props) {
	const classes = useStyles()
	const {starterTokens, setStarterTokens, label} = props

	const handleTokensChange = event => {
		if (event.target.value) {
			setStarterTokens(prevState => {
				if (prevState.amount === 0) {
					return {amount: event.target.value.split('0')[1]}
				} else {
					return {...prevState, amount: event.target.value}
				}
			})
			event.preventDefault()
		} else {
			setStarterTokens(() => {
				return {amount: 0}
			})
		}
	}

	return (
		<form className={classes.root} noValidate autoComplete="off">
			<TextField
				id="standard-basic"
				label={label ? label : 'Tokens iniciales'}
				value={starterTokens.amount}
				onChange={event => {
					handleTokensChange(event)
				}}
				disabled={label === 'Tokens necesarios' ? true : false}
			/>
		</form>
	)
}
