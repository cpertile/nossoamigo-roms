import { PropsWithChildren } from 'react'
import useGamesStore from '../hooks/useGamesStore'

const StickyHeader: React.FC<PropsWithChildren> = ({ children }) => {
	const selectedStorageUnit = useGamesStore(state => state.selectedStorageUnit)

	return (
		selectedStorageUnit.size > 0 ?
			<div style={{
				position: 'sticky',
				top: 0,
				padding: '4px',
				zIndex: 10,
				backgroundColor: '#0B88FF',
			}}>
				{children}
			</div>
			: <></>
	)
}

export default StickyHeader