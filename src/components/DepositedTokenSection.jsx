import React, {useState, useEffect} from 'react'
import {Grid, Box} from '@material-ui/core'
import DateAndTimePickers from './DateAndTimePickers'
import DepositedTokensInput from './DepositedTokensInput'
import FinalTokenInput from './FinalTokenInput'
import TaskSelector from './TaskSelector'
import TokenAPR from './TokenAPR'
import {calculateAPR} from './TasksFunctions'

const IstarterTokens = {
	amount: 0,
	price: Number,
}
const IfinalTokens = {
	amount: 0,
	price: Number,
}

const IAPR = {
	TAPR: 0,
	USDAPR: Number,
}

const tasksProps = {
	'checked': false,
	'disabled': false,
}

const DepositedTokenSection = () => {
	const [starterTokens, setStarterTokens] = useState(IstarterTokens)
	const [finalTokens, setFinalTokens] = useState(IfinalTokens)
	const [apr, setApr] = useState(IAPR)
	const [startDate, setStartDate] = useState(null)
	const [finalDate, setFinalDate] = useState(null)
	const [taskA, setTaskA] = useState(tasksProps)
	const [taskB, setTaskB] = useState(tasksProps)
	const [taskC, setTaskC] = useState(tasksProps)
	const [taskD, setTaskD] = useState(tasksProps)
	const [taskE, setTaskE] = useState(tasksProps)

	useEffect(() => {
		if (taskA.checked === true) {
			let apr2 = calculateAPR(
				starterTokens,
				finalTokens,
				startDate,
				finalDate,
			)
			console.log(apr2)
			setApr(prevState => {
				return {TAPR: apr2}
			})
		}
	}, [
		taskA,
		taskB,
		taskC,
		taskD,
		taskE,
		starterTokens,
		finalTokens,
		startDate,
		finalDate,
	])

	return (
		<>
			<Grid container>
				<Grid item xs={12}>
					<p>Paso 1</p>
					<p>¿Qué desea realizar?</p>
				</Grid>
			</Grid>
			<Grid container spacing={3}>
				<Grid item xs={12}>
					<Box border={1}>
						<TaskSelector
							taskA={taskA}
							taskB={taskB}
							taskC={taskC}
							taskD={taskD}
							taskE={taskE}
							setTaskA={setTaskA}
							setTaskB={setTaskB}
							setTaskC={setTaskC}
							setTaskD={setTaskD}
							setTaskE={setTaskE}
						/>
					</Box>
				</Grid>
			</Grid>
			<Grid container>
				<Grid item xs={12}>
					<Box>
						<p>Paso 2</p>
						<p>Complete los campos indicados</p>
					</Box>
				</Grid>
			</Grid>
			<Grid container direction="row" justifyContent="center" spacing={3}>
				<Grid item xs={12} sm={6}>
					<Box>
						<DepositedTokensInput
							starterTokens={starterTokens}
							setStarterTokens={setStarterTokens}
						/>
					</Box>
				</Grid>
				<Grid item xs={12} sm={6}>
					<Box>
						<DateAndTimePickers
							id={'start'}
							setStartDate={setStartDate}
						/>
					</Box>
				</Grid>
				<Grid item xs={12} sm={6}>
					<Box>
						<FinalTokenInput
							finalTokens={finalTokens}
							setFinalTokens={setFinalTokens}
						/>
					</Box>
				</Grid>
				<Grid item xs={12} sm={6}>
					<Box>
						<DateAndTimePickers
							id={'final'}
							setFinalDate={setFinalDate}
						/>
					</Box>
				</Grid>
				<Grid item xs={12} sm={6}>
					<Box>
						<TokenAPR apr={apr} setApr={setApr} />
					</Box>
				</Grid>
			</Grid>
			<Grid container>
				<Grid item xs={12}>
					<p> Nota: utilizar el punto como separador decimal</p>
				</Grid>
			</Grid>
		</>
	)
}

export default DepositedTokenSection
