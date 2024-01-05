import { slides } from './lists'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'

const Slider1 = () => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }
  return (
    <div className='m-10'>
      <Slider {...settings}>
        {slides.map((slide, idx) => {
          return (
            <div key={idx} className='py-0 px-3 ' style={{ margin: `4px` }}>
              <div className=''>
                <img className='rounded-2xl' src={slide.url} />
              </div>
              <div>{slide.review}</div>
            </div>
          )
        })}
      </Slider>
    </div>
  )
}
export default Slider1
