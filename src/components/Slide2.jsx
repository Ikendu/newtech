import Slider from 'react-slick'
import { slides2 } from './lists'

import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader
import { Carousel } from 'react-responsive-carousel'

const Slide2 = () => {
  return (
    <div>
      <Carousel>
        {slides2.map((slide, idx) => {
          return (
            <div key={idx}>
              <img src={slide.url} />
            </div>
          )
        })}
      </Carousel>
    </div>
  )
}
export default Slide2
