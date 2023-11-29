import React from 'react'
import useGamesStore from '../../hooks/useGamesStore'
import FormCheckInput from 'react-bootstrap/FormCheckInput'
import FormCheckLabel from 'react-bootstrap/FormCheckLabel'

const ConsoleSelector: React.FC = () => {
	const consoleFilters = useGamesStore(state => state.consoleFilters)
	const setConsoleFilters = useGamesStore(state => state.setConsoleFilters)

	return (
		<div style={{ padding: '6px', display: 'flex', justifyContent: 'center', gap: 16, color: 'white' }}>
			<span>
				<FormCheckInput
					id='wii-checkbox'
					as='input'
					type='checkbox'
					readOnly
					checked={consoleFilters.includes('wii')}
					onChange={() => {
						if (consoleFilters.includes('wii')) {
							setConsoleFilters(consoleFilters.filter(item => item !== 'wii'))
						} else {
							setConsoleFilters([...consoleFilters, 'wii'])
						}
					}}
				/>
				<FormCheckLabel htmlFor='wii-checkbox'>Wii</FormCheckLabel>
			</span>
			<span>
				<FormCheckInput
					id='gamecube-checkbox'
					type='checkbox'
					readOnly
					checked={consoleFilters.includes('gamecube')}
					onChange={() => {
						if (consoleFilters.includes('gamecube')) {
							setConsoleFilters(consoleFilters.filter(item => item != 'gamecube'))
						} else {
							setConsoleFilters([...consoleFilters, 'gamecube'])
						}
					}}
				/>
				<FormCheckLabel htmlFor='gamecube-checkbox'>GameCube</FormCheckLabel>
			</span>
		</div>
	)
}

export default ConsoleSelector