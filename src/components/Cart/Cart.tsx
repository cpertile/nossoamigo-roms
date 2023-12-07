import useGamesStore from '../../hooks/useGamesStore';
import ProgressIndicator from '../ProgressIndicator/ProgressIndicator';
import StorageUnitSelector from '../StorageUnitSelector/StorageUnitSelector';
import './Cart.css';

const Cart: React.FC = () => {
	const selectedStorageUnit = useGamesStore(state => state.selectedStorageUnit)
	const showOptions = Object.keys(selectedStorageUnit).length > 0

	return (
		<div id='cart' className='cart'>
			<StorageUnitSelector />
			{/* {showOptions &&
				<Button
					size='sm'
					variant='danger'
					onClick={() => clear()}
					disabled={totalSize() == 0}
				>
					Zerar
				</Button>
			} */}
			{showOptions && <ProgressIndicator />}
		</div>)
}

export default Cart