import { useState } from 'react'

const FrontPage = () => {
  const [blueButton, setBlueButton] = useState(``)
  const [whiteButton, setWhiteButton] = useState(``)

  const style = 'border mr-3 p-3 px-7 text-lg  rounded border-blue-500 font-semibold '
  return (
    <div className='mx-20 my-16 pt-16'>
      <div className='flex text-gray-800 '>
        <div className=''>
          <h1 className='font-semibold text-5xl leading-snug mb-6  '>
            The world’s first AI-powered tech services company
          </h1>
          <p className='text-xl pr-10 mb-8 text-gray-800'>
            With over 3 million engineers, Turing uses AI to help businesses build groundbreaking
            products with our custom application development and on-demand software engineering.
          </p>
          <div className='pb-10'>
            <button
              onMouseEnter={() => setBlueButton(`bg-blue-800`)}
              className={`${style}text-white bg-blue-600 ${blueButton}`}
              onMouseLeave={() => setBlueButton(``)}
            >
              Hire Developers
            </button>
            <button
              onMouseEnter={() => setWhiteButton(`bg-gray-100`)}
              className={`${style} text-blue-600  ${whiteButton}`}
              onMouseLeave={() => setWhiteButton(``)}
            >
              Explore Custom Engineering
            </button>
          </div>

          <p>
            Looking for remote job opportunities?{' '}
            <a className='text text-blue-600 font-semibold'>Apply for Jobs</a>
          </p>
        </div>
        <div className='w-full -mt-5'>
          <img src='./1.JPG' />
        </div>
      </div>
    </div>
  )
}
export default FrontPage
