import { useState } from 'react'
import { ArrowIcon, PlayIcon, PlayIconUp } from '../assets/Icons'
import { useEffect } from 'react'

const style = 'border p-1.5 px-5 rounded border-blue-500 font-semibold '
const iconstyle = 'px-1 py-1.5 border rounded-full border-blue-500'
const headerStyle = 'flex justify-between fixed bg-white w-full top-0 px-20 py-6'
const smallStyle =
  'flex justify-between fixed bg-white w-full top-0 px-20 py-3 shadow-md shadow-gray-400 transition duration-700 ease-in-out'
const dropStyle = 'p-2 border-b-2 flex justify-between items-center gap-5'
const dropList =
  'absolute bg-white top-14 p-3 border-gray-300 border-2 rounded-md text-lg text-gray-600  '

const HeaderPage = () => {
  const [small, setSmall] = useState(false)
  const [play, setPlay] = useState(<PlayIcon />)
  const [play2, setPlay2] = useState(<PlayIcon />)
  const [display1, setDisplay1] = useState(`hidden`)
  const [color, setColor] = useState(false)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', () => setSmall(window.scrollY > 200))
    }
  }, [])

  return (
    <header className={small ? smallStyle : headerStyle}>
      <div className='flex gap-20 items-center   '>
        <h3 className='font-bold text-2xl space-x-40  tracking-widest'>TURING</h3>
        <div className='flex gap-5 text-lg tracking-wide text-gray-600'>
          <div
            className={`flex gap-1 items-center ${color && `text-blue-500`}`}
            onMouseEnter={() => {
              setPlay(<PlayIconUp />)
              setDisplay1(`block`)
              setColor(true)
            }}
            onMouseLeave={() => {
              setPlay(<PlayIcon />)
              setDisplay1(`hidden`)
              setColor(false)
            }}
          >
            Explore Services
            <div className={iconstyle}>{play}</div>
            <div className={dropList + display1}>
              <ul className='items-center '>
                <li className={dropStyle}>
                  AI Services <ArrowIcon />
                </li>

                <li className={dropStyle}>
                  Cloud Services <ArrowIcon />
                </li>
                <li className={dropStyle}>
                  Application Engineering Services <ArrowIcon />
                </li>
                <li className={dropStyle}>
                  Managed Team <ArrowIcon />
                </li>
                <li className={`${dropStyle} + border-none`}>
                  Generative AI Services <ArrowIcon />
                </li>
              </ul>
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
          <div
            className={iconstyle}
            onMouseEnter={() => setPlay2(<PlayIconUp />)}
            onMouseLeave={() => setPlay2(<PlayIcon />)}
          >
            {play2}
          </div>
        </div>
      </div>
    </header>
  )
}

export default HeaderPage
