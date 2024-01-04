import { EfficiencyIcon, ExpertIcon, ThumbIcon } from '../assets/Icons'

const style2 = 'py-5 text-4xl font-semibold text-green-500'
const style3 = 'text-lg'

const TrustPage = () => {
  return (
    <div>
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
    </div>
  )
}
export default TrustPage
