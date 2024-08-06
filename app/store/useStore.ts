import { create } from 'zustand'

type Store = {
    idCultivo: number,
    // newId: number,
    updateIdCultivo: (newId: number) => void
}

export const useStore = create<Store>()((set) => ({
    idCultivo: 1,
    // newId: 0,
    updateIdCultivo: (newId) => set((state) => ({ idCultivo: newId })),
}))