'use client'

import { useParams, usePathname } from 'next/navigation'
import { useStore } from '@/app/store/useStore'
import { useEffect, useState } from 'react'
import { createClient } from '@/utils/supabase/client'
import Link from 'next/link'

const Siembra = () => {

    const supabase = createClient()

    const pathname = usePathname()
    const { cultivo } = useParams()
    const idCultivo = useStore((state) => state.idCultivo)
    const uodateIdSiembra = useStore((state) => state.updateIdSiembra)
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
        <section className='w-full flex flex-col items-center'>
            <header className='bg-dark-green h-[120px] w-full py-10 px-7 rounded-b-3xl'>
                <h1 className='text-4xl text-light-grey font-bold'>{cultivo}</h1>
                {/* <h1>{pathname}</h1> */}
            </header>
            <button className='text-center w-11/12 my-3 bg-dark-green text-white px-10 py-3 shadow-xl rounded-xl hover:bg-dark-grey  hover:animate-in'>Agregar siembra</button>
            <div className='grid grid-cols-2 p-3' >
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
            </div>
        </section>
    )
}

export default Siembra