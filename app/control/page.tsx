'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link';
import { createClient } from "@/utils/supabase/client";
import { useStore } from '@/app/store/useStore'
import CrearCultivo from './CrearCultivo';

const Control = () => {

  const supabase = createClient()
  const updateIdCultivo = useStore((state) => state.updateIdCultivo)
  const updateIsModalCultivoOpen = useStore((state) => state.updateIsModalCultivoOpen)
  const isModalCultivoOpen = useStore((state) => state.isModalCultivoOpen)
  const [cultivos, setCultivos] = useState([])

  useEffect(() => {
    const getCultivos = async () => {
      const { data: cultivosSupabase } = await supabase.from("cultivos").select();
      setCultivos(cultivosSupabase)
    }
    getCultivos()
  }, [supabase, isModalCultivoOpen])

  return (
    < >

      <header className='flex items-center gap-5 px-7 mt-10'>
        <h1 className="text-4xl font-bold ">Control</h1>
      </header>
      <button className='text-center w-11/12 my-3 bg-dark-green text-white px-10 py-3 shadow-xl rounded-xl hover:bg-dark-grey hover:animate-in'
      onClick={() =>updateIsModalCultivoOpen(true)}
      >Agregar cultivo</button>
      {
        cultivos && (
          cultivos.map(cultivo => (
            <Link className='bg-white rounded-xl w-11/12 px-10 py-3 shadow-xl cursor-pointer mb-2'
              href={`/control/${cultivo.nombre_cultivo}`} onClick={() => updateIdCultivo(cultivo.id_cultivo)}>
              <h3 className='text-dark-green text-center font-light'>{cultivo.nombre_cultivo}</h3>
            </Link>
          ))
        )
      }
      <CrearCultivo />
    </>
  )
}

export default Control