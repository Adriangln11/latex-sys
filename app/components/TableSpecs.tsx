import { BiSolidShow } from 'react-icons/bi'
import { MdDelete, MdModeEdit } from 'react-icons/md'

const TableSpecs = () => {
  return (
    <div className='w-full overflow-x-auto mt-20 rounded-lg border border-stroke bg-white p-1 shadow-default'>
      <table className='w-full table-auto'>
        <thead className='border-b-2 border-gray-200'>
          <tr>
            <th className='px-4 py-4 font-medium text-center text-gray-500'>
              Materia Prima
            </th>
            <th className='px-4 py-4 font-medium text-center text-gray-500'>
              Variable 1
            </th>
            <th className='px-4 py-4 font-medium text-center text-gray-500'>
              Variable 2
            </th>
            <th className='px-4 py-4 font-medium text-center text-gray-500'>
              Variable 3
            </th>
            <th className='px-4 py-4 font-medium text-center text-gray-500'>
              Variable 4
            </th>
            <th className='px-4 py-4 font-medium text-center text-gray-500'>
              Variable 5
            </th>
            <th className='px-4 py-4 font-medium text-center text-gray-500'>
              Variable 6
            </th>
            <th className='px-4 py-4 font-medium text-center text-gray-500'>
              Variable 7
            </th>
            <th className='px-4 py-4 font-medium text-center text-gray-500'>
              Variable 8
            </th>
            <th className='px-4 py-4 font-medium text-center text-gray-500'>
              Última actualización
            </th>
            <th className='px-4 py-4 font-medium text-center text-gray-500'>
              Acciones
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className='px-4 py-4 font-normal text-center'>Material 1</td>
            <td className='px-4 py-4 font-normal text-center'>Parametro 1</td>
            <td className='px-4 py-4 font-normal text-center'>Parametro 2</td>
            <td className='px-4 py-4 font-normal text-center'>Parametro 3</td>
            <td className='px-4 py-4 font-normal text-center'>Parametro 4</td>
            <td className='px-4 py-4 font-normal text-center'>Parametro 5</td>
            <td className='px-4 py-4 font-normal text-center'>Parametro 6</td>
            <td className='px-4 py-4 font-normal text-center'>Parametro 7</td>
            <td className='px-4 py-4 font-normal text-center'>Parametro 8</td>
            <td className='px-4 py-4 font-normal text-center'>
              {new Date().toLocaleDateString()}
            </td>
            <td className='px-4 py-4 font-medium text-black'>
              <div className='flex items-center space-x-3.5'>
                <button className='hover:text-primary'>
                  <i className='text-blue-600 text-xl' title='Ver detalles'>
                    <BiSolidShow />
                  </i>
                </button>
                <button className='hover:text-primary'>
                  <i className='text-red-600 text-xl' title='Eliminar'>
                    <MdDelete />
                  </i>
                </button>
                <button className='hover:text-primary'>
                  <i className='text-green-600 text-xl' title='Editar'>
                    <MdModeEdit />
                  </i>
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default TableSpecs
