import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      image: "https://checkout.mueblesamerica.mx/media/wysiwyg/MA_2025_PANTALLIZATE_HOMESLIDE_DESKTOP_PRODUCTOS_SELECCIONADOS_2160X600_1.jpg",
      title: "PANTALLIZATE",
      subtitle: "Hasta 40% de descuento en productos seleccionados",
      buttonText: "Ver promoción",
      link: "/outlet-ma.html"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-[300px] md:h-[400px] overflow-hidden">
      {/* Slides */}
      <div 
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={slide.id} className="w-full h-[300px] md:h-[400px] flex-shrink-0 relative">
            <div
              className="w-full h-full bg-cover bg-center"
              style={{
                backgroundImage: `url(${slide.image})`
              }}
            >
              {/* Overlay content is already in the image */}
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 p-2 rounded-full transition-all"
      >
        <ChevronLeft className="w-6 h-6 text-gray-700" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 p-2 rounded-full transition-all"
      >
        <ChevronRight className="w-6 h-6 text-gray-700" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              currentSlide === index ? 'bg-white' : 'bg-white bg-opacity-50'
            }`}
          />
        ))}
        <button className="w-3 h-3 rounded-full bg-white bg-opacity-50" />
        <button className="w-3 h-3 rounded-full bg-white bg-opacity-50" />
        <button className="w-3 h-3 rounded-full bg-white bg-opacity-50" />
      </div>
    </div>
  );
};

export default HeroCarousel;