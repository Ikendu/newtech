import {
  ControlIcon,
  EyeIcon,
  GlobalIcon,
  MatchingIcon,
  PaymentIcon,
  VettingIcon,
} from '../assets/Icons'

const GoalPage = () => {
  return (
    <div>
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
    </div>
  )
}
export default GoalPage
