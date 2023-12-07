import './App.css'
import Cart from './components/Cart/Cart'
import ConsoleSelector from './components/ConsoleSelector/ConsoleSelector'
import GameList from './components/GameList/GameList'
import SearchInput from './components/SearchInput/SearchInput'
import SortingOptions from './components/SortingOptions'
import StickyHeader from './components/StickyHeader'

// function Divider() {
// 	return (<div style={{ borderBottom: '1px solid #dedede', margin: '4px 0' }} />)
// }

function App() {
	return (<>
		<h1>Seletor de Jogos</h1>

		<StickyHeader>
			<ConsoleSelector />
			<SortingOptions />
			<SearchInput
				name='search'
				type='search'
				placeholder='Pesquisar nome'
			/>
		</StickyHeader>

		<GameList />
		<Cart />
	</>)
}

export default App
