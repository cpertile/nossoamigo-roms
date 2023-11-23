import React from 'react'
import useGamesStore from '../../hooks/useGamesStore'

const ConsoleSelector: React.FC = () => {
	const consoleFilters = useGamesStore(state => state.consoleFilters)
	const setConsoleFilters = useGamesStore(state => state.setConsoleFilters)

	return (
		<div style={{ padding: '6px', display: 'flex', justifyContent: 'center', gap: 16 }}>
			<span>
				<label htmlFor='wii-checkbox'>Wii</label>
				<input
					id='wii-checkbox'
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
			</span>
			<span>
				<label htmlFor='gamecube-checkbox'>GameCube</label>
				<input
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
			</span>
		</div>
	)
}

export default ConsoleSelector