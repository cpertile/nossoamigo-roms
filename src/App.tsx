import './App.css'
import ConsoleSelector from './components/ConsoleSelector/ConsoleSelector'
import GameList from './components/GameList/GameList'
import SearchInput from './components/SearchInput/SearchInput'
import StorageUnitSelector from './components/StorageUnitSelector/StorageUnitSelector'
import GamesDB from './databases/newdb.json'

const gameList = GamesDB.games

function App() {
	return (<>
		<h1>Seletor de Jogos</h1>

		<div style={{
			position: 'sticky',
			top: 0,
			padding: '4px',
			zIndex: 10,
			backgroundColor: '#0B88FF'
		}}>
			<SearchInput
				name='search'
				type='search'
				placeholder='Pesquisar nome'
			/>
			<ConsoleSelector />
			<StorageUnitSelector />
		</div>

		<GameList gameList={gameList} />
	</>)
}

export default App
