import React from 'react'
import FormGroup from '@material-ui/core/FormGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles({
	body: {
		fontFamily: 'kanit',
	},
})

export default function TaskSelector(props) {
	const classes = useStyles()
	const {
		taskA,
		taskB,
		taskC,
		taskD,
		taskE,
		setTaskA,
		setTaskB,
		setTaskC,
		setTaskD,
		setTaskE,
		resetValues,
		theme,
	} = props

	const handleChange = event => {
		const task = event.target.name
		const isChecked = event.target.checked
		if (isChecked === true) {
			if (task === 'A') {
				setTaskA({...taskA, 'checked': true, 'disabled': false})
				setTaskB({...taskB, 'disabled': true})
				setTaskC({...taskC, 'disabled': true})
				setTaskD({...taskD, 'disabled': true})
				setTaskE({...taskE, 'disabled': true})
			} else if (task === 'B') {
				setTaskA({...taskA, 'disabled': true})
				setTaskB({...taskB, 'checked': true, 'disabled': false})
				setTaskC({...taskC, 'disabled': true})
				setTaskD({...taskD, 'disabled': true})
				setTaskE({...taskE, 'disabled': true})
			} else if (task === 'C') {
				setTaskA({...taskA, 'disabled': true})
				setTaskB({...taskB, 'disabled': true})
				setTaskC({...taskC, 'checked': true, 'disabled': false})
				setTaskD({...taskD, 'disabled': true})
				setTaskE({...taskE, 'disabled': true})
			} else if (task === 'D') {
				setTaskA({...taskA, 'disabled': true})
				setTaskB({...taskB, 'disabled': true})
				setTaskC({...taskC, 'disabled': true})
				setTaskD({...taskD, 'checked': true, 'disabled': false})
				setTaskE({...taskE, 'disabled': true})
			} else if (task === 'E') {
				setTaskA({...taskA, 'disabled': true})
				setTaskB({...taskB, 'disabled': true})
				setTaskC({...taskC, 'disabled': true})
				setTaskD({...taskD, 'disabled': true})
				setTaskE({...taskE, 'checked': true, 'disabled': false})
			}
		} else {
			// reset default values
			setTaskA({...taskA, 'checked': false, 'disabled': false})
			setTaskB({...taskB, 'checked': false, 'disabled': false})
			setTaskC({...taskC, 'checked': false, 'disabled': false})
			setTaskD({...taskD, 'checked': false, 'disabled': false})
			setTaskE({...taskE, 'checked': false, 'disabled': false})
			resetValues()
		}
	}

	return (
		<FormGroup row={false}>
			{taskA.disabled ? null : (
				<FormControlLabel
					control={
						<Checkbox
							checked={taskA.checkedA}
							onChange={handleChange}
							name="A"
							color={theme === 'light' ? 'primary' : 'common'}
							disabled={taskA.disabled}
						/>
					}
					label="APR pasado"
					classes={{label: classes.body}}
				/>
			)}
			{taskB.disabled ? null : (
				<FormControlLabel
					style={{fontFamily: 'kanit'}}
					control={
						<Checkbox
							checked={taskB.checkedB}
							onChange={handleChange}
							name="B"
							color={theme === 'light' ? 'primary' : 'common'}
							disabled={taskB.disabled}
						/>
					}
					label="Rendimiento en USD (proximamente...)"
					classes={{label: classes.body}}
				/>
			)}
			{taskC.disabled ? null : (
				<FormControlLabel
					control={
						<Checkbox
							checked={taskC.checkedC}
							onChange={handleChange}
							name="C"
							color={theme === 'light' ? 'primary' : 'common'}
							disabled={taskC.disabled}
						/>
					}
					label="Cuántos Tokens tendré"
					classes={{label: classes.body}}
				/>
			)}
			{taskD.disabled ? null : (
				<FormControlLabel
					control={
						<Checkbox
							checked={taskD.checkedD}
							onChange={handleChange}
							name="D"
							color={theme === 'light' ? 'primary' : 'common'}
							disabled={taskD.disabled}
						/>
					}
					label="Cuánto demoraría juntar 'x' cantidad de Tokens"
					classes={{label: classes.body}}
				/>
			)}
			{taskE.disabled ? null : (
				<FormControlLabel
					control={
						<Checkbox
							checked={taskE.checkedE}
							onChange={handleChange}
							name="E"
							color={theme === 'light' ? 'primary' : 'common'}
							disabled={taskE.disabled}
						/>
					}
					label="Tokens necesarios para juntar 'x' cantidad de Tokens en un período de tiempo dado"
					classes={{label: classes.body}}
				/>
			)}
		</FormGroup>
	)
}
