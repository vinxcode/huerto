import React from 'react'

const Diario = () => {
    return (
        <div className='flex flex-col w-full items-start p-10'>
            <h1 className="text-4xl font-bold ">Diario</h1>
            <button className='text-center w-full my-3 bg-dark-green text-white px-10 py-3 rounded-xl hover:bg-light-green hover:animate-in'>Actualizar diario</button>
        </div>
    )
}

export default Diario