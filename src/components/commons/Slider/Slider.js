import { Carousel } from "react-bootstrap";
import "./Slider.css";

const Slider = ({ slides }) => {
  // I had to downgrade the react-bootstrap version because of some UI bugs related to the carousel.
  // https://github.com/react-bootstrap/react-bootstrap/issues/5143

  const generateSlides = (slides) => {
    return slides.map((slide) => {
      const { id, src, alt, title } = slide;
      return (
        <Carousel.Item key={id}>
          <img className="d-block w-100" src={src} alt={alt} />
          <Carousel.Caption>
            <h3>{title}</h3>
          </Carousel.Caption>
        </Carousel.Item>
      );
    });
  };

  return (
    <Carousel fade indicators={true} nextLabel="" prevLabel="">
      {slides?.length > 0 && generateSlides(slides)}
    </Carousel>
  );
};

export default Slider;
