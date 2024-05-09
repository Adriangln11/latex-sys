export const Form = () => {
  return (
    <fieldset className='w-full my-10'>
      <form className='w-2/3 mx-auto'>
        <div className=' flex flex-col gap-5'>
          <div className='flex flex-col'>
            <legend className='text-3xl'>Material</legend>
            <label htmlFor='material_name'>Nombre</label>
            <select className='p-3 border-2 bg-gray-200 border-gray-400'>
              <option value=''>Selecciona un material</option>
              <option value=''>Material 1</option>
              <option value=''>Material 2</option>
              <option value=''>Material 3</option>
              <option value=''>Material 4</option>
            </select>
          </div>
          <div className='flex flex-col'>
            <label htmlFor='supplier'>Proveedor</label>
            <input
              className='p-3 border-2 bg-gray-200 border-gray-400'
              type='text'
              disabled
              placeholder='Proveedor1'
            />
          </div>
        </div>
        <div className='my-5'>
          <legend className='text-3xl'>Resultados</legend>
          <div className='grid grid-cols-3 gap-3'>
            <div className='bg-gray-100 p-2 rounded-lg border-2 border-gray-400'>
              <small className='text-lg italic text-red-500 font-semibold'>
                Ph*
              </small>
              <div className='flex flex-col '>
                <label htmlFor=''>Rango</label>
                <input
                  className='bg-gray-200 border-2 border-gray-400 p-2'
                  type='number'
                  name=''
                  id=''
                  placeholder='10%'
                  disabled
                />
              </div>
              <div className='flex flex-col'>
                <label htmlFor='result'>Resultado 1</label>
                <input
                  className='border-2 bg-gray-200 border-gray-400 p-2'
                  type='number'
                  name=''
                  id=''
                />
              </div>
            </div>
            <div className='bg-gray-100 p-2 rounded-lg border-2 border-gray-400'>
              <small className='text-lg italic text-red-500 font-semibold'>
                Ph*
              </small>
              <div className='flex flex-col '>
                <label htmlFor=''>Rango</label>
                <input
                  className='bg-gray-200 border-2 border-gray-400 p-2'
                  type='number'
                  name=''
                  id=''
                  placeholder='10%'
                  disabled
                />
              </div>
              <div className='flex flex-col'>
                <label htmlFor='result'>Resultado 1</label>
                <input
                  className='border-2 bg-gray-200 border-gray-400 p-2'
                  type='number'
                  name=''
                  id=''
                />
              </div>
            </div>
            <div className='bg-gray-100 p-2 rounded-lg border-2 border-gray-400'>
              <small className='text-lg italic text-red-500 font-semibold'>
                Ph*
              </small>
              <div className='flex flex-col '>
                <label htmlFor=''>Rango</label>
                <input
                  className='bg-gray-200 border-2 border-gray-400 p-2'
                  type='number'
                  name=''
                  id=''
                  placeholder='10%'
                  disabled
                />
              </div>
              <div className='flex flex-col'>
                <label htmlFor='result'>Resultado 1</label>
                <input
                  className='border-2 bg-gray-200 border-gray-400 p-2'
                  type='number'
                  name=''
                  id=''
                />
              </div>
            </div>
          </div>
          <div className='grid grid-cols-3 gap-3'>
            <div className='bg-gray-100 p-2 rounded-lg border-2 border-gray-400'>
              <small className='text-lg italic text-red-500 font-semibold'>
                Ph*
              </small>
              <div className='flex flex-col '>
                <label htmlFor=''>Rango</label>
                <input
                  className='bg-gray-200 border-2 border-gray-400 p-2'
                  type='number'
                  name=''
                  id=''
                  placeholder='10%'
                  disabled
                />
              </div>
              <div className='flex flex-col'>
                <label htmlFor='result'>Resultado 1</label>
                <input
                  className='border-2 bg-gray-200 border-gray-400 p-2'
                  type='number'
                  name=''
                  id=''
                />
              </div>
            </div>
            <div className='bg-gray-100 p-2 rounded-lg border-2 border-gray-400'>
              <small className='text-lg italic text-red-500 font-semibold'>
                Ph*
              </small>
              <div className='flex flex-col '>
                <label htmlFor=''>Rango</label>
                <input
                  className='bg-gray-200 border-2 border-gray-400 p-2'
                  type='number'
                  name=''
                  id=''
                  placeholder='10%'
                  disabled
                />
              </div>
              <div className='flex flex-col'>
                <label htmlFor='result'>Resultado 1</label>
                <input
                  className='border-2 bg-gray-200 border-gray-400 p-2'
                  type='number'
                  name=''
                  id=''
                />
              </div>
            </div>
            <div className='bg-gray-100 p-2 rounded-lg border-2 border-gray-400'>
              <small className='text-lg italic text-red-500 font-semibold'>
                Ph*
              </small>
              <div className='flex flex-col '>
                <label htmlFor=''>Rango</label>
                <input
                  className='bg-gray-200 border-2 border-gray-400 p-2'
                  type='number'
                  name=''
                  id=''
                  placeholder='10%'
                  disabled
                />
              </div>
              <div className='flex flex-col'>
                <label htmlFor='result'>Resultado 1</label>
                <input
                  className='border-2 bg-gray-200 border-gray-400 p-2'
                  type='number'
                  name=''
                  id=''
                />
              </div>
            </div>
          </div>
          <div className='grid grid-cols-3 gap-3'>
            <div className='bg-gray-100 p-2 rounded-lg border-2 border-gray-400'>
              <small className='text-lg italic text-red-500 font-semibold'>
                Ph*
              </small>
              <div className='flex flex-col '>
                <label htmlFor=''>Rango</label>
                <input
                  className='bg-gray-200 border-2 border-gray-400 p-2'
                  type='number'
                  name=''
                  id=''
                  placeholder='10%'
                  disabled
                />
              </div>
              <div className='flex flex-col'>
                <label htmlFor='result'>Resultado 1</label>
                <input
                  className='border-2 bg-gray-200 border-gray-400 p-2'
                  type='number'
                  name=''
                  id=''
                />
              </div>
            </div>
            <div className='bg-gray-100 p-2 rounded-lg border-2 border-gray-400'>
              <small className='text-lg italic text-red-500 font-semibold'>
                Ph*
              </small>
              <div className='flex flex-col '>
                <label htmlFor=''>Rango</label>
                <input
                  className='bg-gray-200 border-2 border-gray-400 p-2'
                  type='number'
                  name=''
                  id=''
                  placeholder='10%'
                  disabled
                />
              </div>
              <div className='flex flex-col'>
                <label htmlFor='result'>Resultado 1</label>
                <input
                  className='border-2 bg-gray-200 border-gray-400 p-2'
                  type='number'
                  name=''
                  id=''
                />
              </div>
            </div>
            <div className='bg-gray-100 p-2 rounded-lg border-2 border-gray-400'>
              <small className='text-lg italic text-red-500 font-semibold'>
                Ph*
              </small>
              <div className='flex flex-col '>
                <label htmlFor=''>Rango</label>
                <input
                  className='bg-gray-200 border-2 border-gray-400 p-2'
                  type='number'
                  name=''
                  id=''
                  placeholder='10%'
                  disabled
                />
              </div>
              <div className='flex flex-col'>
                <label htmlFor='result'>Resultado 1</label>
                <input
                  className='border-2 bg-gray-200 border-gray-400 p-2'
                  type='number'
                  name=''
                  id=''
                />
              </div>
            </div>
          </div>
        </div>
      </form>
    </fieldset>
  )
}
export default Form
