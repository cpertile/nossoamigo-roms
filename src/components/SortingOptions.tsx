import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import useGamesStore from '../hooks/useGamesStore';

const SortingOptions: React.FC = () => {
	const sortingOptions = useGamesStore(state => state.sortingOptions)
	const setSortingOptions = useGamesStore(state => state.setSortingOptions)

	const isAlphaAsc = sortingOptions.type === 'Alpha' && sortingOptions.order === 'ASC'
	const isAlphaDesc = sortingOptions.type === 'Alpha' && sortingOptions.order === 'DESC'
	const isSizeAsc = sortingOptions.type === 'Size' && sortingOptions.order === 'ASC'
	const isSizeDesc = sortingOptions.type === 'Size' && sortingOptions.order === 'DESC'

	return (
		<>
			<ButtonGroup className='me-2'>
				<Button active={isAlphaAsc} variant='outline-light' onClick={() => setSortingOptions({ type: 'Alpha', order: 'ASC' })}>A-Z</Button>
				<Button active={isAlphaDesc} variant='outline-light' onClick={() => setSortingOptions({ type: 'Alpha', order: 'DESC' })}>Z-A</Button>
			</ButtonGroup>
			<ButtonGroup>
				<Button active={isSizeAsc} variant='outline-light' onClick={() => setSortingOptions({ type: 'Size', order: 'ASC' })}>Mb ⬇️</Button>
				<Button active={isSizeDesc} variant='outline-light' onClick={() => setSortingOptions({ type: 'Size', order: 'DESC' })}>Mb ⬆️</Button>
			</ButtonGroup>
		</>
	)
}

export default SortingOptions;