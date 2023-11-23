import { useEffect, useState } from 'react'
import useGamesStore from "../../hooks/useGamesStore"
import './GameCard.css'

export type Game = {
	id: string
	img: string
	name: string
	size: number
	console: string
}

type GameCardProps = {
	game: Game
}

const GameCard: React.FC<GameCardProps> = ({ game }) => {
	const { selectedGames } = useGamesStore()
	const [imageUrl, setImageUrl] = useState(`../../../assets/3D/${game.id}.png`)
	const [isChecked, setIsChecked] = useState(selectedGames.find(item => item.id === game.id) ? true : false)
	const { addGame, removeGame, totalSize, selectedStorageUnit } = useGamesStore()

	useEffect(() => {
		setIsChecked(selectedGames.find(item => item.id === game.id) ? true : false)
	}, [selectedGames, game.id])

	function handleClick() {
		if (!isChecked) {
			if (totalSize() + game.size > selectedStorageUnit.size) return
			addGame(game)
			setIsChecked(true)
		}

		if (isChecked) {
			removeGame(game)
			setIsChecked(false)
		}
	}

	function handleStyle() {
		if (isChecked) return 'selected'
		if (game.size > (selectedStorageUnit.size - totalSize())) return 'disabled'
		return ''
	}

	return (
		<li className={`gamecard ${handleStyle()}`} onClick={handleClick}>
			<h5>{game.name}</h5>
			<img
				src={imageUrl}
				className='game-cover'
				loading='lazy'
				onError={() => setImageUrl(`../../../assets/2D/${game.id}.png`)}
			/>
			<div className='game-details'>
				<small>{game.size} Mb</small>
				<small>{game.console}</small>
			</div>
			<input
				name={game.id}
				type='checkbox'
				readOnly
				checked={isChecked}
				style={{ position: 'absolute', right: 0, bottom: 0 }}
			/>
		</li>
	)
}

export default GameCard