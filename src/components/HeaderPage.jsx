import { useState } from 'react'
import { PlayIcon } from '../assets/Icons'
import { useEffect } from 'react'

const HeaderPage = () => {
  const [small, setSmall] = useState(false)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', () => setSmall(window.scrollY > 200))
    }
  }, [])
  const style = 'border p-1.5 px-5 rounded border-blue-500 font-semibold '
  const iconstyle = 'p-1 pt-1.5 border rounded-full border-green-700'
  const headerStyle = 'flex justify-between fixed bg-white w-full top-0 px-20 py-6'
  const smallStyle =
    'flex justify-between fixed bg-white w-full top-0 px-20 py-4 shadow-md shadow-gray-400'
  return (
    <header className={small ? smallStyle : headerStyle}>
      <div className='flex gap-20 items-center'>
        <h3 className='font-bold text-2xl space-x-40  tracking-widest  '>TURING</h3>
        <div className='flex gap-5 text-lg tracking-wide text-gray-600'>
          <div className='flex gap-1 items-center'>
            Explore Services
            <div className={iconstyle}>
              <PlayIcon />
            </div>
          </div>
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
    </header>
  )
}
export default HeaderPage
