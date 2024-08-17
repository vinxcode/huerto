'use client'

type Cultivos = {
  nombre_cultivo: string
}

type EstadoCultivos = {
  id_estado_cultivo: number,
  nombre_estado_cultivo: string
}

type Siembra = {
  id_siembra: number,
  fecha_siembra: string,
  semillas_a_germinar: number,
  cultivos: Cultivos,
  estado_cultivos: EstadoCultivos
}

import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import { useStore } from '@/app/store/useStore'
import { createClient } from '@/utils/supabase/client'
import CalendarioCultivo from './CalendarioCultivo'
import CrearFecha from './CrearFecha'
import Link from 'next/link'

const detalleSiembra = () => {

  const supabase = createClient()
  
  const { siembra } = useParams()
  
  const [datos, setDatos] = useState<Siembra[]>([])
  const updateIsModalFechaOpen = useStore((state) => state.updateIsModalFechaOpen)
  const isModalFechaOpen = useStore((state) => state.isModalFechaOpen)

  useEffect(() => {
    const getSiembras = async () => {
      const { data, error } = await supabase
        .from('siembras')
        .select(`
          id_siembra,
          fecha_siembra,
          semillas_a_germinar,
          cultivos (
            nombre_cultivo
          ),
          estado_cultivos(
            id_estado_cultivo,
            nombre_estado_cultivo
          )

        `)
        .eq('id_siembra', siembra)
      if (error) {
        console.error('Error fetching siembras:', error);
      } else if (data) {
        setDatos(data as any);
      } else {
        console.error('No data found');
      }
    }
    getSiembras()
  }, [supabase, siembra, isModalFechaOpen])

  return (
    <>

      {
        datos.map((dato, index) => (
          <section className='w-full flex flex-col items-center' key={index}>
            <header className='flex items-center gap-5 bg-dark-green h-[120px] w-full py-10 px-7 rounded-b-3xl'>
              <Link href={`../${dato.cultivos.nombre_cultivo}`} className="icon-[ion--md-arrow-round-back] text-light-grey text-3xl"></Link>
              <div className=''>
                <h1 className='text-4xl text-light-grey font-bold'>{dato.cultivos.nombre_cultivo}</h1>
                <p className='text-xl text-light-grey'>{dato.fecha_siembra}</p>
              </div>
            </header>
            <div className='flex flex-col p-4 w-full'>
              <article className='flex flex-col text-dark-grey bg-white rounded-xl shadow-lg p-5 w-full'>
                <p className='text-sm'>Fecha de puesta de germinacion: <span className='font-semibold text-dark-green'>{dato.fecha_siembra}</span></p>
                <p className='text-sm'>Semillas a germinar: <span className='font-semibold text-dark-green'>{dato.semillas_a_germinar}</span></p>
                <p className='text-sm'>Estado de los cultivos: <span className='font-semibold text-dark-green'>{dato.estado_cultivos.nombre_estado_cultivo}</span></p>
              </article>
              <CalendarioCultivo />
            </div>
          </section>

        ))
      }

      <CrearFecha />
    </>
  )
}

export default detalleSiembra