import {
  ControlIcon,
  EfficiencyIcon,
  EyeIcon,
  GlobalIcon,
  MatchingIcon,
  PaymentIcon,
  ThumbIcon,
  VettingIcon,
} from '../assets/Icons'

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
      <div className='p-20 pt-24 grid grid-cols-2 gap-20 '>
        <div>
          <h3 className='text-gray-500 font-bold pb-2'>FOR DEVELOPERS</h3>
          <p className='text-gray-800 font-semibold text-4xl pb-4  leading-snug'>
            Get AI-matched to high-paying U.S. tech jobs
          </p>
          <p className='pb-7 text-gray-800 text-lg'>
            Once you pass our vetting process, you’ll enjoy opportunities with top clients who need
            your expert skills.
          </p>
          <button className={style + `bg-blue-700  text-slate-200`}>Apply for Jobs</button>
        </div>
        <div>
          <img src='career.svg' />
        </div>
      </div>
      <div className='p-20  bg-gray-100'>
        <h2 className='font-semibold text-5xl text-center text-gray-800 pb-14'>
          Our global reach and AI help you build faster
        </h2>
        <div className='grid grid-cols-3 gap-10 '>
          <div className='bg-white rounded-xl p-16 mx-4 shadow-md shadow-slate-500'>
            <div className='p-2 content-center'>
              <img src='./a.svg' />
            </div>
            <h3 className='font-semibold text-xl mb-2'>We take your specific requirements</h3>
            <ul>
              <li className='p-2'>Project scope</li>
              <li className='p-2'>Roles</li>
              <li className='p-2'>Tech stacks</li>
              <li className='p-2'>Tech stacks</li>
              <li className='p-2'>Seniority levels</li>
              <li className='p-2'>Time zone overlap</li>
            </ul>
          </div>
          <div className='bg-white rounded-xl mx-auto p-16 shadow-lg shadow-slate-700'>
            <h3 className='font-semibold text-2xl mb-2 text-center'>
              And use our global developer platform to handle
            </h3>
            <ul className=''>
              <li className='p-2 bg-blue-50 rounded-xl my-10 font-semibold text-blue-600 text-lg flex gap-2 items-center '>
                <GlobalIcon />
                Global Sourcing
              </li>
              <li className='p-2 bg-blue-50 rounded-xl  font-semibold text-blue-600 text-lg flex gap-2 items-center'>
                <VettingIcon />
                Itelligent Vet ting
              </li>
              <li className='p-2 bg-blue-50 rounded-xl my-10 font-semibold text-blue-600 text-lg flex gap-2 items-center'>
                <MatchingIcon /> Extensive Matching
              </li>
              <li className='p-2 bg-blue-50 rounded-xl my-10 font-semibold text-blue-600 text-lg flex gap-2 items-center'>
                <PaymentIcon /> Payments Compliance
              </li>
              <li className='p-2 bg-blue-50 rounded-xl my-10 font-semibold text-blue-600 text-lg flex gap-2 '>
                <ControlIcon /> Automated On-The-Job Quality Control
              </li>
            </ul>
            <button className='flex gap-4 bg-blue-600 p-3 rounded-md w-full items-center text-white'>
              <EyeIcon />
              See how it works
            </button>
          </div>
          <div className='bg-white rounded-xl p-16 mx-4 shadow-md shadow-slate-500'>
            <div className='p-2 content-center'>
              <img src='./a.svg' />
            </div>
            <h3 className='font-semibold text-xl mb-2'>We take your specific requirements</h3>
            <ul>
              <li className='p-2'>Project scope</li>
              <li className='p-2'>Roles</li>
              <li className='p-2'>Tech stacks</li>
              <li className='p-2'>Tech stacks</li>
              <li className='p-2'>Seniority levels</li>
              <li className='p-2'>Time zone overlap</li>
            </ul>
          </div>
        </div>
      </div>
      <div className='p-10 mx-10'>
        <h3 className='text-3xl font-semibold text-center pb-20'>Why businesses trust Turing</h3>
        <div className='grid grid-cols-3'>
          <div>
            <h4 className='flex gap-3 items-center text-lg font-semibold text-gray-700'>
              <div className='p-1 bg-green-50  rounded-md text-green-600 shadow'>
                <ThumbIcon />
              </div>
              Quality
            </h4>
            <h3>95% trial success rate</h3>
            <p>for smarter, more productive teams</p>
          </div>
          <div>
            <h4 className='flex gap-3 items-center text-lg font-semibold text-gray-700'>
              <div className='p-1 bg-green-50  rounded-md text-green-600 shadow'>
                <EfficiencyIcon />
              </div>
              Efficiency
            </h4>
            <h3>97% engagement success</h3>
            <p>for accelerated results with greater efficiency</p>
          </div>
          <div>
            <h4 className='flex gap-3 items-center text-lg font-semibold text-gray-700'>
              <div className='p-1 bg-green-50  rounded-md text-green-600 shadow'>
                <EfficiencyIcon />
              </div>
              Expertise
            </h4>
            <h4></h4>
            <h3>125+ combined years of experience</h3>
            <p>for truly transformational outcomes</p>
          </div>
        </div>
      </div>
    </>
  )
}
export default MorePage
