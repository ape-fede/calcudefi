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

export default function TokenAPR(props) {
	const classes = useStyles()
	const {apr, setApr} = props

	const handleAPRChange = event => {
		if (event.target.value) {
			setApr(prevState => {
				if (prevState.TAPR === 0) {
					return {TAPR: event.target.value.split('0')[1]}
				} else {
					return {...prevState, TAPR: event.target.value}
				}
			})
			event.preventDefault()
		} else {
			setApr(() => {
				return {TAPR: 0}
			})
		}
	}

	return (
		<form className={classes.root} noValidate autoComplete="off">
			<TextField
				id="standard-basic"
				label="APR"
				value={apr.TAPR}
				onChange={event => {
					handleAPRChange(event)
				}}
			/>
		</form>
	)
}
