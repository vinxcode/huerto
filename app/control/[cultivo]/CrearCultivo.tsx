import { useState } from 'react'
import { useStore } from '@/app/store/useStore'

export default function CrearCultivo() {

    const updateIsModalSiembraOpen = useStore((state) => state.updateIsModalSiembraOpen)
    const isModalSiembraOpen = useStore((state) => state.isModalSiembraOpen)
    const [nombreSiembra, setNombreSiembra] = useState('')

    const handleSubmit = async (e: any) => {
        e.preventDefault();

        try {
            const response = await fetch('/api/siembras', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    nombre_siembra: nombreSiembra
                })
            });

            if (!response.ok) {
                throw new Error('Error en la solicitud');
            }

            const data = await response.json();
            updateIsModalSiembraOpen(false)
        } catch (error) {
            console.error('Error al insertar los datos:', error);
        }

        setNombreSiembra('')
    };

    return (
        <>
            {
                isModalSiembraOpen && (
                    <div className=' absolute z-11 flex justify-center items-center w-full h-screen modal animate-in'>
                        <div className='mt-3 flex flex-col gap-3 bg-light-grey shadow-xl p-7 w-11/12 rounded-xl md:w-[600px]'>
                            <h1 className='text-center font-semibold text-lg'>Agregar nueva siembra</h1>
                            <label className='mb-[-10px]'>Fecha de la siembra</label>
                            <input type="text" placeholder='Ej. 30 de junio, 21 de julio, etc' className='p-3  rounded-xl'
                                value={nombreSiembra}
                                onChange={(e) => setNombreSiembra(e.target.value)} />
                            <div className='flex w-full gap-2 text-sm font-semibold'>
                                <button className='py-3 border-2 border-dark-green text-dark-green w-2/5 rounded-xl'
                                    onClick={() => updateIsModalSiembraOpen(false)}
                                >Cancelar</button>
                                <button className='py-3 bg-dark-green text-white w-3/5 rounded-xl'
                                    onClick={handleSubmit}
                                >Agregar</button>
                            </div>
                        </div>
                    </div>
                )
            }
        </>
    )
}