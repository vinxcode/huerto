'use client'

import { useParams } from 'next/navigation'
import { useStore } from '@/app/store/useStore'
import { useEffect, useState } from 'react'
import { createClient } from '@/utils/supabase/client'

const Siembra = () => {

    const supabase = createClient()

    const { siembra } = useParams()
    const idCultivo = useStore((state) => state.idCultivo)
    const [siembras, setSiembras] = useState([])

    useEffect(() => {
        const getSiembras = async () => {
            const { data, error } = await supabase
                .from('siembras')
                .select()
                .eq('cultivo', idCultivo)
            setSiembras(data)
        }
        getSiembras()
    }, [supabase])

    return (
        <section className='w-full '>
            <header className='bg-dark-green h-[120px] w-full py-10 px-7 rounded-b-3xl'>
                <h1 className='text-4xl text-light-grey font-bold'>{siembra}</h1>
            </header>
            <div className='grid grid-cols-2 p-3' >
                {
                    siembras && (
                        siembras.map((siembra, index) => (

                            <a className='h-20 bg-light-green p-5 rounded-xl shadow-lg m-2 cursor-pointer hover:bg-light-grey' key={index}>
                                <p className='text-dark-grey'>{siembra.fecha_siembra}</p>
                            </a>

                        ))
                    )
                }
            </div>
        </section>
    )
}

export default Siembra