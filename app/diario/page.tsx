import React from 'react'
import { createClient } from "@/utils/supabase/server";

const Diario = async () => {

    const supabase = createClient();
    const { data: diarios } = await supabase.from("diarios").select();

    return (
        <section className='flex flex-col w-full items-start py-10 px-7 animate-in'>
            <h1 className="text-4xl font-bold ">Diario</h1>
            <button className='text-center w-full my-3 bg-dark-green text-white px-10 py-3 rounded-xl shadow-lg hover:bg-dark-grey hover:animate-in'>Actualizar diario</button>
            {
                diarios && (
                    diarios.map(diario => (
                        <a className='text-sm flex flex-col gap-1 bg-white p-4 rounded-xl font-light mb-2 w-full shadow-lg'>
                            <p className='text-dark-green'>{diario.fecha}</p>
                            <p>{diario.notas}</p>
                        </a>
                    ))
                )
            }
        </section>
    )
}

export default Diario