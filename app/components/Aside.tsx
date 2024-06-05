import { MdStorage, MdScience, MdKeyboardArrowDown } from 'react-icons/md'
import { IoBalloon, IoShield } from 'react-icons/io5'
import { AiFillProduct } from 'react-icons/ai'
import { LuPackage } from 'react-icons/lu'

export const Aside = () => {
  return (
    <aside className='absolute h-full bg-royal-blue-900 p-10 text-white'>
      <h1 className='my-10 text-4xl text-white font-bold flex gap-3 border-b-2 border-red-500 text-nowrap'>
        <i className='text-red-500'>
          <IoBalloon />
        </i>{' '}
        Latex Sepiol
      </h1>
      <div>
        <span className='text-gray-500'>Departamentos</span>
        <ul className='text-xl text-gray-200 flex flex-col gap-3 '>
          <li className='hover:bg-gray-400/35 p-3 rounded-lg'>
            <a href='' className='flex items-center relative'>
              <i className='mr-2'>
                <MdStorage />
              </i>
              Almacen{' '}
              <i className='mx-5 absolute right-0'>
                <MdKeyboardArrowDown />
              </i>
            </a>
          </li>
          <li className='hover:bg-gray-400/35 p-3 rounded-lg'>
            <a href='' className='flex items-center relative'>
              <i className='mr-2'>
                <MdScience />
              </i>
              Laboratorio{' '}
              <i className='mx-5 absolute right-0'>
                <MdKeyboardArrowDown />
              </i>
            </a>
          </li>
          <li className='hover:bg-gray-400/35 p-3 rounded-lg'>
            <a href='' className='flex items-center relative'>
              <i className='mr-2'>
                <AiFillProduct />
              </i>
              Producción{' '}
              <i className='mx-5 absolute right-0'>
                <MdKeyboardArrowDown />
              </i>
            </a>
          </li>
          <li className='hover:bg-gray-400/35 p-3 rounded-lg'>
            <a href='' className='flex items-center relative'>
              <i className='mr-2'>
                <IoShield />
              </i>
              Calidad{' '}
              <i className='mx-5 absolute right-0'>
                <MdKeyboardArrowDown />
              </i>
            </a>
          </li>
          <li className='hover:bg-gray-400/35 p-3 rounded-lg'>
            <a href='' className='flex items-center relative'>
              <i className='mr-2'>
                <LuPackage />
              </i>
              Embarques{' '}
              <i className='mx-5 absolute right-0'>
                <MdKeyboardArrowDown />
              </i>
            </a>
          </li>
        </ul>
      </div>
      <div className=''>
        <span className='text-gray-500'>Salir</span>
        <div className='my-3'>
          <button className='w-full rounded-lg font-bold text-white p-3 bg-red-500'>
            Salir
          </button>
        </div>
      </div>
    </aside>
  )
}

export default Aside
