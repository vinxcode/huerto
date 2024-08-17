"use client"

import { useEffect, useState } from 'react'
import { createClient } from "@/utils/supabase/client";
import CrearDiario from './CrearDiario';
import { useStore } from '@/app/store/useStore'

type Diario = {
    id_diario: number,
    notas: string,
    fecha: string
}

const Diario = () => {

    const [listaDiarios, setListaDiarios] = useState<Diario[]>([])
    const updateIsModalDiarioOpen = useStore((state) => state.updateIsModalDiarioOpen)
    const isModalDiarioOpen = useStore((state) => state.isModalDiarioOpen)

    const supabase = createClient();

    useEffect(() => {
        const getDiarios = async () => {
            const { data: diarios } = await supabase
                .from('diarios')
                .select()
            setListaDiarios(diarios as Diario[])
        }
        getDiarios()
    }, [supabase, isModalDiarioOpen])

    return (
        <>
            <section className='flex flex-col w-full items-start py-10 px-7 animate-in' >
                <h1 className="text-4xl font-bold ">Diario</h1>
                <button className='text-center w-full my-3 bg-dark-green text-white px-10 py-3 rounded-xl shadow-lg hover:bg-dark-grey hover:animate-in'
                    onClick={() => updateIsModalDiarioOpen(true)}
                >Actualizar diario</button>
                {
                    listaDiarios && (
                        listaDiarios.map(diario => (
                            <a className='text-sm flex flex-col gap-1 bg-white p-4 rounded-xl font-light mb-2 w-full shadow-lg'>
                                <p className='text-dark-green font-semibold'>{diario.fecha}</p>
                                <p>{diario.notas}</p>
                            </a>
                        ))
                    )
                }
            </section>

            <CrearDiario />
        </>
    )
}

export default Diario