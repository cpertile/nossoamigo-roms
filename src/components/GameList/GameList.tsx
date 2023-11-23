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

	const filteredList: Game[] = useMemo(() => {
		const searchValueLowerCase = searchValue.toLowerCase()
		return gameList.filter(item => {
			if (searchValue == '') return consoleFilters.includes(item.console)
			return item.name.toLowerCase().includes(searchValueLowerCase) && consoleFilters.includes(item.console)
		})
	}, [consoleFilters, searchValue])

	return (<>
		{!(selectedStorageUnit.size > 0) && <h1>⬆️ Selecione uma unidade de armazenamento para visualizar os jogos</h1>}
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