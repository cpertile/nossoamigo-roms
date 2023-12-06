import { create } from 'zustand'
import { Game } from '../components/GameCard/GameCard'
import { StorageUnit } from '../components/StorageUnitSelector/StorageUnitSelector'

export interface SortingOptions {
	type: 'Alpha' | 'Size'
	order: 'ASC' | 'DESC'
}

interface SearchInput {
	searchValue: string
	setSearchValue: (value: string) => void
}

interface ConsoleFilters {
	consoleFilters: string[]
	setConsoleFilters: (filters: string[]) => void
}

interface SelectedSortingOptions {
	sortingOptions: SortingOptions
	setSortingOptions: (options: SortingOptions) => void
}

interface StorageUnitSelector {
	selectedStorageUnit: StorageUnit | Record<string, never>
	changeStorageUnit: (storageUnit: StorageUnit) => void
}

interface SelectedGames {
	selectedGames: Game[]
	addGame: (game: Game) => void
	removeGame: (game: Game) => void
	totalSize: () => number
	clear: () => void
}

type GamesStore = SearchInput & ConsoleFilters & SelectedSortingOptions & StorageUnitSelector & SelectedGames

const useGamesStore = create<GamesStore>((set, get) => ({
	searchValue: '',
	setSearchValue: (value: string) => set(() => ({ searchValue: value })),

	consoleFilters: ['wii'],
	setConsoleFilters: (filters: string[]) => set(() => ({ consoleFilters: filters })),

	sortingOptions: { type: 'Alpha', order: 'ASC' },
	setSortingOptions: (options: SortingOptions) => set(() => ({ sortingOptions: options })),

	selectedStorageUnit: {},
	changeStorageUnit: (storageUnit) => set((state) => {
		if (storageUnit.size < get().totalSize()) {
			alert('Nesta unidade não cabem os jogos já selecionados, revertendo...')
			return { selectedStorageUnit: state.selectedStorageUnit }
		}
		return {
			selectedStorageUnit: storageUnit
		}
	}),
	
	selectedGames: [],
	addGame: (game: Game) => set((state) => ({
		selectedGames: [...state.selectedGames, game]
	})),
	removeGame: (game: Game) => set(state => ({ selectedGames: state.selectedGames.filter(item => item.id !== game.id) })),
	totalSize: () => {
		return parseFloat(get().selectedGames.reduce((acc: number, item: Game) => acc += item.size, 0).toFixed(2))
	},
	clear: () => set(() => ({ selectedGames: [] })),
}))

export default useGamesStore