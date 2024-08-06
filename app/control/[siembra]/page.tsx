'use client'

import { useParams } from 'next/navigation'

const Siembra = () => {

    const { siembra } = useParams()

    return (
        <section className='w-full '>
            <header className='bg-dark-green h-[120px] w-full py-10 px-7 rounded-b-3xl'>
                <h1 className='text-4xl text-light-grey font-bold'>{siembra}</h1>

            </header>
            <div className='grid grid-cols-2 p-3'>
                <a className='h-20 bg-light-green p-5 rounded-xl shadow-lg m-2'>
                    <p className='text-dark-grey'>25 de julio</p>
                </a>
                <a className='h-20 bg-light-green p-5 rounded-xl shadow-lg m-2'>
                    <p className='text-dark-grey'>25 de julio</p>
                </a>
                <a className='h-20 bg-light-green p-5 rounded-xl shadow-lg m-2'>
                    <p className='text-dark-grey'>25 de julio</p>
                </a>
                <a className='h-20 bg-light-green p-5 rounded-xl shadow-lg m-2'>
                    <p className='text-dark-grey'>25 de julio</p>
                </a>
                
            </div>
        </section>
    )
}

export default Siembra