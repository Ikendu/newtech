import {
  ControlIcon,
  EfficiencyIcon,
  ExpertIcon,
  EyeIcon,
  GlobalIcon,
  MatchingIcon,
  PaymentIcon,
  ThumbIcon,
  VettingIcon,
} from '../assets/Icons'

const MorePage = () => {
  const styleButton = 'border mr-3 p-3 px-7 text-lg  rounded border-blue-500 font-semibold '
  const style2 = 'py-5 text-4xl font-semibold text-green-500'
  const style3 = 'text-lg'
  const style4 = 'text-6xl font-semibold py-4 '

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
          <button className={styleButton + `bg-blue-700  text-slate-200`}>Hire Developers</button>
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
          <button className={styleButton + `bg-blue-700  text-slate-200`}>
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
          <button className={styleButton + `bg-blue-700  text-slate-200`}>Apply for Jobs</button>
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
            <ul className='list -ml-5'>
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
              <li className='p-2 bg-blue-50 rounded-xl my-4 font-semibold text-blue-600 text-lg flex gap-2 items-center '>
                <GlobalIcon />
                Global Sourcing
              </li>
              <li className='p-2 bg-blue-50 rounded-xl  font-semibold text-blue-600 text-lg flex gap-2 items-center'>
                <VettingIcon />
                Itelligent Vet ting
              </li>
              <li className='p-2 bg-blue-50 rounded-xl my-4 font-semibold text-blue-600 text-lg flex gap-2 items-center'>
                <MatchingIcon /> Extensive Matching
              </li>
              <li className='p-2 bg-blue-50 rounded-xl my-4 font-semibold text-blue-600 text-lg flex gap-2 items-center'>
                <PaymentIcon /> Payments Compliance
              </li>
              <li className='p-2 bg-blue-50 rounded-xl my-4 font-semibold text-blue-600 text-lg flex gap-2 '>
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
            <ul className='list'>
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
        <div className='grid grid-cols-3 px-16 gap-10'>
          <div>
            <h4 className='flex gap-3 items-center text-lg font-semibold text-gray-700'>
              <div className='p-1 bg-green-50  rounded-md text-green-600 shadow'>
                <ThumbIcon />
              </div>
              Quality
            </h4>
            <h3 className={style2}>95% trial success rate</h3>
            <p className={style3}>for smarter, more productive teams</p>
          </div>
          <div>
            <h4 className='flex gap-3 items-center text-lg font-semibold text-gray-700'>
              <div className='p-1 bg-green-50  rounded-md text-green-600 shadow'>
                <EfficiencyIcon />
              </div>
              Efficiency
            </h4>
            <h3 className={style2}>97% engagement success</h3>
            <p className={style3}>for accelerated results with greater efficiency</p>
          </div>
          <div>
            <h4 className='flex gap-3 items-center text-lg font-semibold text-gray-700'>
              <div className='p-1 bg-green-50  rounded-md text-green-600 shadow'>
                <ExpertIcon />
              </div>
              Expertise
            </h4>
            <h4></h4>
            <h3 className={style2}>125+ combined years of experience</h3>
            <p className={style3}>for truly transformational outcomes</p>
          </div>
        </div>
      </div>
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
    </>
  )
}
export default MorePage
