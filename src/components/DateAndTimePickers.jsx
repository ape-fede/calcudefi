import React, {useEffect} from 'react'
import {makeStyles} from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'

const useStyles = makeStyles(theme => ({
	container: {
		display: 'flex',
		flexWrap: 'wrap',
	},
	textField: {
		marginLeft: theme.spacing(1),
		marginRight: theme.spacing(1),
		width: 200,
	},
}))

export default function DateAndTimePickers(props) {
	const classes = useStyles()
	const {setStartDate, setFinalDate, id} = props

	const handleTimeChange = event => {
		if (id === 'start') {
			setStartDate(event.target.value)
		}
		if (id === 'final') {
			setFinalDate(event.target.value)
		}
	}

	let tiempo = new Date()
	let minActual = tiempo.getMinutes() //  devuelve mins en 60
	let horaActual = tiempo.getHours() //  devuelve hora en 24
	let diaActual = tiempo.getDate() // devuelve num = (9 =9)
	let mesActual = tiempo.getMonth() + 1 // devuelve num (0=Jan)
	let anioActual = tiempo.getFullYear() // devuelve anio

	const corregirFormato = () => {
		if (minActual < 10) {
			minActual = `0${minActual}`
		}
		if (horaActual < 10) {
			horaActual = `0${horaActual}`
		}
		if (diaActual < 10) {
			diaActual = `0${diaActual}`
		}
		if (mesActual < 10) {
			mesActual = `0${mesActual}`
		}
	}
	corregirFormato()

	const defaultValue = `${anioActual}-${mesActual}-${diaActual}T${horaActual}:${minActual}`

	useEffect(() => {
		if (id === 'start') {
			setStartDate(defaultValue)
		}
		if (id === 'final') {
			setFinalDate(defaultValue)
		}
	}, [])

	return (
		<form className={classes.container} noValidate>
			<TextField
				id="datetime-local"
				label="Fecha y hora"
				type="datetime-local"
				defaultValue={defaultValue}
				className={classes.textField}
				onChange={event => {
					handleTimeChange(event)
				}}
				InputLabelProps={{
					shrink: true,
				}}
				style={{marginTop: 7}}
			/>
		</form>
	)
}
