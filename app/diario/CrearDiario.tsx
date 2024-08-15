"use client"

import { useState } from 'react'
import { useStore } from '@/app/store/useStore'

export default function CrearDiario() {
    const updateIsModalDiarioOpen = useStore((state) => state.updateIsModalDiarioOpen)
    const isModalDiarioOpen = useStore((state) => state.isModalDiarioOpen)
    const [fechaSiembra, setFechaSiembra] = useState('')
    const [semillas, setSemillas] = useState(0)

    const handleSubmit = async (e: any) => {
        e.preventDefault();

        try {
            const response = await fetch('/api/diarios', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({

                })
            });

            if (!response.ok) {
                throw new Error('Error en la solicitud');
            }

            const data = await response.json();
            updateIsModalDiarioOpen(false)
        } catch (error) {
            console.error('Error al insertar los datos:', error);
        }

        setFechaSiembra('')
        updateIsModalDiarioOpen(false)
        setSemillas(0)
    };

    return (
        <>
            {
                isModalDiarioOpen && (
                    <div className=' absolute z-10 flex justify-center items-center w-full h-screen modal animate-in'>
                        <div className=' flex flex-col gap-3 bg-bg-light-grey shadow-xl p-7 w-11/12 rounded-xl md:w-[600px] h-screen'>
                            <h1 className='text-center font-semibold text-lg'>Agregar nueva siembra</h1>
                            <label className='mb-[-10px]'>Fecha de la siembra</label>
                            <textarea placeholder='Ej. 30 de junio, 21 de julio, etc' className='p-3  rounded-xl'
                                value={fechaSiembra}
                                onChange={(e) => setFechaSiembra(e.target.value)}>
                            </textarea>

                            <div className='flex w-full gap-2 text-sm font-semibold'>
                                <button className='py-3 border-2 border-dark-green text-dark-green w-2/5 rounded-xl'
                                    onClick={() => updateIsModalDiarioOpen(false)}
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
