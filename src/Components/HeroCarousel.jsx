import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const slides = [
  // If the file is in /public, use a root path like "/war-zone-landscape-with-apocalyptic-destruction.jpg"
  { id: 1, title: "Title 1", subtitle: "Subtitle 1", text: "Text area 1", image: "https://www.airswift.com/hs-fs/hubfs/Imported_Blog_Media/FEATURED-safetymoment-natural-disasters.jpg?width=690&name=FEATURED-safetymoment-natural-disasters.jpg" },
  { id: 2, title: "Title 2", subtitle: "Subtitle 2", text: "Text area 2", image: "/src/assets/hero2.jpg" },
  { id: 3, title: "Title 3", subtitle: "Subtitle 3", text: "Text area 3", image: "https://i.pinimg.com/736x/79/75/21/79752188e3149b727dcd6558d4211c27.jpg" },
];

// Reusable arrow button
const ArrowButton = ({ direction, onClick }) => {
  const isLeft = direction === "left";
  return (
    <button
      type="button"
      aria-label={isLeft ? "Previous" : "Next"}
      onClick={onClick}
      className={[
        "absolute top-1/2 -translate-y-1/2 z-20",
        // place just outside on md+; inside on small screens
        isLeft ? "left-2 md:-left-6" : "right-2 md:-right-6",
        "w-10 h-10 rounded-full bg-black/70 hover:bg-black/80 transition",
        "flex items-center justify-center shadow-lg"
      ].join(" ")}
    >
      {isLeft ? (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      ) : (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      )}
    </button>
  );
};

function HeroCarousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    // Custom arrows
    nextArrow: <ArrowButton direction="right" />,
    prevArrow: <ArrowButton direction="left" />,
    // Custom dots: 3 small subtle black circles
    customPaging: () => (
      <button className="w-2.5 h-2.5 rounded-full bg-[#474747] block" />
    ),
    dotsClass: "slick-dots custom-dots", // we’ll style this in index.css
  };

  return (
    <div className="w-full">
      {/* Smaller, centered container + rounded corners */}
      <div className="max-w-6xl mx-auto px-4">
        <div className="relative rounded-[32px] overflow-hidden shadow-2xl">
          <Slider {...settings}>
            {slides.map((slide) => (
              <div key={slide.id}>
                {/* “Picture box” height reduced; responsive */}
                <div className="relative h-[360px] sm:h-[420px] md:h-[500px]">
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="w-full h-full object-cover"
                  />
                  {/* Dark overlay */}
                  <div className="absolute inset-0 bg-black/40" />
                  {/* Text content */}
                  <div className="absolute inset-0 flex flex-col justify-center items-start px-8 sm:px-12 text-white">
                    <h2 className="text-3xl sm:text-4xl font-bold">{slide.title}</h2>
                    <h4 className="text-lg sm:text-xl mt-2 opacity-90">{slide.subtitle}</h4>
                    <p className="mt-4 max-w-xl opacity-80">{slide.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default HeroCarousel;