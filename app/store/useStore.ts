import { create } from 'zustand'

type Store = {
    idCultivo: number,
    idSiembra: number,
    // newId: number,
    updateIdCultivo: (newId: number) => void,
    updateIdSiembra: (newId: number) => void
}

export const useStore = create<Store>()((set) => ({
    idCultivo: 1,
    idSiembra: 1,
    updateIdCultivo: (newId) => set((state) => ({ idCultivo: newId })),
    updateIdSiembra: (newId) => set((state) => ({ idSiembra: newId })),
}))