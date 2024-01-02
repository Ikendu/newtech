const HireDevPage = () => {
  const styleButton = 'border mr-3 p-3 px-7 text-lg  rounded border-blue-500 font-semibold'
  const style = 'text-lg font-semibold pb-4'
  const style1 = 'text-gray-400 grid grid-flow-row gap-3'

  return (
    <div className='text-gray-100'>
      <div className='p-16 justify-items-center bg-slate-900 text-center bg '>
        <h2 className='text-3xl font-semibold '>Hire remote developers</h2>
        <p className='text-lg p-10 '>
          Tell us the skills you need and we'll find the best developer for you in days, not weeks.
        </p>
        <button className={styleButton + `bg-blue-600`}>Hire Developer</button>
      </div>
      <footer>
        <div className=' bg-slate-950'>
          <div className='grid grid-flow-col '>
            <div>
              <h2 className=' p-20 text-3xl'>TURING</h2>
            </div>
            <div className='p-16'>
              <h3 className={style}>Companies</h3>
              <ul className={style1}>
                <li>Hire Developers</li>
                <li>Book a Call</li>
                <li>Explore Services</li>
                <li>Our Service Offerings</li>
                <li>Hire for Specific Skills</li>
                <li>Customer Reviews</li>
                <li>How to Hire</li>
                <li>Interview Q/A</li>
                <li>Hiring Resources</li>
              </ul>
            </div>
            <div className='p-16'>
              <h3 className={style}>Developers</h3>
              <ul className={style1}>
                <li>Apply for Jobs</li>
                <li>Developer Login</li>
                <li>Remote Developer Jobs</li>
                <li>Developer Reviews</li>
                <li>Knowledge Base</li>
                <li>Resume Guide</li>
                <li>Jobs for LatAm</li>
              </ul>
            </div>
            <div className='p-16'>
              <h3 className={style}>Company</h3>
              <ul className={style1}>
                <li>Blog</li>
                <li>Press</li>
                <li>About Us</li>
                <li>Careers</li>
              </ul>
            </div>
            <div className='p-16'>
              <h3 className={style}>Contact</h3>
              <ul className={style1}>
                <li>Contact Us</li>
                <li>Help Center</li>
                <li>Developer Support</li>
                <li>Customer Support</li>
              </ul>
            </div>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div className='bg-black '>
            <div>2024 Turing</div>
            <p>900 Embarcadero Road Palo Alto, CA, 94303</p>
            <div></div>
            <div></div>
          </div>
        </div>
      </footer>
    </div>
  )
}
export default HireDevPage
