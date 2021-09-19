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

export default function NecessaryTime(props) {
	const classes = useStyles()
	const {necessaryTime, setNecessaryTime, label} = props

	const handleTimeChange = event => {
		let value = event.target.value
		if (value) {
			setNecessaryTime(prevState => {
				if (prevState === 0) {
					return value.split('0')[1]
				} else {
					return value
				}
			})
			event.preventDefault()
		} else {
			setNecessaryTime(0)
		}
	}

	return (
		<form className={classes.root} noValidate autoComplete="off">
			<TextField
				id="standard-basic"
				label={label}
				value={
					label === 'Tiempo (Días)'
						? necessaryTime
						: `${necessaryTime} días`
				}
				disabled={label === 'Tiempo (Días)' ? false : true}
				onChange={
					label === 'Tiempo (Días)'
						? event => handleTimeChange(event)
						: null
				}
				variant="outlined"
			/>
		</form>
	)
}
