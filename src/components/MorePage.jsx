const MorePage = () => {
  const style = 'border mr-3 p-3 px-7 text-lg  rounded border-blue-500 font-semibold '
  return (
    <>
      <div className='w-full mt-10 pt-10 pb-8 bg-gray-50 text-gray-800 text-center items-center '>
        <h2 className='text-4xl font-semibold '>
          AI transformation is the new digital transformation
        </h2>
        <p className='mt-10 mb-2'>
          900+ companies have trusted Turing for their custom engineering and on-demand talent.
        </p>
        <div className='flex justify-center gap-8 items-center '>
          <img src='./pepsi.jpg' className='h-20' />
          <img src='./redit.svg' className='w-28' />
          <img src='./dell.jpg' className='w-28' />
          <img src='./volvo.jpg' className='w-28' />
          <img src='./disnep.jpg' className='w-28' />
        </div>
      </div>
      <div className='m-20 grid grid-cols-2 gap-16'>
        <div>
          <h3 className='text-gray-500 font-bold pb-2'>FOR BUSINESSES</h3>
          <p className='text-gray-800 font-semibold text-4xl pb-4  leading-snug'>
            Hire faster with the world's most deeply vetted developers and teams, matched by AI
          </p>
          <p className='pb-7 text-gray-800 text-lg'>
            Quickly and efficiently build your engineering team with our deeply vetted talent.
          </p>
          <button className={style + `bg-blue-700  text-slate-200`}>Hire Developers</button>
        </div>
        <div>
          <img src='developers.svg' />
        </div>
      </div>
      <div className='p-20 pt-24 grid grid-cols-2 gap-16 bg-slate-100'>
        <div>
          <img src='services.svg' />
        </div>
        <div>
          <h3 className='text-gray-500 font-bold pb-2'>FOR BUSINESSES</h3>
          <p className='text-gray-800 font-semibold text-4xl pb-4  leading-snug'>
            Implement faster with custom software engineering
          </p>
          <p className='pb-7 text-gray-800 text-lg'>
            Use our unique combination of expert consultants, engineering talent, and AI-accelerated
            delivery for faster project completion.
          </p>
          <button className={style + `bg-blue-700  text-slate-200`}>
            More about Custom Engineering
          </button>
        </div>
      </div>
    </>
  )
}
export default MorePage
