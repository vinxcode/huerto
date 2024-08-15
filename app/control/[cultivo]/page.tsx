'use client'

import { useParams, usePathname } from 'next/navigation'
import { useStore } from '@/app/store/useStore'
import { useEffect, useState } from 'react'
import { createClient } from '@/utils/supabase/client'
import Link from 'next/link'
import CrearSiembra from './CrearSiembra'

const Cultivo = () => {

    const supabase = createClient()

    const pathname = usePathname()
    const { cultivo } = useParams()
    const idCultivo = useStore((state) => state.idCultivo)
    const uodateIdSiembra = useStore((state) => state.updateIdSiembra)
    const [siembras, setSiembras] = useState([])
    const updateIsModalSiembraOpen = useStore((state) => state.updateIsModalSiembraOpen)
    const isModalSiembraOpen = useStore((state) => state.isModalSiembraOpen)

    useEffect(() => {
        const getSiembras = async () => {
            const { data, error } = await supabase
                .from('siembras')
                .select()
                .eq('cultivo', idCultivo)
            setSiembras(data)
        }
        getSiembras()
    }, [supabase, isModalSiembraOpen])

    return (
        <>
            <header className='bg-dark-green h-[120px] w-full py-10 px-7 rounded-b-3xl flex gap-5 items-center'>
                <Link href={'../control'}
                    className="icon-[ion--md-arrow-round-back] text-light-grey text-3xl"></Link>
                <div className='flex flex-col'>
                    <h1 className='text-4xl text-light-grey font-bold'>{cultivo}</h1>
                    <p className='text-light-grey text-lg '>Siembras ordenadas por fecha</p>
                </div>
            </header>

            <div className='grid grid-cols-2 p-3 w-11/12 text-sm' >
                {
                    siembras && (
                        siembras.map((item, index) => (

                            <Link className='h-20 bg-light-green p-5 rounded-xl shadow-lg m-2 cursor-pointer hover:bg-light-grey' key={index}
                                href={`./${cultivo}/${item.id_siembra}`} onClick={() => updateIdSiembra(item.id_siembra)}>
                                <p className='text-dark-grey'>{item.fecha_siembra}</p>
                            </Link>

                        ))
                    )
                }
                <button onClick={() => updateIsModalSiembraOpen(true)}
                    className='flex items-center gap-2  h-20 bg-light-green p-5 rounded-xl shadow-lg m-2 cursor-pointer hover:bg-light-grey'>
                    <span className="icon-[fluent-mdl2--add] text-lg"></span>
                    Agregar
                </button>
            </div>
            className='w-full flex flex-col items-center'
            <CrearSiembra />
        </ >
    )
}

export default Cultivo