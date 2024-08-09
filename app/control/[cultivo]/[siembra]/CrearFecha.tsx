import { useStore } from '@/app/store/useStore'

const CrearFecha = () => {

  const updateIsModalFechaOpen = useStore((state) => state.updateIsModalFechaOpen)
  const isModalFechaOpen = useStore((state) => state.isModalFechaOpen)

  return (
    <>
      {
        isModalFechaOpen &&
        (
          <div className=' absolute z-10 flex justify-center items-center w-full h-screen modal animate-in'>
            <div className='mt-3 flex flex-col gap-3 bg-light-grey shadow-xl p-7 w-11/12 rounded-xl md:w-[600px]'>
              <p className='text-center font-semibold text-sm'>Agregar nueva fecha importante</p>
              <label className='mb-[-10px]'>Escriba una tarea</label>
              <input type="text" placeholder='Tarea' className='p-3  rounded-xl' />
              <label className='mb-[-10px]'>Fecha de realizacion</label>
              <input type="text" placeholder='Tarea' className='p-3  rounded-xl' />
              <div className='flex w-full gap-2 text-sm font-semibold'>
                <button className='py-3 border-2 border-dark-green text-dark-green w-1/2 rounded-xl'
                  onClick={() => updateIsModalFechaOpen(false)}
                >Cancelar</button>
                <button className='py-3 bg-dark-green text-white w-1/2 rounded-xl'
                  onClick={() => updateIsModalFechaOpen(false)}
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