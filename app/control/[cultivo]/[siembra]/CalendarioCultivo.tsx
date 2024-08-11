'use client'

import { useState, useEffect } from 'react'
import { createClient } from '@/utils/supabase/client'
import { useStore } from '@/app/store/useStore'
import { useParams } from 'next/navigation'

const CalendarioCultivo = () => {

  const supabase = createClient()
  const [datos, setDatos] = useState([])
  const [modalIsOpen, setModalISOpen] = useState(false)
  const updateIsModalFechaOpen = useStore((state) => state.updateIsModalFechaOpen)
  const isModalFechaOpen = useStore((state) => state.isModalFechaOpen)

  const { siembra } = useParams()

  useEffect(() => {
    const getTodosSiembra = async () => {
      const { data, error } = await supabase
        .from('todos_siembra')
        .select(`
        id_todo_siembra,
        descripcion_pendiente,
        fecha_todo,
        is_completed`)
        .eq('siembra', siembra)
      setDatos(data)
    }
    getTodosSiembra()
  }, [supabase, isModalFechaOpen])

  const deleteTodo = async (e: any) => {
    alert(`Deleting ${e}`)
    try {
      const response = await fetch('/api/newTodoSiembra', {
        method: 'ST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          descripcion_pendiente: todoSiembra,
          fecha_todo: fechaSiembra,
          siembra: siembra
        })
      });

      if (!response.ok) {
        throw new Error('Error en la solicitud');
      }

      const data = await response.json();
      updateIsModalFechaOpen(false)
    } catch (error) {
      console.error('Error al insertar los datos:', error);
    }
  }

  return (
    <article className='bg-white  rounded-xl p-5 mt-5 flex flex-col gap-3 shadow-lg'>
      <h3 className='font-semibold text-dark-green'>Calendario de cultivo</h3>
      <div className='flex flex-col gap-2'>
        {
          datos.map((dato, index) => (
            <div key={index} className='flex justify-between items-center z-0 px-4 py-1 rounded-xl'>
              <div className='flex items-center gap-2'>
                <div>
                  {
                    dato.is_completed
                      ? <span className="icon-[material-symbols--check-box-rounded] text-2xl"></span>
                      : <span className="icon-[material-symbols--check-box-outline-blank] text-2xl"></span>
                  }
                </div>
                <div>
                  <p className='text-sm'>{dato.descripcion_pendiente}</p>
                  <p className='text-sm font-light'>{dato.fecha_todo}</p>
                </div>
              </div>
              <span className="icon-[typcn--delete] text-2xl"
              onClick={() => deleteTodo(dato.id_todo_siembra)}
              ></span>

            </div>
          ))
        }

      </div>
      <button className='w-full border-2 font-semibold bg-light-green border-light-green py-2 rounded-xl text-dark-grey hover:bg-light-green hover:text-dark-green'
        onClick={() => updateIsModalFechaOpen(true)}
      >Agregar fecha</button>
    </article>
  )
}

export default CalendarioCultivo