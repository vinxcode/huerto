'use client'

import { useStore } from '@/app/store/useStore'
import { useState } from 'react'
import { useParams } from 'next/navigation'

const CrearFecha = () => {

  const updateIsModalFechaOpen = useStore((state) => state.updateIsModalFechaOpen)
  const isModalFechaOpen = useStore((state) => state.isModalFechaOpen)
  const [todoSiembra, setTodoSiembra] = useState('')
  const [fechaSiembra, setFechaSiembra] = useState('')

  const { siembra } = useParams()

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/newTodoSiembra', {
        method: 'POST',
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

    setTodoSiembra('')
    setFechaSiembra('')
  };

  return (
    <>
      {
        isModalFechaOpen &&
        (
          <div className=' absolute z-10 flex justify-center items-center w-full h-screen modal animate-in'>
            <div className='mt-3 flex flex-col gap-3 bg-light-grey shadow-xl p-7 w-11/12 rounded-xl md:w-[600px]'>
              <h1 className='text-center font-semibold text-lg'>Agregar nueva fecha importante</h1>
              <label className='mb-[-10px]'>Escriba una tarea</label>
              <input type="text" placeholder='Tarea' className='p-3  rounded-xl'
                value={todoSiembra}
                onChange={(e) => setTodoSiembra(e.target.value)} />
              <label className='mb-[-10px]'>Fecha de realizacion</label>
              <input type="text" placeholder='Tarea' className='p-3  rounded-xl'
                value={fechaSiembra}
                onChange={(e) => setFechaSiembra(e.target.value)} />
              <div className='flex w-full gap-2 text-sm font-semibold'>
                <button className='py-3 border-2 border-dark-green text-dark-green w-1/2 rounded-xl'
                  onClick={() => updateIsModalFechaOpen(false)}
                >Cancelar</button>
                <button className='py-3 bg-dark-green text-white w-1/2 rounded-xl'
                  onClick={handleSubmit}
                >Agregar</button>
              </div>
            </div>
          </div>
        )
      }
    </>
  )
}

export default CrearFecha