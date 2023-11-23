import { memo, useMemo } from 'react';
import GameCard, { Game } from '../GameCard/GameCard';
import './GameList.css';
import useGamesStore from '../../hooks/useGamesStore';

type GameListProps = {
	gameList: Array<Game>
};

const GameList: React.FC<GameListProps> = memo(({ gameList }) => {
	const searchValue = useGamesStore(state => state.searchValue)
	const selectedStorageUnit = useGamesStore(state => state.selectedStorageUnit)
	const consoleFilters = useGamesStore(state => state.consoleFilters)

	const filteredList: Game[] = useMemo(() => {
		const searchValueLowerCase = searchValue.toLowerCase()
		return gameList.filter(item => {
			if (searchValue == '') return consoleFilters.includes(item.console)
			return item.name.toLowerCase().includes(searchValueLowerCase) && consoleFilters.includes(item.console)
		})
	}, [consoleFilters, gameList, searchValue])

	return (<>
		{selectedStorageUnit.size > 0 ?
			<ul role='list' className='game-list grid'>
				{filteredList.map(game => {
					return (
						<GameCard
							key={game.id}
							game={game}
						/>
					)
				})}
			</ul> : <h1>Selecione uma unidade de armazenamento acima para visualizar os jogos</h1>
		}
	</>)
})

export default GameList