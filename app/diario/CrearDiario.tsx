"use client"

import { useState } from 'react'
import { useStore } from '@/app/store/useStore'

export default function CrearDiario() {
    const updateIsModalDiarioOpen = useStore((state) => state.updateIsModalDiarioOpen)
    const isModalDiarioOpen = useStore((state) => state.isModalDiarioOpen)
    const [notas, setNotas] = useState('')
    const [semillas, setSemillas] = useState(0)
    const [fecha, setFecha] = useState<string>()
    const [isNotasDisabled, setIsNotasDisabled] = useState(true)
    const [text, setText] = useState(false)
    const [isNota, setIsNota] = useState(false)

    const hoy = new Date()
    const handleSubmit = async (e: any) => {
        e.preventDefault();

        try {
            const response = await fetch('/api/diarios', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    notas: notas,
                    fecha: hoy.toDateString()
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

        setNotas('')
        updateIsModalDiarioOpen(false)
        setSemillas(0)
        setText(false)
    };

    const handleCancelar = () => {
        updateIsModalDiarioOpen(false)
        setText(false)
    }

    const handleGuardar = () => {
        // Manera provisional de actualizar el estado porque por alguna razon no se rerenderiza como
        // normalmente lo haria
        setTimeout(() => {
            setText(false);
        }, 10)
        setIsNota(true)
    }

    const handleEditNota = () => {
        setIsNota(false)
        setText(true)
    }

    return (
        <>
            {
                isModalDiarioOpen && (
                    <div className=' absolute z-10 flex justify-center items-center w-full h-screen modal'>
                        <div className=' flex flex-col gap-3 bg-bg-light-grey shadow-xl p-7 w-full  md:rounded-xl md:w-[600px] h-screen md:h-auto animate-in'>
                            <div className='h-full flex flex-col gap-3'>
                                <h1 className='text-center font-semibold text-lg'>Actualizar diario</h1>
                                <p className='text-center mt-[-12px]'>{hoy.toDateString()}</p>


                                <div className='flex flex-col bg-white px-4  py-3 text-sm rounded-xl shadow-lg'
                                    onClick={() => setText(true)}>
                                    <p className={`${text ? "cursor-click" : "cursor-text"} text-center md:text-left`}>Agregar notas del dia</p>
                                    {
                                        isNota && (
                                            <div onClick={handleEditNota}
                                                className='p-3 mt-2 focus:border-white focus:ring focus:ring-white focus:outline-none bg-white rounded-xl'>
                                                {notas}
                                            </div>
                                        )
                                    }
                                    {
                                        text && (
                                            <div>
                                                <textarea placeholder='Notas del dia'
                                                    className='p-3 mt-2 focus:border-white focus:ring focus:ring-white focus:outline-none bg-white rounded-xl w-full'
                                                    rows={8}
                                                    value={notas}
                                                    onChange={(e) => setNotas(e.target.value)}
                                                >
                                                </textarea>
                                                <div className='flex justify-end px-7' >
                                                    <button className='flex items-center'
                                                        onClick={handleGuardar}
                                                    ><span className="icon-[lets-icons--done] text-lg"></span>Guardar</button>
                                                </div>
                                            </div>
                                        )
                                    }

                                </div>

                            </div>

                            <div className='flex w-full justify-center gap-2 text-sm font-semibold'>
                                <button className='py-3 border-2 border-dark-green text-dark-green w-2/5 rounded-xl'
                                    onClick={handleCancelar}
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
