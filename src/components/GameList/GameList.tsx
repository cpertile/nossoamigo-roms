import { memo, useEffect, useMemo, useState } from 'react';
import useGamesStore from '../../hooks/useGamesStore';
import GameCard, { Game } from '../GameCard/GameCard';
import './GameList.css';

const apiUrl = import.meta.env.VITE_API_URL

const GameList: React.FC = memo(() => {
	const [gameList, setGameList] = useState<Game[]>([])
	const searchValue = useGamesStore(state => state.searchValue)
	const selectedStorageUnit = useGamesStore(state => state.selectedStorageUnit)
	const consoleFilters = useGamesStore(state => state.consoleFilters)
	const sortingOptions = useGamesStore(state => state.sortingOptions)

	useEffect(() => {
		const loadGames = async () => {
			try {
				const response = await fetch(`${apiUrl}/games`)
				const result = await response.json()
				setGameList(result)
			} catch (error) {
				console.error({ error, message: 'Failed to load games' })
			}
		}

		loadGames()
	}, [])

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
	}, [consoleFilters, searchValue, sortingOptions.order, sortingOptions.type, gameList])

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