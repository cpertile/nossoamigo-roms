import { useMemo, useState } from 'react'
import './App.css'
import Button from './components/Button/Button'
import GameList from './components/GameList/GameList'
import Input from './components/Input/Input'
import GamesDB from './databases/newdb.json'
import useGamesStore from './hooks/useGamesStore'

export interface StorageUnit {
	id: number
	name: string
	size: number
}

const storageUnits: StorageUnit[] = [
	{
		id: 1,
		name: 'Pendrive 64 Gb (57 utilizáveis)',
		size: 57620
	},
	{
		id: 2,
		name: 'HD 500 Gb (465 utilizáveis)',
		size: 465760
	},
	{
		id: 3,
		name: 'HD 1 Tb (931 utilizáveis)',
		size: 931000
	}
]

function App() {
	const gameList = GamesDB.games
	const [searchValue, setsearchValue] = useState('')
	const [consoleFilters, setConsoleFilters] = useState(['wii', 'gamecube'])
	const { totalSize, clear, selectedStorageUnit, changeStorageUnit } = useGamesStore()

	const filteredGameList = useMemo(() => {
		return gameList.filter(item => {
			if (searchValue == '') return consoleFilters.includes(item.console)
			return item.name.toLowerCase().includes(searchValue.toLowerCase()) && consoleFilters.includes(item.console)
		})
	}, [consoleFilters, gameList, searchValue])

	return (
		<>
			<h1>Seletor de Jogos</h1>

			<div style={{
				position: 'sticky',
				top: 0,
				padding: '4px',
				zIndex: 10,
				backgroundColor: '#0B88FF'
			}}>
				<Input
					name='search'
					placeholder='Pesquisar nome'
					value={searchValue}
					onChange={e => setsearchValue(e.target.value)}
				/>

				<div style={{ padding: '6px' }}>
					<h4>Filtros / Ordenação</h4>
					<label htmlFor='wii-checkbox'>Wii</label>
					<input
						id='wii-checkbox'
						type='checkbox'
						readOnly
						checked={consoleFilters.includes('wii')}
						onChange={() => {
							if (consoleFilters.includes('wii')) {
								setConsoleFilters(state => state.filter(item => item != 'wii'))
							} else {
								setConsoleFilters(state => [...state, 'wii'])
							}
						}}
					/>
					<label htmlFor='gamecube-checkbox'>GameCube</label>
					<input
						id='gamecube=checkbox'
						type='checkbox'
						readOnly
						checked={consoleFilters.includes('gamecube')}
						onChange={() => {
							if (consoleFilters.includes('gamecube')) {
								setConsoleFilters(state => state.filter(item => item != 'gamecube'))
							} else {
								setConsoleFilters(state => [...state, 'gamecube'])
							}
						}}
					/>
				</div>

				<span style={{ display: 'flex', gap: '4px', justifyContent: 'space-around', margin: '6px' }}>
					<Button onClick={() => changeStorageUnit(storageUnits[0])}>Pendrive 64 Gb</Button>
					<Button onClick={() => changeStorageUnit(storageUnits[1])}>HD 500 Gb</Button>
					<Button onClick={() => changeStorageUnit(storageUnits[2])}>HD 1 Tb</Button>
				</span>
				<span style={{ padding: '6px' }}>Usado: {totalSize()} de {selectedStorageUnit?.size} Gb</span>
				<Button onClick={() => clear()}>Zerar</Button>
			</div>

			{
				selectedStorageUnit?.size ?
					<GameList
						filteredList={filteredGameList}
					/>
					:
					<h1>Selecione uma unidade de armazenamento acima para visualizar os jogos</h1>
			}
		</>
	)
}

export default App
