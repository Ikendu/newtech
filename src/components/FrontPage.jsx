const FrontPage = () => {
  const style = 'border mr-3 p-3 px-7 text-lg  rounded border-blue-500 font-semibold '
  return (
    <div className='flex '>
      <div className=''>
        <h1 className='font-semibold text-5xl leading-snug mb-6  '>
          The world’s first AI-powered tech services company
        </h1>
        <p className='text-xl pr-10 mb-8'>
          With over 3 million engineers, Turing uses AI to help businesses build groundbreaking
          products with our custom application development and on-demand software engineering.
        </p>
        <div className='pb-10'>
          <button className={style + `bg-blue-700 text-white  `}>Hire Developers</button>
          <button className={style + `text-blue-600`}>Explore Custom Engineering</button>
        </div>

        <p>
          Looking for remote job opportunities? <span>Apply for Jobs</span>
        </p>
      </div>
      <div className='w-full -mt-5'>
        <img src='./1.JPG' />
      </div>
    </div>
  )
}
export default FrontPage
