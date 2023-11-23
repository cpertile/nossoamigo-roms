import useGamesStore from '../../hooks/useGamesStore'
import Button from '../Button/Button'

export interface StorageUnit {
	id: number
	name: string
	size: number
}

const storageUnits: StorageUnit[] = [
	{
		id: 1,
		name: 'Pendrive 64 Gb (57 utilizáveis)',
		size: 57620
	},
	{
		id: 2,
		name: 'HD 500 Gb (465 utilizáveis)',
		size: 465760
	},
	{
		id: 3,
		name: 'HD 1 Tb (931 utilizáveis)',
		size: 931000
	}
]

const StorageUnitSelector: React.FC = () => {
	const selectedStorageUnit = useGamesStore(state => state.selectedStorageUnit)
	const changeStorageUnit = useGamesStore(state => state.changeStorageUnit)
	const totalSize = useGamesStore(state => state.totalSize)
	const clear = useGamesStore(state => state.clear)

	return (<>
		<span style={{ display: 'flex', gap: '4px', justifyContent: 'space-around', margin: '6px' }}>
			<Button onClick={() => changeStorageUnit(storageUnits[0])}>Pendrive 64 Gb</Button>
			<Button onClick={() => changeStorageUnit(storageUnits[1])}>HD 500 Gb</Button>
			<Button onClick={() => changeStorageUnit(storageUnits[2])}>HD 1 Tb</Button>
		</span>
		<span style={{ padding: '6px' }}>Usado: {totalSize()} de {selectedStorageUnit?.size} Gb</span>
		<Button onClick={() => clear()}>Zerar</Button>
	</>)
}
export default StorageUnitSelector