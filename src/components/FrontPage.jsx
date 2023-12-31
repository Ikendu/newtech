const FrontPage = () => {
  const style = 'border p-1.5 px-5 rounded border-blue-500 font-semibold '
  return (
    <div className='flex'>
      <div>
        <h1 className='font-semibold text-5xl leading-snug mb-8'>
          The world’s first AI-powered tech services company
        </h1>
        <p>
          With over 3 million engineers, Turing uses AI to help businesses build groundbreaking
          products with our custom application development and on-demand software engineering.
        </p>
        <button className={style}>Hire Developers</button>
        <button className={style}>Explore Custom Engineering</button>
        <p>
          Looking for remote job opportunities? <span>Apply for Jobs</span>
        </p>
      </div>
      <div>
        <img src='./1.JPG' />
      </div>
    </div>
  )
}
export default FrontPage
