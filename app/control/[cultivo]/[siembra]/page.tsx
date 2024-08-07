'use client'

import { useParams, usePathname } from 'next/navigation'
import { useStore } from '@/app/store/useStore'
import { useEffect, useState } from 'react'
import { createClient } from '@/utils/supabase/client'
import Link from 'next/link'

const detalleSiembra = () => {

  const supabase = createClient()

  const pathname = usePathname()
  const { siembra } = useParams()
  const [datos, setDatos] = useState([])

  useEffect(() => {
    const getSiembras = async () => {
      const { data, error } = await supabase
        .from('siembras')
        .select()
        .eq('id_siembra', siembra)
      console.log(data)
      setDatos(data)
    }
    getSiembras()
  }, [supabase])

  return (
      <>
      {/* <button className='text-center w-11/12 my-3 bg-dark-green text-white px-10 py-3 shadow-xl rounded-xl hover:bg-dark-grey  hover:animate-in'>Agregar siembra</button> */}

      {
        datos.map((dato, index) => (
          <section className='w-full flex flex-col items-center' key={index}>
            <header className='bg-dark-green h-[120px] w-full py-10 px-7 rounded-b-3xl'>
              <h1 className='text-4xl text-light-grey font-bold'>{dato.fecha_siembra}</h1>
              <p></p>
            </header>
          </section>
        ))
      }
  </>
  )
}

export default detalleSiembra