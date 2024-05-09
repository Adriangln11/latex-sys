import Navbar from '@/app/components/Navbar'
import Form from '@/app/components/Form'

const FormPage = () => {
  return (
    <main className='w-full overflow-auto'>
      <Navbar />
      <section className='w-full my-10 flex flex-col'>
        <h1 className='text-start text-5xl px-10'>Nuevo registro</h1>
        <Form />
      </section>
    </main>
  )
}
export default FormPage
