import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';


const Services = () => {
 
    return (
        <>
            <div className="container-fluid text-center py-4">
                <div className="row d-flex justify-content-center">
                    <div className="col-lg-5">
                        <h1 className="title-text py-5"><strong>Why Hire Us?</strong></h1>
                        <p className="sub-title-text">Choose us because of our reputation for excellence. For more than 10 years, we&apos;ve earned a name for quality and customer service. The homeowners we serve rely on us for detail-oriented, consistent cleaning services, every single time we clean their homes.</p>
                    </div>
                </div>

                {/* Our Services for small screens */}
                <div className="row d-flex justify-content-center pt-5 d-block d-sm-none">
                    <div className="col-auto">
                        <div id="carouselExampleSlidesOnly" className="carousel slide our-services-carousel-slide" data-bs-ride="carousel">
                        <div className="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleSlidesOnly" data-bs-slide-to="0" className="active carousel-indicator" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleSlidesOnly" data-bs-slide-to="1" aria-label="Slide 2" className='carousel-indicator'></button>
                            <button type="button" data-bs-target="#carouselExampleSlidesOnly" data-bs-slide-to="2" aria-label="Slide 3" className='carousel-indicator'></button>
                            <button type="button" data-bs-target="#carouselExampleSlidesOnly" data-bs-slide-to="3" aria-label="Slide 4" className='carousel-indicator'></button>
                            <button type="button" data-bs-target="#carouselExampleSlidesOnly" data-bs-slide-to="4" aria-label="Slide 5" className='carousel-indicator'></button>
                            <button type="button" data-bs-target="#carouselExampleSlidesOnly" data-bs-slide-to="5" aria-label="Slide 6" className='carousel-indicator'></button>
                            <button type="button" data-bs-target="#carouselExampleSlidesOnly" data-bs-slide-to="6" aria-label="Slide 7" className='carousel-indicator'></button>
                            <button type="button" data-bs-target="#carouselExampleSlidesOnly" data-bs-slide-to="7" aria-label="Slide 8" className='carousel-indicator'></button>
                            <button type="button" data-bs-target="#carouselExampleSlidesOnly" data-bs-slide-to="8" aria-label="Slide 9" className='carousel-indicator'></button>
                        </div>
                            <div className="carousel-inner">
                                <div className="carousel-item active our-services-slide">
                                    <Link to={`/servicesview/${1}`}><img src="service-img-1.jpg" alt="" className='d-block w-60 mx-auto img-fluid' id="our-services-img"/></Link>
                                    <h3 className='pt-4 pb-3'>Apartment Cleaning</h3>
                                    <p>Cleaning Company offers a program designed to service residents of apartments and condominiums.</p>
                                    <Link to={`/servicesview/${1}`}>READ MORE</Link>
                                </div>
                                <div className="carousel-item our-services-slide">
                                    <Link to={`/servicesview/${2}`}><img src="service-img-2.jpg" alt="" className='d-block w-60 mx-auto img-fluid' id="our-services-img"/></Link>
                                    <h3 className='pt-4 pb-3'>House Cleaning</h3>
                                    <p>Cleaning Company offers a program designed to service residents of apartments and condominiums.</p>
                                    <Link to={`/servicesview/${2}`}>READ MORE</Link>
                                </div>
                                <div className="carousel-item our-services-slide">
                                    <Link to={`/servicesview/${3}`}><img src="service-img-3.jpg" alt="" className='d-block w-60 mx-auto img-fluid' id="our-services-img"/></Link>
                                    <h3 className='pt-4 pb-3'>Move In / Move Out</h3>
                                    <p>In fact, many people say that moving is one of the most stressful and exhausting life experiences.</p>
                                    <Link to={`/servicesview/${3}`}>READ MORE</Link>
                                </div>
                                <div className="carousel-item our-services-slide">
                                    <Link to={`/servicesview/${4}`}><img src="service-img-4.jpg" alt="" className='img-fluid' id="our-services-img"/></Link>
                                    <h3 className='pt-4 pb-3'>Carpet Cleaning</h3>
                                    <p>When you choose us, you get a deeper clean, faster-drying carpets and a healthier home.</p>
                                    <Link to={`/servicesview/${4}`}>READ MORE</Link>
                                </div>
                                <div className="carousel-item our-services-slide">
                                    <Link to={`/servicesview/${5}`}><img src="service-img-5.jpg" alt="" className='img-fluid' id="our-services-img"/></Link>
                                    <h3 className='pt-4 pb-3'>After Renovation</h3>
                                    <p>Anyone who has done a renovation project knows the mess that comes with it.</p>
                                    <Link to={`/servicesview/${5}`}>READ MORE</Link>
                                </div>
                                <div className="carousel-item our-services-slide">
                                    <Link to={`/servicesview/${6}`}><img src="service-img-6.jpg" alt="" className='img-fluid' id="our-services-img"/></Link>
                                    <h3 className='pt-4 pb-3'>Curtain Cleaning</h3>
                                    <p>We will take down uninstall your curtains and dry-clean right on the spot!</p>
                                    <Link to={`/servicesview/${6}`}>READ MORE</Link>
                                </div>
                                <div className="carousel-item our-services-slide">
                                    <Link to={`/servicesview/${7}`}><img src="service-img-7.jpg" alt="" className='img-fluid' id="our-services-img"/></Link>
                                    <h3 className='pt-4 pb-3'>Window Cleaning</h3>
                                    <p>Indulge in high-quality window cleaning from bonded professionals.</p>
                                    <Link to={`/servicesview/${7}`}>READ MORE</Link>
                                </div>
                                <div className="carousel-item our-services-slide">
                                    <Link to={`/servicesview/${8}`}><img src="service-img-8.jpg" alt="" className='img-fluid' id="our-services-img"/></Link>
                                    <h3 className='pt-4 pb-3'>Commercial Cleaning</h3>
                                    <p>Anyone who has done a renovation project knows the mess that comes with it.</p>
                                    <Link to={`/servicesview/${8}`}>READ MORE</Link>
                                </div>
                                <div className="carousel-item our-services-slide">
                                    <Link to={`/servicesview/${9}`}><img src="service-img-9.jpg" alt="" className='img-fluid' id="our-services-img"/></Link>
                                    <h3 className='pt-4 pb-3'>Residential Cleaning</h3>
                                    <p>We will take down uninstall your curtains and dry-clean right on the spot!</p>
                                    <Link to={`/servicesview/${9}`}>READ MORE</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                

                {/* Our Services for large screens */}
                <div className="row d-flex justify-content-center our-services-row-1">
                    <div className="col-auto px-4">
                        <div className="our-services pt-5 d-none d-sm-block">
                            <Link to={`/servicesview/${1}`}><img src="service-img-1.jpg" alt="" className='img-fluid' id="our-services-img"/></Link>
                            <h3 className='pt-4 pb-3'>Apartment Cleaning</h3>
                            <p>Cleaning Company offers a program designed to service residents of apartments and condominiums.</p>
                            <Link to={`/servicesview/${1}`}>READ MORE</Link>
                        </div>
                    </div>
                    <div className="col-auto px-4">
                        <div className="our-services pt-5 d-none d-sm-block">
                            <Link to={`/servicesview/${2}`}><img src="service-img-2.jpg" alt="" className='img-fluid' id="our-services-img"/></Link>
                            <h3 className='pt-4 pb-3'>House Cleaning</h3>
                            <p>Cleaning Company offers a program designed to service residents of apartments and condominiums.</p>
                            <Link to={`/servicesview/${2}`}>READ MORE</Link>
                        </div>
                    </div>
                    <div className="col-auto px-4">
                        <div className="our-services pt-5 d-none d-sm-block">
                            <Link to={`/servicesview/${3}`}><img src="service-img-3.jpg" alt="" className='img-fluid' id="our-services-img"/></Link>
                            <h3 className='pt-4 pb-3'>Move In / Move Out</h3>
                            <p>In fact, many people say that moving is one of the most stressful and exhausting life experiences.</p>
                            <Link to={`/servicesview/${3}`}>READ MORE</Link>
                        </div>
                    </div>
                </div>
                <div className="row d-flex justify-content-center our-services-row-2">
                    <div className="col-auto px-4">
                        <div className="our-services pt-5 d-none d-sm-block">
                            <Link to={`/servicesview/${4}`}><img src="service-img-4.jpg" alt="" className='img-fluid' id="our-services-img"/></Link>
                            <h3 className='pt-4 pb-3'>Carpet Cleaning</h3>
                            <p>When you choose us, you get a deeper clean, faster-drying carpets and a healthier home.</p>
                            <Link to={`/servicesview/${4}`}>READ MORE</Link>
                        </div>
                    </div>
                    <div className="col-auto px-4">
                        <div className="our-services pt-5 d-none d-sm-block">
                            <Link to={`/servicesview/${5}`}><img src="service-img-5.jpg" alt="" className='img-fluid' id="our-services-img"/></Link>
                            <h3 className='pt-4 pb-3'>After Renovation</h3>
                            <p>Anyone who has done a renovation project knows the mess that comes with it.</p>
                            <Link to={`/servicesview/${5}`}>READ MORE</Link>
                        </div>
                    </div>
                    <div className="col-auto px-4">
                        <div className="our-services pt-5 d-none d-sm-block">
                            <Link to={`/servicesview/${6}`}><img src="service-img-6.jpg" alt="" className='img-fluid' id="our-services-img"/></Link>
                            <h3 className='pt-4 pb-3'>Curtain Cleaning</h3>
                            <p>We will take down uninstall your curtains and dry-clean right on the spot!</p>
                            <Link to={`/servicesview/${6}`}>READ MORE</Link>
                        </div>
                    </div>
                </div>
                <div className="row d-flex justify-content-center our-services-row-3 pb-5">
                    <div className="col-auto px-4">
                        <div className="our-services pt-5 d-none d-sm-block">
                            <Link to={`/servicesview/${7}`}><img src="service-img-7.jpg" alt="" className='img-fluid' id="our-services-img"/></Link>
                            <h3 className='pt-4 pb-3'>Window Cleaning</h3>
                            <p>Indulge in high-quality window cleaning from bonded professionals.</p>
                            <Link to={`/servicesview/${7}`}>READ MORE</Link>
                        </div>
                    </div>
                    <div className="col-auto px-4">
                        <div className="our-services pt-5 d-none d-sm-block">
                            <Link to={`/servicesview/${8}`}><img src="service-img-8.jpg" alt="" className='img-fluid' id="our-services-img"/></Link>
                            <h3 className='pt-4 pb-3'>Commercial Cleaning</h3>
                            <p>Anyone who has done a renovation project knows the mess that comes with it.</p>
                            <Link to={`/servicesview/${8}`}>READ MORE</Link>
                        </div>
                    </div>
                    <div className="col-auto px-4">
                        <div className="our-services pt-5 d-none d-sm-block">
                            <Link to={`/servicesview/${9}`}><img src="service-img-9.jpg" alt="" className='img-fluid' id="our-services-img"/></Link>
                            <h3 className='pt-4 pb-3'>Residential Cleaning</h3>
                            <p>We will take down uninstall your curtains and dry-clean right on the spot!</p>
                            <Link to={`/servicesview/${9}`}>READ MORE</Link>
                        </div>
                    </div>
                </div>
                <div className="row d-flex justify-content-center py-5">
                    <div className="col-auto px-0 pb-2">
                        <div className="schedule-a-free-cleaning py-3 text-center">
                            <h1 className='pt-4 text-white'>Schedule a Free Cleaning Estimate Today</h1>
                            <p className='d-flex justify-content-center align-items-center'>
                                <svg xmlns="http://www.w3.org/2000/svg" height="30px" width="30px" viewBox="0 -960 960 960" fill="white">
                                    <path d="M760-480q0-117-81.5-198.5T480-760v-80q75 0 140.5 28.5t114 77q48.5 48.5 77 114T840-480h-80Zm-160 0q0-50-35-85t-85-35v-80q83 0 141.5 58.5T680-480h-80Zm198 360q-125 0-247-54.5T329-329Q229-429 174.5-551T120-798q0-18 12-30t30-12h162q14 0 25 9.5t13 22.5l26 140q2 16-1 27t-11 19l-97 98q20 37 47.5 71.5T387-386q31 31 65 57.5t72 48.5l94-94q9-9 23.5-13.5T670-390l138 28q14 4 23 14.5t9 23.5v162q0 18-12 30t-30 12ZM241-600l66-66-17-94h-89q5 41 14 81t26 79Zm358 358q39 17 79.5 27t81.5 13v-88l-94-19-67 67ZM241-600Zm358 358Z"/>
                                </svg>
                                <strong className='text-white px-2 primary-subtitle-text'>027-393-4412</strong>
                            </p>
                        </div>
                    </div>
                    <div className="col-md-12 px-0 pb-2">
                        <div className="schedule-a-free-cleaning-sm py-3 text-center">
                            <h1 className='pt-4 text-white'>Schedule a Free Cleaning Estimate Today</h1>
                            <p className='d-flex justify-content-center align-items-center px-3'>
                                <svg xmlns="http://www.w3.org/2000/svg" height="30px" width="30px" viewBox="0 -960 960 960" fill="white">
                                    <path d="M760-480q0-117-81.5-198.5T480-760v-80q75 0 140.5 28.5t114 77q48.5 48.5 77 114T840-480h-80Zm-160 0q0-50-35-85t-85-35v-80q83 0 141.5 58.5T680-480h-80Zm198 360q-125 0-247-54.5T329-329Q229-429 174.5-551T120-798q0-18 12-30t30-12h162q14 0 25 9.5t13 22.5l26 140q2 16-1 27t-11 19l-97 98q20 37 47.5 71.5T387-386q31 31 65 57.5t72 48.5l94-94q9-9 23.5-13.5T670-390l138 28q14 4 23 14.5t9 23.5v162q0 18-12 30t-30 12ZM241-600l66-66-17-94h-89q5 41 14 81t26 79Zm358 358q39 17 79.5 27t81.5 13v-88l-94-19-67 67ZM241-600Zm358 358Z"/>
                                </svg>
                                <strong className='text-white px-2 primary-subtitle-text'>027-393-4412</strong>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid py-5 our-clients-say">
                <div className="row">
                    <h1 className="primary-subtitle-text pt-3 pb-5 text-center"><strong>Additional Services</strong></h1>
                </div>
                <div className="d-flex align-items-center justify-content-center pb-3">
                    <div className="row d-flex justify-content-center">
                        <div className="col-lg-3 col-md-6 col-sm-12 px-2 d-flex justify-content-center">
                            <ul className='ul-style px-5'>
                                <li><strong className='check-icon px-1'>&#10003;</strong> TV/Accessories</li>
                                <li><strong className='check-icon px-1'>&#10003;</strong> Shelves</li>
                                <li><strong className='check-icon px-1'>&#10003;</strong> Picture Frames</li>
                                <li><strong className='check-icon px-1'>&#10003;</strong> Tables</li>
                                <li><strong className='check-icon px-1'>&#10003;</strong> Chairs</li>
                                <li><strong className='check-icon px-1'>&#10003;</strong> Lamps Lighting</li>
                            </ul>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 px-2 d-flex justify-content-center">
                            <ul className='ul-style px-5'>
                                <li><strong className='check-icon px-1'>&#10003;</strong> TV/Accessories</li>
                                <li><strong className='check-icon px-1'>&#10003;</strong> Shelves</li>
                                <li><strong className='check-icon px-1'>&#10003;</strong> Picture Frames</li>
                                <li><strong className='check-icon px-1'>&#10003;</strong> Tables</li>
                                <li><strong className='check-icon px-1'>&#10003;</strong> Chairs</li>
                                <li><strong className='check-icon px-1'>&#10003;</strong> Lamps Lighting</li>
                            </ul>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 px-2 d-flex justify-content-center">
                            <ul className='ul-style px-5'>
                                <li><strong className='check-icon px-1'>&#10003;</strong> TV/Accessories</li>
                                <li><strong className='check-icon px-1'>&#10003;</strong> Shelves</li>
                                <li><strong className='check-icon px-1'>&#10003;</strong> Picture Frames</li>
                                <li><strong className='check-icon px-1'>&#10003;</strong> Tables</li>
                                <li><strong className='check-icon px-1'>&#10003;</strong> Chairs</li>
                                <li><strong className='check-icon px-1'>&#10003;</strong> Lamps Lighting</li>
                            </ul>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 px-2 d-flex justify-content-center">
                            <ul className='ul-style px-5'>
                                <li><strong className='check-icon px-1'>&#10003;</strong> TV/Accessories</li>
                                <li><strong className='check-icon px-1'>&#10003;</strong> Shelves</li>
                                <li><strong className='check-icon px-1'>&#10003;</strong> Picture Frames</li>
                                <li><strong className='check-icon px-1'>&#10003;</strong> Tables</li>
                                <li><strong className='check-icon px-1'>&#10003;</strong> Chairs</li>
                                <li><strong className='check-icon px-1'>&#10003;</strong> Lamps Lighting</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid text-center pt-5">
                <h1 className='primary-subtitle-text py-5'><strong>Our Prices</strong></h1>
                <h5>Outstanding cleaning services with flat rate pricing. No hidden fees. No surprises.</h5>
                <div className="container py-5 swiper-container-outside">
                    <Swiper
                        // slidesPerView={4}
                        spaceBetween={0}
                        pagination={{
                            clickable: true,
                        }}
                        navigation={{
                            nextEl: '.custom-next', // Attach buttons with custom classes
                            prevEl: '.custom-prev',
                        }}                
                        modules={[ Pagination, Navigation ]}
                        breakpoints={{
                            640: {
                                slidesPerView: 1,
                            },
                            768: {
                                slidesPerView: 2,
                            },
                            1024: {
                                slidesPerView: 3,
                            },
                            1200: {
                                slidesPerView: 4,
                            },
                        }}                        
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <div className="col-auto our-prices">
                                <h4 className='py-4 our-prices-type my-0'>Apartment Cleaning</h4>
                                <div className='py-2 our-prices-rate my-0'>
                                    <strong className='sub-title-text green-color'>$</strong>
                                    <strong className='title-text green-color'>140</strong>
                                    <p className='px-3 pt-2'><Link to="/cleaningview/1">Click here</Link> for details</p>
                                </div>
                                <p className='py-3 our-prices-time my-0'>Estimated Time: 2 hrs 18 mins</p>
                                <p className='py-4 our-prices-button my-0'><button className='custom-btn-container custom-btn px-4 py-2'>BOOK NOW</button></p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="col-auto our-prices">
                                <h4 className='py-4 our-prices-type my-0'>House Cleaning</h4>
                                <div className='py-2 our-prices-rate my-0'>
                                    <strong className='sub-title-text green-color'>$</strong>
                                    <strong className='title-text green-color'>140</strong>
                                    <p className='px-3 pt-2'><Link to="/cleaningview/2">Click here</Link> for details</p>
                                </div>
                                <p className='py-3 our-prices-time my-0'>Estimated Time: 2 hrs 18 mins</p>
                                <p className='py-4 our-prices-button my-0'><button className='custom-btn-container custom-btn px-4 py-2'>BOOK NOW</button></p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="col-auto our-prices">
                                <h4 className='py-4 our-prices-type my-0'>Move In / Move Out</h4>
                                <div className='py-2 our-prices-rate my-0'>
                                    <strong className='sub-title-text green-color'>$</strong>
                                    <strong className='title-text green-color'>140</strong>
                                    <p className='px-3 pt-2'><Link to="/cleaningview/3">Click here</Link> for details</p>

                                </div>
                                <p className='py-3 our-prices-time my-0'>Estimated Time: 2 hrs 18 mins</p>
                                <p className='py-4 our-prices-button my-0'><button className='custom-btn-container custom-btn px-4 py-2'>BOOK NOW</button></p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="col-auto our-prices">
                                <h4 className='py-4 our-prices-type my-0'>After Renovation</h4>
                                <div className='py-2 our-prices-rate my-0'>
                                    <strong className='sub-title-text green-color'>$</strong>
                                    <strong className='title-text green-color'>140</strong>
                                    <p className='px-3 pt-2'><Link to="/cleaningview/5">Click here</Link> for details</p>
                                </div>
                                <p className='py-3 our-prices-time my-0'>Estimated Time: 2 hrs 18 mins</p>
                                <p className='py-4 our-prices-button my-0'><button className='custom-btn-container custom-btn px-4 py-2'>BOOK NOW</button></p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="col-auto our-prices">
                                <h4 className='py-4 our-prices-type my-0'>Residential Cleaning</h4>
                                <div className='py-2 our-prices-rate my-0'>
                                    <strong className='sub-title-text green-color'>$</strong>
                                    <strong className='title-text green-color'>140</strong>
                                    <p className='px-3 pt-2'><Link to="/cleaningview/9">Click here</Link> for details</p>

                                </div>
                                <p className='py-3 our-prices-time my-0'>Estimated Time: 2 hrs 18 mins</p>
                                <p className='py-4 our-prices-button my-0'><button className='custom-btn-container custom-btn px-4 py-2'>BOOK NOW</button></p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="col-auto our-prices">
                                <h4 className='py-4 our-prices-type my-0'>Commercial Cleaning</h4>
                                <div className='py-2 our-prices-rate my-0'>
                                    <strong className='sub-title-text green-color'>$</strong>
                                    <strong className='title-text green-color'>200</strong>
                                    <p className='px-3 pt-2'><Link to="/cleaningview/8">Click here</Link> for details</p>

                                </div>
                                <p className='py-3 our-prices-time my-0'>Estimated Time: 1 hr 30 mins</p>
                                <p className='py-4 our-prices-button my-0'><button className='custom-btn-container custom-btn px-4 py-2'>BOOK NOW</button></p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="col-auto our-prices">
                                <h4 className='py-4 our-prices-type my-0'>Carpet Cleaning</h4>
                                <div className='py-2 our-prices-rate my-0'>
                                    <strong className='sub-title-text green-color'>$</strong>
                                    <strong className='title-text green-color'>40</strong>
                                    <p className='px-3 pt-2'><Link to="/cleaningview/4">Click here</Link> for details</p>
                                </div>
                                <p className='py-3 our-prices-time my-0'>Estimated Time: 30 mins</p>
                                <p className='py-4 our-prices-button my-0'><button className='custom-btn-container custom-btn px-4 py-2'>BOOK NOW</button></p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="col-auto our-prices">
                                <h4 className='py-4 our-prices-type my-0'>Curtain Cleaning</h4>
                                <div className='py-2 our-prices-rate my-0'>
                                    <strong className='sub-title-text green-color'>$</strong>
                                    <strong className='title-text green-color'>40</strong>
                                    <p className='px-3 pt-2'><Link to="/cleaningview/6">Click here</Link> for details</p>
                                </div>
                                <p className='py-3 our-prices-time my-0'>Estimated Time: 30 mins</p>
                                <p className='py-4 our-prices-button my-0'><button className='custom-btn-container custom-btn px-4 py-2'>BOOK NOW</button></p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="col-auto our-prices">
                                <h4 className='py-4 our-prices-type my-0'>Window Cleaning</h4>
                                <div className='py-2 our-prices-rate my-0'>
                                    <strong className='sub-title-text green-color'>$</strong>
                                    <strong className='title-text green-color'>40</strong>
                                    <p className='px-3 pt-2'><Link to="/cleaningview/7">Click here</Link> for details</p>
                                </div>
                                <p className='py-3 our-prices-time my-0'>Estimated Time: 30 mins</p>
                                <p className='py-4 our-prices-button my-0'><button className='custom-btn-container custom-btn px-4 py-2'>BOOK NOW</button></p>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                    <button className="custom-prev">
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#69C064"><path d="M560-240 320-480l240-240 56 56-184 184 184 184-56 56Z"/></svg>
                    </button>
                    <button className="custom-next">
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#69C064"><path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z"/></svg>
                    </button>

                </div>
            </div>
        </>
    );
};

export default Services;