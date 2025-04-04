import React, { useState, useEffect, useRef } from "react";

const Slider = () => {
  const carouselRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slideWidth, setSlideWidth] = useState(
    window.innerWidth > 800 ? 800 : window.innerWidth * 0.9
  );
  const [slideHeight, setSlideHeight] = useState(
    window.innerWidth > 800 ? 400 : window.innerWidth * 0.5
  );

  const items = [
    { id: 1, src: "aaron-huber-G7sE2S4Lab4-unsplash.jpg", alt: "Slide 1" },
    { id: 2, src: "anton-SnKfmC1I9fU-unsplash.jpg", alt: "Slide 2" },
    { id: 3, src: "lotus-design-n-print-l_M3usPiEuM-unsplash.jpg", alt: "Slide 3" },
  ];

  // Function to handle resizing
  useEffect(() => {
    const handleResize = () => {
      const newWidth = window.innerWidth > 800 ? 800 : window.innerWidth * 0.9;
      const newHeight = window.innerWidth > 800 ? 400 : window.innerWidth * 0.5;

      setSlideWidth(newWidth);
      setSlideHeight(newHeight);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Move to the next slide
  const showNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  // Move to the previous slide
  const showPrevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
  };

  // Autoplay functionality
  useEffect(() => {
    const autoplay = setInterval(showNextSlide, 3000);
    return () => clearInterval(autoplay); // Cleanup interval on unmount
  }, []);

  return (
    <>
      <div
        className="carousel-container-slider"
        style={{ width: `${slideWidth}px`, height: `${slideHeight}px` }}
      >
        <div
          className="carousel"
          ref={carouselRef}
          style={{
            transform: `translateX(-${currentIndex * slideWidth}px)`,
            transition: "transform 0.5s ease-in-out",
          }}
        >
          {items.map((item) => (
            <div
              className="carousel-item-slider"
              key={item.id}
              style={{ minWidth: `${slideWidth}px`, height: `${slideHeight}px` }}
            >
              <img src={item.src} alt={item.alt} />
            </div>
          ))}
        </div>
        <button className="carousel-btn prev" onClick={showPrevSlide}>
          ←
        </button>
        <button className="carousel-btn next" onClick={showNextSlide}>
          →
        </button>
      </div>

      <style>
        {`
          .carousel-container-slider {
            position: relative;
            max-width: 100%;
            overflow: hidden;
            border: 2px solid #ccc;
            border-radius: 10px;
            background: #000;
            margin: auto;
          }

          .carousel {
            display: flex;
          }

          .carousel-item-slider {
            flex-shrink: 0;
          }

          .carousel-item-slider img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }

          .carousel-btn {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            background-color: rgba(0, 0, 0, 0.5);
            color: #fff;
            border: none;
            cursor: pointer;
            padding: 10px 15px;
            font-size: 18px;
            z-index: 10;
            border-radius: 5px;
          }

          .carousel-btn.prev {
            left: 10px;
          }

          .carousel-btn.next {
            right: 10px;
          }

          .carousel-btn:hover {
            background-color: rgba(0, 0, 0, 0.8);
          }

          @media (max-width: 800px) {
            .carousel-container-slider {
              width: 90%;
              height: 50vh;
            }

            .carousel-item-slider {
              height: 50vh;
            }
          }

          @media (max-width: 500px) {
            .carousel-container-slider {
              width: 95%;
              height: 40vh;
            }

            .carousel-item-slider {
              height: 40vh;
            }

            .carousel-btn {
              padding: 8px 12px;
              font-size: 16px;
            }
          }
        `}
      </style>
    </>
  );
};

export default Slider;
