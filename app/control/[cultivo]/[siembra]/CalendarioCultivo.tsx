'use client'

import { useState, useEffect } from 'react'
import { createClient } from '@/utils/supabase/client'

const CalendarioCultivo = () => {

  const supabase = createClient()
  const [datos, setDatos] = useState([])

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
    <article className='bg-white  rounded-xl p-4 mt-5 flex flex-col gap-3 shadow-lg'>
      <h3 className='font-semibold text-dark-green'>Calendario de cultivo</h3>
      <div className='flex flex-col gap-2'>
        {
          datos.map((dato, index) => (
            <div key={index}>
              <p className='text-sm'>{dato.descripcion_pendiente}</p>
              <p className='text-sm font-light'>{dato.fecha_todo}</p>
            </div>
          ))
        }
      </div>
      <button className='w-full border-2 bg-light-green border-light-green py-2 rounded-xl text-dark-grey hover:bg-light-green hover:text-dark-green'>Agregar fecha</button>
    </article>
  )
}

export default CalendarioCultivo