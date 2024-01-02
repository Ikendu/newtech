import { HeartIcon } from '../assets/Icons'

const ReviewPage = () => {
  return (
    <div className='bg-gray-200 p-20'>
      <div className='grid grid-cols-2 justify-items-end '>
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
      <div></div>
      <div></div>
    </div>
  )
}
export default ReviewPage
