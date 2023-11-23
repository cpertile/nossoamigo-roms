import { PropsWithChildren } from 'react'
import './App.css'
import ConsoleSelector from './components/ConsoleSelector/ConsoleSelector'
import GameList from './components/GameList/GameList'
import ProgressIndicator from './components/ProgressIndicator/ProgressIndicator'
import SearchInput from './components/SearchInput/SearchInput'
import StorageUnitSelector from './components/StorageUnitSelector/StorageUnitSelector'
import useGamesStore from './hooks/useGamesStore'

function StickyHeader({ children }: PropsWithChildren) {
	const selectedStorageUnit = useGamesStore(state => state.selectedStorageUnit)

	return (
		selectedStorageUnit.size > 0 ?
			<div style={{
				position: 'sticky',
				top: 0,
				padding: '4px',
				zIndex: 10,
				backgroundColor: '#0B88FF',
			}}>
				{children}
			</div>
			: <></>
	)
}

function App() {
	return (<>
		<h1>Seletor de Jogos</h1>
		<StorageUnitSelector />

		<StickyHeader>
			<ProgressIndicator />
			<ConsoleSelector />
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
