import { useState } from 'react'
import { ArrowIcon, PlayIcon, PlayIconUp } from '../assets/Icons'
import { useEffect } from 'react'
import { services } from './lists'

const style = 'border p-1.5 px-5 rounded border-blue-500 font-semibold '
const iconstyle = 'px-1 py-1.5 border rounded-full border-blue-500'
const headerStyle = 'flex justify-between fixed bg-white w-full top-0 px-20 py-6'
const smallStyle =
  'flex justify-between fixed bg-white w-full top-0 px-20 py-3 shadow-md shadow-gray-400 transition duration-700 ease-in-out'
const dropStyle = 'p-2 border-b-2 flex justify-between items-center gap-5 text-blue-500'
const dropStyle2 = 'p-2 flex justify-between items-center gap-5 font-semibold text-gray-600'
const dropList =
  'absolute bg-white top-14 p-3 border-gray-300 border-2 rounded-md text-lg text-gray-600 '

const HeaderPage = () => {
  const [small, setSmall] = useState(false)
  const [play, setPlay] = useState(<PlayIcon />)
  const [play2, setPlay2] = useState(<PlayIcon />)
  const [display, setDisplay] = useState(`hidden`)
  const [display1, setDisplay1] = useState(`hidden`)
  const [color, setColor] = useState(false)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', () => setSmall(window.scrollY > 200))
    }
  }, [])

  return (
    <header className={small ? smallStyle : headerStyle}>
      <div className='flex gap-20 items-center '>
        <h3 className='font-bold text-2xl space-x-40  tracking-widest'>TURING</h3>
        <div className='flex gap-5 text-lg tracking-wide text-gray-600'>
          <div
            className={`flex gap-1 items-center ${color && `text-blue-500`}`}
            onMouseEnter={() => {
              setPlay(<PlayIconUp />)
              setDisplay1(`block -ml-16`)
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
              {services.map((service) => (
                <ul key={service}>
                  <a href=''>
                    <li className={dropStyle}>
                      {service} <ArrowIcon />
                    </li>
                  </a>
                </ul>
              ))}
              <ul>
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
        <div
          onMouseEnter={() => {
            setPlay2(<PlayIconUp />)
            setDisplay(`block right-2`)
          }}
          onMouseLeave={() => {
            setPlay2(<PlayIcon />)
            setDisplay(`hidden`)
          }}
          className='flex text-lg tracking-wide text-gray-600  gap-1 items-center '
        >
          <p className='cursor-pointer'>Login</p>

          <div className={iconstyle}>
            {play2}
            <div className={dropList + display}>
              <ul>
                <li className={`${dropStyle2}`}>Developer</li>
                <a href='#'>
                  <li className={`${dropStyle}`}>
                    Login
                    <ArrowIcon />
                  </li>
                </a>

                <a href='#'>
                  <li className={`${dropStyle}`}>
                    Create an Account <ArrowIcon />
                  </li>
                </a>

                <li className={`${dropStyle2}`}>Client</li>
                <a href='#'>
                  <li className={`${dropStyle} + border-none`}>
                    Login <ArrowIcon />
                  </li>
                </a>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default HeaderPage
