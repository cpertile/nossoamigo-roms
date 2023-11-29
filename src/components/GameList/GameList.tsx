import { memo, useMemo } from 'react';
import GamesDB from '../../databases/newdb.json';
import useGamesStore from '../../hooks/useGamesStore';
import GameCard, { Game } from '../GameCard/GameCard';
import './GameList.css';

const gameList = GamesDB.games

const GameList: React.FC = memo(() => {
	const searchValue = useGamesStore(state => state.searchValue)
	const selectedStorageUnit = useGamesStore(state => state.selectedStorageUnit)
	const consoleFilters = useGamesStore(state => state.consoleFilters)
	const sortingOptions = useGamesStore(state => state.sortingOptions)

	const filteredList: Game[] = useMemo(() => {
		const searchValueLowerCase = searchValue.toLowerCase()
		const filteredList = gameList.filter(item => {
			if (searchValue == '') return consoleFilters.includes(item.console)
			return item.name.toLowerCase().includes(searchValueLowerCase) && consoleFilters.includes(item.console)
		})

		if (sortingOptions.type === 'Alpha') {
			if (sortingOptions.order === 'ASC') filteredList.sort((a, b) => a.name.localeCompare(b.name))
			if (sortingOptions.order === 'DESC') filteredList.sort((a, b) => b.name.localeCompare(a.name))
		}

		if (sortingOptions.type === 'Size') {
			if (sortingOptions.order === 'ASC') filteredList.sort((a, b) => a.size - b.size)
			if (sortingOptions.order === 'DESC') filteredList.sort((a, b) => b.size - a.size)
		}

		return filteredList
	}, [consoleFilters, searchValue, sortingOptions.order, sortingOptions.type])


	return (<>
		<ul role='list' className='game-list grid'>
			{selectedStorageUnit.size > 0 &&
				filteredList.map(game => {
					return (
						<GameCard
							key={game.id}
							game={game}
						/>
					)
				})}
		</ul>
	</>)
})

export default GameList