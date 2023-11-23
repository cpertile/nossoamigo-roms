import { ChangeEvent, InputHTMLAttributes, useCallback } from 'react';
import useGamesStore from '../../hooks/useGamesStore';
import './SearchInput.css';

const SearchInput: React.FC<InputHTMLAttributes<HTMLInputElement>> = ({ ...props }) => {
	const searchValue = useGamesStore(state => state.searchValue)
	const setSearchValue = useGamesStore(state => state.setSearchValue)

	const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
		setSearchValue(e.target.value)
	}, [setSearchValue])

	return (
		<input className='input' {...props} value={searchValue} onChange={handleChange} />
	)
}

export default SearchInput