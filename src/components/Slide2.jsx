import Slider from 'react-slick'
import { slides2 } from './lists'

const Slide2 = () => {
  const settings = {
    customPaging: function (i) {
      return (
        <a>
          <img src={`abstract0${i + 1}.jpg`} />
        </a>
      )
    },
    dots: true,
    dotsClass: 'slick-dots slick-thumb',
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  return (
    <div>
      <Slider {...settings}>
        {slides2.map((slide, idx) => {
          return (
            <div key={idx}>
              <div>
                <img src={slide.url} />
              </div>
            </div>
          )
        })}
      </Slider>
    </div>
  )
}
export default Slide2
