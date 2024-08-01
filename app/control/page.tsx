import React from 'react'
import { createClient } from "@/utils/supabase/server";

const Control = async () => {

  const supabase = createClient()
  const { data: todos } = await supabase.from("cultivos").select();

  return (
    <section className='flex flex-col w-full items-start py-10 px-7 animate-in'>
      <h1 className="text-4xl font-bold ">Control</h1>
      <button className='text-center w-full my-3 bg-dark-green text-white px-10 py-3 shadow-xl rounded-xl hover:bg-light-green hover:animate-in'>Agregar cultivo</button>
      {
        todos && (
          todos.map(todo => (
            <a className='bg-white rounded-xl w-full px-10 py-3 shadow-xl cursor-pointer mb-2'>
              <h3 className='text-dark-green text-center font-light'>{todo.id_cultivo} - {todo.nombre_cultivo}</h3>
            </a>
          ))
        )
      }
    </section>
  )
}

export default Control