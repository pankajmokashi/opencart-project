import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import { useState, useEffect, useRef } from "react";

function Carousel() {
  const [curr, setCurr] = useState(0);
  const totalSlides = 2;

  const intervalRef = useRef(null);

  useEffect(() => {
    // Automatically move to the next slide every 3 seconds
    intervalRef.current = setInterval(() => {
      setCurr((prev) => (prev + 1) % totalSlides); // Cycle through slides
    }, 3000);

    // Clear interval on component unmount
    return () => clearInterval(intervalRef.current);
  }, []);

  useEffect(() => {
    // Manually handle class updates for dot indicators
    if (curr === 0) {
      document.getElementById("button-back").click();
    } else if (curr === 1) {
      document.getElementById("button-next").click();
    }
  }, [curr]);

  return (
    <CarouselProvider
      naturalSlideWidth={100}
      naturalSlideHeight={30}
      totalSlides={totalSlides}
    >
      <Slider className="shadow-md border">
        <Slide index={0}>
          <img className="w-full" src="/catalog/iPhone6.jpg" alt="iPhone6" />
        </Slide>
        <Slide index={1}>
          <img
            className="mx-auto"
            src="/catalog/MacBookAir.jpg"
            alt="mac_laptops"
          />
        </Slide>
      </Slider>
      <div className="pt-4 flex justify-center gap-4">
        <ButtonBack
          id="button-back"
          onClick={() => setCurr(0)}
          className={`w-3 h-3 rounded-full ${
            curr === 0 ? "bg-slate-600" : "bg-slate-400"
          }`}
        />
        <ButtonNext
          id="button-next"
          onClick={() => setCurr(1)}
          className={`w-3 h-3 rounded-full ${
            curr === 1 ? "bg-slate-600" : "bg-slate-400"
          }`}
        />
      </div>
    </CarouselProvider>
  );
}

export default Carousel;
