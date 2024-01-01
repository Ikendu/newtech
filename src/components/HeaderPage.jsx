import { PlayIcon } from '../assets/Icons'

const HeaderPage = () => {
  const style = 'border p-1.5 px-5 rounded border-blue-500 font-semibold '
  const iconstyle = 'p-1 pt-1.5 border rounded-full border-green-700'
  return (
    <div className='flex justify-between items-center mb-16'>
      <div className='flex gap-20 items-center'>
        <h3 className='font-bold text-2xl space-x-40  tracking-widest '>TURING</h3>
        <div className='flex gap-5 text-lg tracking-wide text-gray-600'>
          <p className='flex gap-1 items-center'>
            Explore Services
            <div className={iconstyle}>
              <PlayIcon />
            </div>
          </p>
          <p>Explore Developers</p>
          <p>Explore Jobs</p>
        </div>
      </div>

      <div className='flex gap-3'>
        <button className={style + 'text-blue-600'}>Apply for Jobs</button>
        <button className={style + ' text-white bg-blue-600'}>Hire Developers</button>
        <div className='flex text-lg tracking-wide text-gray-600  gap-1 items-center'>
          Login
          <div className={iconstyle}>
            <PlayIcon />
          </div>
        </div>
      </div>
    </div>
  )
}
export default HeaderPage
