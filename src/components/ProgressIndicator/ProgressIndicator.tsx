import useGamesStore from '../../hooks/useGamesStore'
import './ProgressIndicator.css'

function convertMBtoGB(mb: number): number {
	return parseFloat((mb / 1000).toFixed(2))
}

const ProgressIndicator: React.FC = () => {
	const selectedStorageUnit = useGamesStore(state => state.selectedStorageUnit)
	const selectedGames = useGamesStore(state => state.selectedGames)
	const totalSize = useGamesStore(state => state.totalSize)

	return (
		<div id='progress-indicator' className='progress-indicator'>
			<div className="fundo">
				<span className="texto">{`${convertMBtoGB(totalSize())} / ${convertMBtoGB(selectedStorageUnit?.size)} GB (${selectedGames.length} jogos)`}</span>
				<div className="barra" style={{ width: `${((totalSize() / selectedStorageUnit?.size) * 100).toFixed(2)}%` }} />
			</div>
		</div >
	)
}

export default ProgressIndicator