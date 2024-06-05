import TableSpecs from '@/app/components/TableSpecs'

const SpecsPage = () => {
  return (
    <div className='mt-20 ml-96 p-10'>
      <h1 className='text-5xl font-semibold text-white p-5 rounded-lg inline bg-thunderbird-400'>
        Especificaciones de Materia Prima
      </h1>
      <TableSpecs />
    </div>
  )
}
export default SpecsPage
