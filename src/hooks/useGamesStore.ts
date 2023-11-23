import { create } from 'zustand'
import { Game } from '../components/GameCard/GameCard'
import { StorageUnit } from '../App'

type GamesStore = {
	selectedGames: Game[]
	addGame: (game: Game) => void
	removeGame: (game: Game) => void
	totalSize: () => number
	clear: () => void
	selectedStorageUnit: StorageUnit | Record<string, never>
	changeStorageUnit: (storageUnit: StorageUnit) => void
}

const useGamesStore = create<GamesStore>((set, get) => ({
	selectedGames: [],
	addGame: (game: Game) => set((state) => ({
		selectedGames: [...state.selectedGames, game]
	})),
	removeGame: (game: Game) => set(state => ({ selectedGames: state.selectedGames.filter(item => item.id !== game.id) })),
	totalSize: () => {
		return get().selectedGames.reduce((acc: number, item: Game) => acc += item.size, 0)
	},
	clear: () => set(() => ({ selectedGames: [] })),
	selectedStorageUnit: {},
	changeStorageUnit: (storageUnit) => set((state) => {
		if (storageUnit.size < get().totalSize()) {
			alert('Nesta unidade não cabem os jogos já selecionados, revertendo...')
			return { selectedStorageUnit: state.selectedStorageUnit }
		}
		return {
			selectedStorageUnit: storageUnit
		}
	})
}))

export default useGamesStore