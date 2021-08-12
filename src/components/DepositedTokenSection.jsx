import React, {useState, useEffect} from 'react'
import {Grid, Box} from '@material-ui/core'
import DateAndTimePickers from './DateAndTimePickers'
import DepositedTokensInput from './DepositedTokensInput'
import FinalTokenInput from './FinalTokenInput'
import TaskSelector from './TaskSelector'
import TokenAPR from './TokenAPR'
import {calculateAPR, calculateFutureTokens} from './TasksFunctions'

const IstarterTokens = {
	amount: 0,
	price: Number,
}
const IfinalTokens = {
	amount: 0,
	price: Number,
}

const IAPR = {
	TAPR: 0, // Tokens APR
	USDAPR: Number, // Dolars APR
}

const tasksProps = {
	'checked': false,
	'disabled': false,
}

const borderStyle = {
	border: '1px solid',
	marginTop: '1em',
	borderRadius: '20px',
	boxShadow: '10px 5px 10px grey',
}

const DepositedTokenSection = () => {
	const [starterTokens, setStarterTokens] = useState(IstarterTokens)
	const [finalTokens, setFinalTokens] = useState(IfinalTokens)
	const [finalTokensDisabledState, setFinalTokensDisabledState] =
		useState(false)
	const [apr, setApr] = useState(IAPR)
	const [aprDisabledState, setAprDisabledState] = useState(false)
	const [startDate, setStartDate] = useState(null)
	const [finalDate, setFinalDate] = useState(null)
	const [taskA, setTaskA] = useState(tasksProps)
	const [taskB, setTaskB] = useState(tasksProps)
	const [taskC, setTaskC] = useState(tasksProps)
	const [taskD, setTaskD] = useState(tasksProps)
	const [taskE, setTaskE] = useState(tasksProps)

	const resetValues = () => {
		setStarterTokens(0)
		setFinalTokens(0)
		setAprDisabledState(false)
		setFinalTokensDisabledState(false)
		setApr(prevState => {
			return {TAPR: 0}
		})
	}

	useEffect(() => {
		if (taskA.checked === true) {
			let apr2 = calculateAPR(
				starterTokens,
				finalTokens,
				startDate,
				finalDate,
			)
			setApr(prevState => {
				return {TAPR: apr2}
			})
			setAprDisabledState(true)
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

	useEffect(() => {
		if (taskC.checked === true) {
			let futureTokens = calculateFutureTokens(
				starterTokens,
				startDate,
				finalDate,
				apr.TAPR,
			)
			setFinalTokens(() => {
				return {amount: futureTokens}
			})
			setFinalTokensDisabledState(true)
		}
	}, [
		taskA,
		taskB,
		taskC,
		taskD,
		taskE,
		starterTokens,
		startDate,
		finalDate,
		apr.TAPR,
	])

	return (
		<>
			<div style={borderStyle}>
				<Grid container>
					<Grid item xs={12}>
						<p style={{marginBottom: 0}}>
							Paso 1: ¿Qué desea realizar?
						</p>
					</Grid>
				</Grid>
				<Grid container spacing={3}>
					<Grid item xs={12}>
						<Box style={{margin: '1em'}}>
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
								resetValues={resetValues}
							/>
						</Box>
					</Grid>
				</Grid>
			</div>

			{/* PASO 2 */}
			{taskA.checked ||
			taskB.checked ||
			taskC.checked ||
			taskD.checked ||
			taskE.checked ? (
				<div style={borderStyle}>
					<Grid container>
						<Grid item xs={12}>
							<Box>
								<p>Paso 2: Complete los campos indicados</p>
							</Box>
						</Grid>
					</Grid>
					<Grid
						container
						direction="row"
						justifyContent="center"
						spacing={3}
					>
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
									finalTokensDisabledState={
										finalTokensDisabledState
									}
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
								<TokenAPR
									apr={apr}
									setApr={setApr}
									aprDisabledState={aprDisabledState}
								/>
							</Box>
						</Grid>
					</Grid>
					<Grid container>
						<Grid item xs={12}>
							<p>
								Nota: utilizar el punto como separador decimal
							</p>
						</Grid>
					</Grid>
				</div>
			) : null}
		</>
	)
}

export default DepositedTokenSection
