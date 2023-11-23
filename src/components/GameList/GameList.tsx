import GameCard, { Game } from '../GameCard/GameCard';
import './GameList.css';

type GameListProps = {
	filteredList: Array<Game>
};

// TODO: implement 'react-window' to try and solve performance problems

const GameList: React.FC<GameListProps> = ({ filteredList }) => {
	return (
		<ul role='list' className='game-list grid'>
			{filteredList.map(game => {
				return (
					<GameCard
						key={game.id}
						game={game}
					/>
				)
			})}
		</ul>
	)
}

export default GameList