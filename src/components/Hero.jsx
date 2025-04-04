import { useEffect } from "react";
import { Link } from 'react-router-dom';

const Hero = () => {
    useEffect(() => {
        const carousel = document.querySelector("#carouselExampleFade");
        const captions = document.querySelectorAll(".carousel-caption");

        const handleSlideChange = () => {
            captions.forEach((caption) => {
                caption.style.opacity = "0"; // Reset all captions
            });

            const activeSlide = document.querySelector(".carousel-item.active .carousel-caption");
            if (activeSlide) {
                activeSlide.style.opacity = "1";
                activeSlide.style.transition = "opacity 1s ease-in-out";
            }
        };

        // Attach event listener to Bootstrap's carousel event
        carousel.addEventListener("slid.bs.carousel", handleSlideChange);

        // Initial fade-in effect on page load
        handleSlideChange();

        return () => {
            carousel.removeEventListener("slid.bs.carousel", handleSlideChange);
        };
    }, []);

    return (
        <>
            <header>
                <div id="carouselExampleFade" className="carousel slide carousel-fade pb-2" data-bs-ride="carousel" data-bs-interval="5000">
                    <div className="carousel-inner carousel-hero">
                        <div className="carousel-item active position-relative">
                            <img src="/hero-img-lg.jpg" className="d-block w-100" alt="photo-1"
                                style={{ height: "770px", objectFit: "cover", objectPosition: "center", width: "auto", opacity: "0.9", filter: "brightness(60%)" }} />
                            <div className="container-fluid carousel-caption d-flex flex-column text-center fade-in" style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                                <div className="container">
                                    <div className="col-lg-12">
                                        <div className="row pt-5">
                                            <h1 className="text-white title-carousel carousel-text-shadow hero-carousel-main-text">Professional Cleaning Services</h1>
                                        </div>
                                        <div className="row pt-4">
                                            <p className="text-white tertiary-subtitle-text carousel-text-shadow">We provide top-quality cleaning for homes and offices.</p>
                                        </div>
                                        <div className="row d-flex justify-content-center pt-5">
                                            <div className="col">
                                                <Link to="/booking">
                                                    <button className="custom-btn-container custom-btn mt-2 text-center px-5 py-2">Book Now</button>
                                                </Link>
                                            </div>
                                        </div>
                                    </div> 
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item position-relative">
                            <img src="/hero1-img-lg.jpg" className="d-block w-100" alt="photo-2"
                                style={{ height: "770px", objectFit: "cover", objectPosition: "center", width: "auto", opacity: "0.9", filter: "brightness(60%)" }} />
                            <div className="container-fluid carousel-caption d-flex flex-column text-center fade-in" style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                                <div className="container">
                                    <div className="col-lg-12">
                                        <div className="row">
                                            <h1 className="text-white title-carousel carousel-text-shadow hero-carousel-main-text">Reliable and Affordable</h1>
                                        </div>
                                        <div className="row pt-4">
                                            <p className="text-white tertiary-subtitle-text carousel-text-shadow">Experience the best cleaning solutions.</p>
                                        </div>
                                        <div className="row d-flex justify-content-center pt-5">
                                        <div className="col">
                                            <Link to="/services">
                                                <button className="custom-btn-container custom-btn mt-2 text-center px-5 py-2">Learn More</button>
                                            </Link>
                                            </div>
                                        </div>
                                    </div> 
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item position-relative">
                            <img src="/hero2-img-lg.jpg" className="d-block w-100" alt="photo-3"
                                style={{ height: "770px", objectFit: "cover", objectPosition: "center", width: "auto", opacity: "0.9", filter: "brightness(60%)" }} />
                            <div className="container-fluid carousel-caption d-flex flex-column text-center fade-in" style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                                <div className="container">
                                    <div className="col-lg-12">
                                        <div className="row">
                                            <h1 className="text-white title-carousel carousel-text-shadow hero-carousel-main-text">Spotless Cleaning Everytime</h1>
                                        </div>
                                        <div className="row pt-4">
                                            <p className="text-white tertiary-subtitle-text carousel-text-shadow">Book a service today for a cleaner tomorrow.</p>
                                        </div>
                                        <div className="row d-flex justify-content-center pt-5">
                                        <div className="col">
                                                <Link to="/contact">
                                                    <button className="custom-btn-container custom-btn mt-2 text-center px-5 py-2">Contact Us</button>
                                                </Link>
                                            </div>
                                        </div>
                                    </div> 
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Adjusted Navigation Buttons */}
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev"
                        style={{ left: "-50px" }}>
                        <span className="carousel-control-prev-icon custom-carousel-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next"
                        style={{ right: "-50px" }}>
                        <span className="carousel-control-next-icon custom-carousel-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </header>

            <style>
                {`
                    .carousel {
                        overflow: hidden; /* Ensures no content spills out */
                    }

                    .custom-carousel-icon {
                        transform: scale(1.0);
                        width: 60px;
                        height: 60px;
                    } 

                    .carousel-caption {
                        position: absolute;
                        top: -10%;
                        bottom: 0;
                        left: 0;
                        right: 0;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        text-align: center;
                    }
                `}
            </style>
        </>
    );
};

export default Hero;
