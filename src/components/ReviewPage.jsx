import { useCallback, useEffect, useState } from 'react'
import { ArrowUpIcon, HeartIcon, NextIcon, PrevIcon } from '../assets/Icons'
import { slides } from './lists'

const slideIconStyle =
  'absolute top-[50%] p-2 bg-black text-white cursor-pointer rounded-full hidden group-hover:block'
const indecator = `text-blue-500`
const indecator1 = `text-gray-700`

const ReviewPage = () => {
  const [currIndex, setCurrIndex] = useState(2)

  const prevSlide = () => {
    if (currIndex === 0) setCurrIndex(slides.length - 1)
    else setCurrIndex(currIndex - 1)
  }

  const nextSlide = () => {
    const isCurr = currIndex === slides.length - 1
    const newIndex = isCurr ? 0 : currIndex + 1
    setCurrIndex(newIndex)
  }

  const getSlide = (currIndex) => {
    setCurrIndex(currIndex)
  }

  return (
    <div className='bg-gray-200 p-20'>
      <div className='grid grid-cols-2 justify-items-end group-hover:block '>
        <div>
          <h3 className='flex gap-1 text-3xl font-semibold items-center'>
            People <HeartIcon /> Turing
          </h3>
          <p className='text-gray-800 pt-4 text-lg'>
            Read Turing.com reviews from developers across the world and learn what it’s like
            working with top U.S. companies.
          </p>
        </div>
        <div>
          <div className='flex gap-2 items-baseline justify-end'>
            <span className='text-3xl font-semibold '>4.5</span>{' '}
            <span className='text-xs text-gray-600'>OUT OF 5</span>
          </div>
          <p className='text-sm text-gray-600'>based on developer reviews as of November 2023</p>
        </div>
      </div>
      <div className='pt-8 max-w-[700px] h-[400px] w-full m-auto px-4 relative group'>
        <div
          style={{ backgroundImage: `url(${slides[currIndex].url})` }}
          className='w-full h-full bg-center bg-cover  duration-400 rounded-2xl opacity-50'
        ></div>
        <div className='absolute top-[50%] text-center w-full text-xl font-semibold italic'>
          {slides.map((slide, idx) => (
            <div key={idx}>{currIndex == idx && slide.review}</div>
          ))}
        </div>
        <div className={`${slideIconStyle} left-0`} onClick={prevSlide}>
          <PrevIcon />
        </div>
        <div className={`${slideIconStyle} right-0`} onClick={nextSlide}>
          <NextIcon />
        </div>
        <div className={`flex text-gray-500 gap-5 m-auto justify-center`}>
          {slides.map((slide, indx) => (
            <div
              key={indx}
              onClick={() => getSlide(indx)}
              className={currIndex === indx ? indecator : indecator1}
            >
              <ArrowUpIcon />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
export default ReviewPage
