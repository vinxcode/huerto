'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link';
import { createClient } from "@/utils/supabase/client";
import { useStore } from '@/app/store/useStore'

const Control = () => {

  const supabase = createClient()
  const updateIdCultivo = useStore((state) => state.updateIdCultivo)
  const [cultivos, setCultivos] = useState([])

  useEffect(() => {
    const getCultivos = async () => {
      const { data: cultivosSupabase } = await supabase.from("cultivos").select();
      setCultivos(cultivosSupabase)
    }
    getCultivos()
  }, [supabase])

  return (
    <section className='flex flex-col w-full items-start py-10 px-7 animate-in'>

      <header className='flex items-center gap-5'>
        <h1 className="text-4xl font-bold ">Control</h1>
      </header>
      <button className='text-center w-full my-3 bg-dark-green text-white px-10 py-3 shadow-xl rounded-xl hover:bg-dark-grey hover:animate-in'>Agregar cultivo</button>
      {
        cultivos && (
          cultivos.map(cultivo => (
            <Link className='bg-white rounded-xl w-full px-10 py-3 shadow-xl cursor-pointer mb-2'
              href={`/control/${cultivo.nombre_cultivo}`} onClick={() => updateIdCultivo(cultivo.id_cultivo)}>
              <h3 className='text-dark-green text-center font-light'>{cultivo.nombre_cultivo}</h3>
            </Link>
          ))
        )
      }
    </section>
  )
}

export default Control