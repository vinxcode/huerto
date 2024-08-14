import { create } from 'zustand'

type Store = {
    idCultivo: number,
    idSiembra: number,
    isModalFechaOpen: boolean,
    isModalSiembraOpen: boolean,
    updateIdCultivo: (newId: number) => void,
    updateIdSiembra: (newId: number) => void,
    updateIsModalFechaOpen: (isOpen: boolean) => void,
    updateIsModalSiembraOpen: (isOpen: boolean) => void
}

export const useStore = create<Store>()((set) => ({
    idCultivo: 1,
    idSiembra: 1,
    isModalFechaOpen: false,
    isModalSiembraOpen: false,
    updateIdCultivo: (newId) => set((state) => ({ idCultivo: newId })),
    updateIdSiembra: (newId) => set((state) => ({ idSiembra: newId })),
    updateIsModalFechaOpen: (isOpen) => set((state) => ({ isModalFechaOpen: isOpen })),
    updateIsModalSiembraOpen: (isOpen) => set((state) => ({ isModalSiembraOpen: isOpen })),
}))