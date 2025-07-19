import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  "https://cdn.pixabay.com/photo/2023/10/26/18/18/coneflower-8343278_1280.jpg",
  "https://cdn.pixabay.com/photo/2023/08/22/16/23/cat-8206798_1280.jpg",
  "https://cdn.pixabay.com/photo/2024/05/26/10/55/bird-8788491_1280.jpg",
  "https://cdn.pixabay.com/photo/2024/04/23/11/49/rose-8714959_1280.jpg",
];

function ManualSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className="max-w-[1200px] h-[580px] w-full m-auto py-16 px-4 relative group">
      <div
        style={{ backgroundImage: `url(${slides[currentIndex]})` }}
        className="w-full h-full rounded-2xl bg-center bg-cover duration-500"
      ></div>

      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <ChevronLeft onClick={prevSlide} size={30} />
      </div>

      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <ChevronRight onClick={nextSlide} size={30} />
      </div>

      <div className="flex top-4 justify-center py-2">
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className={`text-2xl cursor-pointer mx-2 ${currentIndex === slideIndex ? "text-white" : "text-gray-400"}`}
          >
            ●
          </div>
        ))}
      </div>
    </div>
  );
}

export default ManualSlider;
