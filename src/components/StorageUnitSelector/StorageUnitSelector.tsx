import { useState } from 'react'
import DropDown from 'react-bootstrap/Dropdown'
import DropDownButton from 'react-bootstrap/DropdownButton'
import useGamesStore from '../../hooks/useGamesStore'

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
	// Subscribing to changes on "selectedGames"
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const selectedGames = useGamesStore(state => state.selectedGames)
	const changeStorageUnit = useGamesStore(state => state.changeStorageUnit)
	const [title, setTitle] = useState('Selecione uma unidade de armazenamento: ')

	function handleSelect(e: any) {
		e.preventDefault()
		setTitle(e.target.innerText)
		changeStorageUnit(storageUnits[e.target.name])
	}

	return (<>
		<DropDownButton
			variant='light'
			title={title}
			drop='down-centered'
		>
			<DropDown.Item as='button' name='0' onClick={handleSelect}>{storageUnits[0].name}</DropDown.Item>
			<DropDown.Item as='button' name='1' onClick={handleSelect}>{storageUnits[1].name}</DropDown.Item>
			<DropDown.Item as='button' name='2' onClick={handleSelect}>{storageUnits[2].name}</DropDown.Item>
		</DropDownButton>
	</>)
}
export default StorageUnitSelector