import React from 'react'

const Diario = () => {
    return (
        <div className='flex flex-col w-full items-start py-10 px-7'>
            <h1 className="text-4xl font-bold ">Diario</h1>
            <button className='text-center w-full my-3 bg-dark-green text-white px-10 py-3 rounded-xl hover:bg-light-green hover:animate-in'>Actualizar diario</button>
            <article className='text-sm flex flex-col gap-1 bg-white p-4 rounded-xl font-light mb-2'>
                <p className='text-dark-green'>7 de julio</p>
                <p>Los tomates comenzaron a germinar, pero debo tener mucho cuidado con el riego ya que han pasado tres dias sin que llueva.</p>
            </article>
            <article className='text-sm flex flex-col gap-1 bg-white p-4 rounded-xl font-light mb-2'>
                <p className='text-dark-green'>7 de julio</p>
                <p>Los tomates comenzaron a germinar, pero debo tener mucho cuidado con el riego ya que han pasado tres dias sin que llueva.</p>
            </article>
            <article className='text-sm flex flex-col gap-1 bg-white p-4 rounded-xl font-light mb-2'>
                <p className='text-dark-green'>7 de julio</p>
                <p>Los tomates comenzaron a germinar, pero debo tener mucho cuidado con el riego ya que han pasado tres dias sin que llueva.</p>
            </article>
            <article className='text-sm flex flex-col gap-1 bg-white p-4 rounded-xl font-light mb-2'>
                <p className='text-dark-green'>7 de julio</p>
                <p>Los tomates comenzaron a germinar, pero debo tener mucho cuidado con el riego ya que han pasado tres dias sin que llueva.</p>
            </article>
        </div>
    )
}

export default Diario