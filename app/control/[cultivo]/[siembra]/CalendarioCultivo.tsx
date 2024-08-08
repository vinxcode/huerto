'use client'

import { useState, useEffect } from 'react'
import { createClient } from '@/utils/supabase/client'

const CalendarioCultivo = () => {

  const supabase = createClient()
  const [datos, setDatos] = useState([])
  const [modalIsOpen, setModalISOpen] = useState(false)

  useEffect(() => {
    const getTodosSiembra = async () => {
      const { data, error } = await supabase
        .from('todos_siembra')
        .select(`
        id_todo_siembra,
        descripcion_pendiente,
        fecha_todo,
        is_completed`)
        .eq('siembra', 1)
      setDatos(data)
    }
    getTodosSiembra()
  }, [supabase])

  return (
    <article className='bg-white  rounded-xl p-5 mt-5 flex flex-col gap-3 shadow-lg'>
      <h3 className='font-semibold text-dark-green'>Calendario de cultivo</h3>
      <div className='flex flex-col gap-2'>
        {
          datos.map((dato, index) => (
            <div key={index} className='flex justify-between items-center z-0'>
              <div>
                <p className='text-sm'>{dato.descripcion_pendiente}</p>
                <p className='text-sm font-light'>{dato.fecha_todo}</p>
              </div>
              {
                dato.is_completed
                  ? <span className="icon-[material-symbols--check-box-rounded] text-2xl"></span>
                  : <span className="icon-[material-symbols--check-box-outline-blank] text-2xl"></span>
              }

            </div>
          ))
        }

        {
          modalIsOpen &&
          (
            <div className='z-10 mt-3 flex flex-col gap-2'>
              <p className='text-center font-semibold text-sm'>Agregar nueva fecha importante</p>
              <div className='flex w-full gap-2 text-sm font-semibold'>
                <button className='py-3 border-2 border-dark-green text-dark-green w-1/2 rounded-xl'
                  onClick={() => setModalISOpen(false)}
                >Cancelar</button>
                <button className='py-3 bg-dark-green text-white w-1/2 rounded-xl'
                  onClick={() => setModalISOpen(false)}
                >Agregar</button>
              </div>
            </div>
          )
        }
      </div>
      <button className='w-full border-2 font-semibold bg-light-green border-light-green py-2 rounded-xl text-dark-grey hover:bg-light-green hover:text-dark-green'
        onClick={() => setModalISOpen(true)}
      >Agregar fecha</button>
    </article>
  )
}

export default CalendarioCultivo