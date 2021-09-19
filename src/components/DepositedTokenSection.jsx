import React, {useState, useEffect} from 'react'
import {Grid, Box} from '@material-ui/core'
import DateAndTimePickers from './DateAndTimePickers'
import DepositedTokensInput from './DepositedTokensInput'
import FinalTokenInput from './FinalTokenInput'
import TaskSelector from './TaskSelector'
import TokenAPR from './TokenAPR'
import {
	calculateAPR,
	calculateFutureTokens,
	calculateTime,
	calculateNecessaryTokens,
} from './TasksFunctions'
import NecessaryTime from './NecessaryTime'
import Footer from './Footer'

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
	marginTop: '1.3em',
	borderRadius: '10px',
	boxShadow: '10px 11px 10px grey',
}

const DepositedTokenSection = props => {
	const {theme} = props

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
	const [necessaryTime, setNecessaryTime] = useState(0)

	const resetValues = () => {
		setStarterTokens(0)
		setFinalTokens(0)
		setAprDisabledState(false)
		setFinalTokensDisabledState(false)
		setApr(prevState => {
			return {TAPR: 0}
		})
		setNecessaryTime(0)
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

	useEffect(() => {
		if (taskD.checked === true) {
			let time = calculateTime(
				starterTokens.amount,
				finalTokens.amount,
				apr.TAPR,
			)
			setNecessaryTime(time)
		}
	}, [
		taskA,
		taskB,
		taskC,
		taskD,
		taskE,
		starterTokens,
		finalTokens,
		apr.TAPR,
	])

	useEffect(() => {
		if (taskE.checked === true) {
			let necessaryTokens = calculateNecessaryTokens(
				finalTokens.amount,
				apr.TAPR,
				necessaryTime,
			)
			setStarterTokens(() => {
				return {amount: necessaryTokens}
			})
		}
	}, [
		taskA,
		taskB,
		taskC,
		taskD,
		taskE,
		finalTokens,
		apr.TAPR,
		necessaryTime,
	])

	return (
		<div style={{fontFamily: 'kanit'}}>
			<div style={borderStyle}>
				<Grid container justifyContent="center">
					<Grid
						item
						xs={12}
						style={{display: 'flex', justifyContent: 'center'}}
					>
						<p style={{marginBottom: 0}}>
							Paso 1: ¿Qué deseas calcular?
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
			{taskA.checked || taskC.checked ? (
				<div style={borderStyle}>
					<Grid container>
						<Grid
							item
							xs={12}
							style={{display: 'flex', justifyContent: 'center'}}
						>
							<p>Paso 2: Complete los campos indicados</p>
						</Grid>
					</Grid>
					<Grid
						container
						direction="row"
						justifyContent="center"
						spacing={3}
					>
						<Grid
							item
							xs={12}
							sm={6}
							style={{display: 'flex', justifyContent: 'center'}}
						>
							<DepositedTokensInput
								starterTokens={starterTokens}
								setStarterTokens={setStarterTokens}
							/>
						</Grid>
						<Grid
							item
							xs={12}
							sm={6}
							style={{display: 'flex', justifyContent: 'center'}}
						>
							<DateAndTimePickers
								id={'start'}
								setStartDate={setStartDate}
							/>
						</Grid>
						<Grid
							item
							xs={12}
							sm={6}
							style={{display: 'flex', justifyContent: 'center'}}
						>
							<FinalTokenInput
								finalTokens={finalTokens}
								setFinalTokens={setFinalTokens}
								finalTokensDisabledState={
									finalTokensDisabledState
								}
							/>
						</Grid>
						<Grid
							item
							xs={12}
							sm={6}
							style={{display: 'flex', justifyContent: 'center'}}
						>
							<DateAndTimePickers
								id={'final'}
								s
								setFinalDate={setFinalDate}
							/>
						</Grid>
						<Grid
							item
							xs={12}
							sm={6}
							style={{display: 'flex', justifyContent: 'center'}}
						>
							<TokenAPR
								apr={apr}
								setApr={setApr}
								aprDisabledState={aprDisabledState}
							/>
						</Grid>
					</Grid>
					<Grid container>
						<Grid
							item
							xs={12}
							style={{display: 'flex', justifyContent: 'center'}}
						>
							<p>
								Nota: utilizar el punto como separador decimal
							</p>
						</Grid>
					</Grid>
				</div>
			) : null}
			{taskD.checked ? (
				<div style={borderStyle}>
					<Grid container>
						<Grid
							item
							xs={12}
							style={{display: 'flex', justifyContent: 'center'}}
						>
							<p>Paso 2: Complete los campos indicados</p>
						</Grid>
					</Grid>
					<Grid
						container
						direction="row"
						justifyContent="center"
						spacing={3}
					>
						<Grid
							item
							xs={12}
							sm={6}
							style={{display: 'flex', justifyContent: 'center'}}
						>
							<DepositedTokensInput
								label={'Tokens depositados'}
								starterTokens={starterTokens}
								setStarterTokens={setStarterTokens}
							/>
						</Grid>
						<Grid
							item
							xs={12}
							sm={6}
							style={{display: 'flex', justifyContent: 'center'}}
						>
							<FinalTokenInput
								label={'Tokens a juntar'}
								finalTokens={finalTokens}
								setFinalTokens={setFinalTokens}
								finalTokensDisabledState={
									finalTokensDisabledState
								}
							/>
						</Grid>
						<Grid
							item
							xs={12}
							sm={6}
							style={{display: 'flex', justifyContent: 'center'}}
						>
							<TokenAPR
								apr={apr}
								setApr={setApr}
								aprDisabledState={aprDisabledState}
							/>
						</Grid>
						<Grid
							item
							xs={12}
							sm={6}
							style={{display: 'flex', justifyContent: 'center'}}
						>
							<NecessaryTime
								necessaryTime={necessaryTime}
								label={'Tiempo necesario'}
							/>
						</Grid>
					</Grid>
					<Grid container>
						<Grid
							item
							xs={12}
							style={{display: 'flex', justifyContent: 'center'}}
						>
							<p>
								Nota: utilizar el punto como separador decimal
							</p>
						</Grid>
					</Grid>
				</div>
			) : null}
			{taskE.checked ? (
				<div style={borderStyle}>
					<Grid container>
						<Grid
							item
							xs={12}
							style={{display: 'flex', justifyContent: 'center'}}
						>
							<p>Paso 2: Complete los campos indicados</p>
						</Grid>
					</Grid>
					<Grid
						container
						direction="row"
						justifyContent="center"
						spacing={3}
					>
						<Grid
							item
							xs={12}
							sm={6}
							style={{display: 'flex', justifyContent: 'center'}}
						>
							<DepositedTokensInput
								label={'Tokens necesarios'}
								starterTokens={starterTokens}
								setStarterTokens={setStarterTokens}
							/>
						</Grid>
						<Grid
							item
							xs={12}
							sm={6}
							style={{display: 'flex', justifyContent: 'center'}}
						>
							<FinalTokenInput
								label={'Tokens a juntar'}
								finalTokens={finalTokens}
								setFinalTokens={setFinalTokens}
								finalTokensDisabledState={
									finalTokensDisabledState
								}
							/>
						</Grid>
						<Grid
							item
							xs={12}
							sm={6}
							style={{display: 'flex', justifyContent: 'center'}}
						>
							<TokenAPR
								apr={apr}
								setApr={setApr}
								aprDisabledState={aprDisabledState}
							/>
						</Grid>
						<Grid
							item
							xs={12}
							sm={6}
							style={{display: 'flex', justifyContent: 'center'}}
						>
							<NecessaryTime
								necessaryTime={necessaryTime}
								setNecessaryTime={setNecessaryTime}
								label={'Tiempo (Días)'}
							/>
						</Grid>
					</Grid>
					<Grid container>
						<Grid
							item
							xs={12}
							style={{display: 'flex', justifyContent: 'center'}}
						>
							<p>
								Nota: utilizar el punto como separador decimal
							</p>
						</Grid>
					</Grid>
				</div>
			) : null}
			<Grid item xs={12}>
				<Footer theme={theme} />
			</Grid>
		</div>
	)
}

export default DepositedTokenSection
