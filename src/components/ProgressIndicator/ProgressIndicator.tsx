import useGamesStore from '../../hooks/useGamesStore'
import Button from 'react-bootstrap/Button'

const ProgressIndicator: React.FC = () => {
	const selectedStorageUnit = useGamesStore(state => state.selectedStorageUnit)
	// const totalSize = useGamesStore(state => state.totalSize)
	// const clear = useGamesStore(state => state.clear)

	const { totalSize, clear } = useGamesStore()

	return (
		<>
			<span style={{ padding: '6px' }}>Usado: {totalSize()} de {selectedStorageUnit?.size} Mb</span>
			<Button
				variant='danger'
				onClick={() => clear()}
				disabled={totalSize() == 0}
			>
				Zerar
			</Button>
		</>
	)
}

export default ProgressIndicator