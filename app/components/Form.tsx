export const Form = () => {
  return (
    <fieldset className='w-full my-20'>
      <form className='w-2/3 mx-auto'>
        <div className=' flex flex-col gap-5'>
          <div className='flex flex-col'>
            <legend className='text-3xl border-b-2 border-gray-200 mb-5'>
              Material
            </legend>
            <label htmlFor='material_name ' className='text-gray-500'>
              Nombre
            </label>
            <select className='p-3 border-2 border-royal-blue-100 rounded-lg'>
              <option value=''>Material 1</option>
              <option value=''>Material 2</option>
              <option value=''>Material 3</option>
              <option value=''>Material 4</option>
            </select>
          </div>
          <div className='flex flex-col'>
            <label htmlFor='supplier' className='text-gray-500'>
              Proveedor
            </label>
            <input
              className='p-3 border-2 rounded-lg'
              type='text'
              disabled
              placeholder='Proveedor1'
            />
          </div>
        </div>
        <div className='my-5'>
          <legend className='text-3xl border-b-2 border-gray-200 mb-5'>
            Resultados
          </legend>
          <div className='grid grid-cols-3 gap-3'>
            <div className='bg-gray-100 p-2 rounded-lg border-2 border-gray-400'>
              <small className='text-lg italic text-thunderbird-500 font-semibold'>
                Variable 1
              </small>
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
        <div>
          <button className='w-full bg-royal-blue-900 p-5 text-white font-bold text-2xl rounded-lg hover:scale-y-105'>
            Registrar
          </button>
        </div>
      </form>
    </fieldset>
  )
}
export default Form
