const style4 = 'text-6xl font-semibold py-4 '
const styleButton = 'border mr-3 p-3 px-7 text-lg  rounded border-blue-500 font-semibold '

const Developers = () => {
  return (
    <div>
      <div className='w-full '>
        <img className='w-full' src='./bg.jpg' />
        <div className='text-white px-20 moveup'>
          <div className='text-5xl '>
            <p className='py-2'>3 million+ developers </p>
            <p className='py-2'>from 150 countries </p>
            <p className='py-2'>have already joined Turing</p>
          </div>
          <div className='flex gap-20 py-5 mb-20 mt-5'>
            <div>
              <h3 className={style4}>15+</h3>
              <p className='text-2xl'>Job types</p>
            </div>
            <div>
              <h3 className={style4}>100+</h3>
              <p className='text-2xl'>Technologies</p>
            </div>
            <div>
              <h3 className={style4}>7+</h3>
              <p className='text-2xl'>Seniority levelss</p>
            </div>
          </div>

          <div className='flex gap-3'>
            <button className={styleButton + `bg-white text-blue-600`}>Hire Developers</button>
            <button className={styleButton}>Apply for Jobs</button>
          </div>
        </div>
      </div>

      <div className='p-20 pt-40 grid grid-cols-2 gap-10 bg-slate-100'>
        <div className=''>
          <img src='c.svg' />
        </div>
        <div>
          <p className='text-gray-800 font-semibold text-4xl py-4  leading-snug'>
            Why are the best developers joining Turing? They want careers, not gigs.
          </p>
          <ul className='py-10 list'>
            <li className='py-3 text-2xl'>Vetted once, eligible for life</li>
            <li className='py-3 text-2xl'>Exclusive Turing developer success support</li>
            <li className='py-3 text-2xl'>Income stability thanks to 99% rematch rate</li>
          </ul>
          <button className={styleButton + `bg-blue-700  text-slate-200`}>Apply for Jobs</button>
        </div>
      </div>
    </div>
  )
}
export default Developers
