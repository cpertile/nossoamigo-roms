import './App.css'
import ConsoleSelector from './components/ConsoleSelector/ConsoleSelector'
import GameList from './components/GameList/GameList'
import ProgressIndicator from './components/ProgressIndicator/ProgressIndicator'
import SearchInput from './components/SearchInput/SearchInput'
import StickyHeader from './components/StickyHeader'
import StorageUnitSelector from './components/StorageUnitSelector/StorageUnitSelector'

function sortingOptions() {
	return (<></>)
}

function App() {
	return (<>
		<h1>Seletor de Jogos</h1>
		<StorageUnitSelector />

		<StickyHeader>
			<ProgressIndicator />
			<ConsoleSelector />
			{sortingOptions()}
			<SearchInput
				name='search'
				type='search'
				placeholder='Pesquisar nome'
			/>
		</StickyHeader>

		<GameList />
	</>)
}

export default App
