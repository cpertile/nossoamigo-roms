import { ProgressBar } from 'react-bootstrap'
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
			<ProgressBar
				min={0}
				max={selectedStorageUnit.size}
				now={totalSize()}
				style={{ height: 'auto', maxWidth: 'auto' }}
			/>

			<span>{convertMBtoGB(totalSize())} / {convertMBtoGB(selectedStorageUnit?.size)} GB - {selectedGames.length} jogos</span>
		</div >
	)
}

export default ProgressIndicator