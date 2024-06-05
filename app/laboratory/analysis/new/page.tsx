import Navbar from '@/app/components/Navbar'
import Form from '@/app/components/Form'

const FormPage = () => {
  return (
    <main className='w-full overflow-auto mt-20 ml-96 p-10'>
      <section className='w-full'>
        <h1 className='text-5xl font-semibold text-white p-5 rounded-lg inline bg-thunderbird-400'>
          Nuevo registro
        </h1>
        <Form />
      </section>
    </main>
  )
}
export default FormPage
