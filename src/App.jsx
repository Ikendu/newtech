import FrontPage from './components/FrontPage'
import HeaderPage from './components/HeaderPage'
import HireDevPage from './components/HireDevPage'
import MorePage from './components/MorePage'
import ReviewPage from './components/ReviewPage'

function App() {
  return (
    <div>
      <div className='mx-20 my-8'>
        <HeaderPage />
        <FrontPage />
      </div>
      <MorePage />
      <ReviewPage />
      <HireDevPage />
    </div>
  )
}

export default App
