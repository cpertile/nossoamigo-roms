import { useMemo, useState } from 'react'
import './App.css'
import GameList from './components/GameList/GameList'

// function Divider() {
// 	return (<div style={{ borderBottom: '1px solid #dedede', margin: '4px 0' }} />)
// }
import Button from './components/Button/Button'
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
	const { totalSize, clear, selectedStorageUnit, changeStorageUnit } = useGamesStore()

	const filteredGameList = useMemo(() => {
		return gameList.filter(item => {
			return item.name.toLowerCase().includes(searchValue.toLowerCase())
		})
	}, [gameList, searchValue])

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
				<h4>Filtros / Ordenação</h4>
				<span style={{ display: 'flex', gap: '4px', justifyContent: 'space-around' }}>
					<Button onClick={() => changeStorageUnit(storageUnits[0])}>Pendrive 64 Gb</Button>
					<Button onClick={() => changeStorageUnit(storageUnits[1])}>HD 500 Gb</Button>
					<Button onClick={() => changeStorageUnit(storageUnits[2])}>HD 1 Tb</Button>
				</span>
				<span>Usado: {totalSize()} de {selectedStorageUnit?.size} Gb</span>
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
