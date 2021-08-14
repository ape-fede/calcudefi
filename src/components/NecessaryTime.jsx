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

export default function NecessaryTime(props) {
	const classes = useStyles()
	const {necessaryTime} = props

	return (
		<form className={classes.root} noValidate autoComplete="off">
			<TextField
				id="standard-basic"
				label="Tiempo necesario"
				value={`${necessaryTime} días`}
				disabled={true}
			/>
		</form>
	)
}
