import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'

const useStyles = makeStyles(theme => ({
	root: {
		'& > *': {
			margin: theme.spacing(1),
			width: '25ch',
		},
	},
}))

export default function FinalTokenInput(props) {
	const classes = useStyles()
	const {finalTokens, setFinalTokens} = props

	const handleTokensChange = event => {
		if (event.target.value) {
			setFinalTokens(prevState => {
				if (prevState.amount === 0) {
					return {amount: event.target.value.split('0')[1]}
				} else {
					return {...prevState, amount: event.target.value}
				}
			})
			event.preventDefault()
		} else {
			setFinalTokens(() => {
				return {amount: 0}
			})
		}
	}

	return (
		<form className={classes.root} noValidate autoComplete="off">
			<TextField
				id="standard-basic"
				label="Tokens finales"
				value={finalTokens.amount}
				onChange={event => {
					handleTokensChange(event)
				}}
			/>
		</form>
	)
}
