import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
type Carrousel = {
  children: React.ReactNode;
};
const Carrousel = ({ children }: Carrousel) => {
  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    dots: true,
  };
  return <Slider {...settings}>{children}</Slider>;
};

export default Carrousel;
