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
	const {apr, setApr, aprDisabledState} = props

	const handleAPRChange = event => {
		let value = event.target.value
		toString(value)
		let reg = /[%]|[\s]/g
		console.log(value)
		let value2 = value.replace(reg, '')
		parseInt(value2)
		console.log(value2)
		if (value2) {
			setApr(prevState => {
				if (prevState.TAPR === 0) {
					return {TAPR: value2.split('0')[1]}
				} else {
					return {...prevState, TAPR: value2}
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
				value={`${apr.TAPR}%`}
				onChange={event => {
					handleAPRChange(event)
				}}
				disabled={aprDisabledState}
			/>
		</form>
	)
}
