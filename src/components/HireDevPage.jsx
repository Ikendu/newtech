const HireDevPage = () => {
  const styleButton = 'border mr-3 p-3 px-7 text-lg  rounded border-blue-500 font-semibold '

  return (
    <div className='p-16 justify-items-center bg-gray-800 text-center text-white'>
      <h2 className='text-3xl font-semibold '>Hire remote developers</h2>
      <p className='text-lg p-10 '>
        Tell us the skills you need and we'll find the best developer for you in days, not weeks.
      </p>
      <button className={styleButton + `bg-blue-600`}>Hire Developer</button>
    </div>
  )
}
export default HireDevPage
