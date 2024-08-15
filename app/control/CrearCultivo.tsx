import { useState } from 'react'
import { useStore } from '@/app/store/useStore'

export default function CrearCultivo() {

    const updateIsModalCultivoOpen = useStore((state) => state.updateIsModalCultivoOpen)
    const isModalCultivoOpen = useStore((state) => state.isModalCultivoOpen)
    const [nombreCultivo, setNombreCultivo] = useState('')

    const handleSubmit = async (e: any) => {
        e.preventDefault();

        try {
            const response = await fetch('/api/cultivos', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    nombre_cultivo: nombreCultivo
                })
            });

            if (!response.ok) {
                throw new Error('Error en la solicitud');
            }

            const data = await response.json();
            updateIsModalCultivoOpen(false)
        } catch (error) {
            console.error('Error al insertar los datos:', error);
        }

        setNombreCultivo('')
        updateIsModalCultivoOpen(false)
    };

    return (
        <>
            {
                isModalCultivoOpen && (
                    <div className=' absolute z-11 flex justify-center items-center w-full h-screen modal animate-in'>
                        <div className='mt-3 flex flex-col gap-3 bg-bg-light-grey shadow-xl p-7 w-11/12 rounded-xl md:w-[600px]'>
                            <h1 className='text-center font-semibold text-lg'>Agregar cultivo</h1>
                            <label className='mb-[-10px]'>Fecha de la siembra</label>
                            <input type="text" placeholder='Ej. Tomate, zanahoria, papa...' className='p-3  rounded-xl'
                                value={nombreCultivo}
                                onChange={(e) => setNombreCultivo(e.target.value)} />

                                <div className='flex w-full gap-2 text-sm font-semibold'>
                                    <button className='py-3 border-2 border-dark-green text-dark-green w-2/5 rounded-xl'
                                        onClick={() => updateIsModalCultivoOpen(false)}
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