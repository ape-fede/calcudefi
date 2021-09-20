import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'

const useStyles = makeStyles(theme => ({
	root: {
		'& > *': {
			margin: theme.spacing(1),
			width: 220,
		},
	},
}))

export default function TokensInput(props) {
	const classes = useStyles()
	const {tokens, setTokens, label, disabledState, autoFocus} = props

	const handleTokensChange = event => {
		if (event.target.value) {
			setTokens(prevState => {
				if (prevState.amount === 0) {
					return {amount: event.target.value.split('0')[1]}
				} else {
					return {...prevState, amount: event.target.value}
				}
			})
			event.preventDefault()
		} else {
			setTokens(() => {
				return {amount: 0}
			})
		}
	}

	return (
		<form className={classes.root} noValidate autoComplete="off">
			<TextField
				id="standard-basic"
				label={label}
				value={tokens.amount}
				onChange={event => {
					handleTokensChange(event)
				}}
				disabled={disabledState}
				variant="outlined"
				autoFocus={autoFocus}
			/>
		</form>
	)
}
