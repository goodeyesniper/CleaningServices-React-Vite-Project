import { Link } from 'react-router-dom';

const About = () => {
    return (
        <>
            <div className="container-fluid text-center pt-3 pb-5">
                <p className="title-text pt-5"><strong>About Our Company</strong></p>
                <div className="row d-flex justify-content-center pt-2">
                    <div className="col-lg-5">
                        <p className="tertiary-subtitle-text">
                            Cleaning can be a chore and we know you have many choices when you consider hiring a comprehensive, high quality, reliable cleaning service.
                        </p>
                    </div>
                </div>
            </div>
            <div className="container-fluid text-center bg-f5f5f5">
                <div className="row">
                    <div className="col-lg-6 bg-warning p-0">
                        <img src="headway-5QgIuuBxKwM-unsplash.jpg" alt="" id="about-us-meeting-img" className="img-fluid"/>
                    </div>
                    <div className="col-lg-6 d-flex align-items-center text-start">
                        <div className="more-than-ten">
                            <p className="tertiary-subtitle-text"><strong>More than 10 years of cleaning experience</strong></p>
                            <p className="sub-title-text py-2">Cleaning Company service is a fully integrated janitorial cleaning services company that provides comprehensive, high quality, reliable cleaning solutions to commercial, corporate, industrial and residential clients.</p>
                            <p className="sub-title-text">Our diligent management and work ethic are central to Cleaning Company service business philosophy and critical to delivering consistent, quality cleaning services. We pride ourselves on making our management accountable to the client through direct access and interaction with our managing director.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid pt-5">
                <div className="row pt-5 d-flex justify-content-center">
                    <div className="col-lg-4">
                        <div className="row d-flex align-items-start">
                            <div className="col-auto text-start">
                                <svg xmlns="http://www.w3.org/2000/svg" height="60px" viewBox="0 -960 960 960" width="60px" fill="#69C064">
                                    <path d="M480-400 40-640l440-240 440 240-440 240Zm0 160L63-467l84-46 333 182 333-182 84 46-417 227Zm0 160L63-307l84-46 333 182 333-182 84 46L480-80Zm0-411 273-149-273-149-273 149 273 149Zm0-149Z"/>
                                </svg>
                            </div>
                            <div className="col">
                                <p className="tertiary-subtitle-text"><strong>Our Mission</strong></p>
                                <p className="sub-title-text">
                                    Aims to be a national market leader in the provision of cleaning services delivering reliable,
                                    quality, cost-effective cleaning solutions to our customers
                                </p>
                                <p className="pb-4">Contact Us</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="row d-flex align-items-start">
                            <div className="col-auto text-start">
                                <svg xmlns="http://www.w3.org/2000/svg" height="60px" viewBox="0 -960 960 960" width="60px" fill="#69C064">
                                    <path d="M440-80q-33 0-56.5-23.5T360-160v-160H240q-33 0-56.5-23.5T160-400v-280q0-66 47-113t113-47h480v440q0 33-23.5 56.5T720-320H600v160q0 33-23.5 56.5T520-80h-80ZM240-560h480v-200h-40v160h-80v-160h-40v80h-80v-80H320q-33 0-56.5 23.5T240-680v120Zm0 160h480v-80H240v80Zm0 0v-80 80Z"/>
                                </svg>
                            </div>
                            <div className="col">
                                <p className="tertiary-subtitle-text"><strong>Our Vision</strong></p>
                                <p className="sub-title-text">
                                    We have more than 215 franchise locations across the United States and Canada. All of them are
                                    committed to the same common values and principles.
                                </p>
                                <p className="pb-4">Our Mission</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid py-5 px-0">
                <div className="container-fluid py-4" style={{
                        background: "linear-gradient(to right, #46C6CF, #61C699)" // Gradient background
                    }}>
                    <div className="row d-flex align-items-center justify-content-center text-center">
                        <div className="col-lg-4 text-center">
                            <p className="secondary-subtitle-text px-2 white-text">If you&apos;re not happy, just let us know and <strong className="white-text">we&apos;ll work to make it right</strong></p>
                        </div>
                        <div className="col-auto text-start px-5 py-2">
                            <Link to="/contact">
                                <button type="button" className="btn btn-light main-color tertiary-subtitle-text px-4 py-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#69C064">
                                        <path d="M760-480q0-117-81.5-198.5T480-760v-80q75 0 140.5 28.5t114 77q48.5 48.5 77 114T840-480h-80Zm-160 0q0-50-35-85t-85-35v-80q83 0 141.5 58.5T680-480h-80Zm198 360q-125 0-247-54.5T329-329Q229-429 174.5-551T120-798q0-18 12-30t30-12h162q14 0 25 9.5t13 22.5l26 140q2 16-1 27t-11 19l-97 98q20 37 47.5 71.5T387-386q31 31 65 57.5t72 48.5l94-94q9-9 23.5-13.5T670-390l138 28q14 4 23 14.5t9 23.5v162q0 18-12 30t-30 12ZM241-600l66-66-17-94h-89q5 41 14 81t26 79Zm358 358q39 17 79.5 27t81.5 13v-88l-94-19-67 67ZM241-600Zm358 358Z"/>
                                    </svg>
                                    <span className="px-1">CONTACT US</span>
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid py-5">
                <div className="row d-flex justify-content-center">
                    <div className="col-lg-8 text-center">
                        <h1 className="title-text"><strong>Our Team</strong></h1>
                        <p className="pt-5 pb-2 sub-title-text">Cleaning Company is a minority owned business with a large group of specially trained, dedicated employees to provide professional service with a personal touch.</p>
                    </div>
                </div>
                <div className="row d-flex justify-content-center our-team-test">
                    <div className="col-auto d-flex justify-content-center align-items-start text-center">
                        <div className="our-team-container px-3 py-3">
                            <img src="https://randomuser.me/api/portraits/women/12.jpg" alt="" className="img-fluid our-team-img"/>
                            <h4 className="pb-2 pt-4 tertiary-subtitle-text">Alan Yarbrough</h4>
                            <h5 className="pb-5 sub-title-text">Managing Director</h5>
                            <p>Teresa joined our team in 2009. She brings a wealth of knowledge and experience in the accounting field.</p>
                        </div>
                    </div>
                    <div className="col-auto d-flex justify-content-center align-items-start text-center">
                        <div className="our-team-container px-3 py-3">
                            <img src="https://randomuser.me/api/portraits/men/12.jpg" alt="" className="img-fluid our-team-img"/>
                            <h4 className="pb-2 pt-4 tertiary-subtitle-text">Wilford Wood</h4>
                            <h5 className="pb-5 sub-title-text">Customer Service Manager</h5>
                            <p>He is the direct “pipeline” to our customers to ensure they are being heard and their special needs are being met.</p>
                        </div>
                    </div>
                    <div className="col-auto d-flex justify-content-center align-items-start text-center">
                        <div className="our-team-container px-3 py-3">
                            <img src="https://randomuser.me/api/portraits/women/11.jpg" alt="" className="img-fluid our-team-img"/>
                            <h4 className="pb-2 pt-4 tertiary-subtitle-text">Teresa Bowman</h4>
                            <h5 className="pb-5 sub-title-text">Accounting Manager</h5>
                            <p>Teresa joined our team in 2009. She brings a wealth of knowledge and experience in the accounting field.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row d-flex justify-content-center py-5">
                <div className="col-lg-8">
                    <div className="row d-flex align-items-end justify-content-center">
                        <div className="col-auto p-0">
                            <img src="banner-guaranteed-img.png" alt="" className="img-fluid banner-guaranteed-img" />
                        </div>
                        <div className="col text-center satisfaction-guaranteed px-5">
                            <h1 className="text-white">Satisfaction Guaranteed!</h1>
                            <p className="text-white">Your satisfaction is 100% guaranteed at Cleaning Company. If you are not happy with any area we&apos;ve cleaned, simply call within 24 hours and we will come back out and reclean it free of charge. This makes hiring Cleaning Company virtually risk free. Our maids are thoroughly screened through our rigorous recruitment process, and every one of them goes through our Maid University training process.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid py-5">
                <div className="row d-flex justify-content-center">
                    <div className="col-lg-8 text-center">
                        <h1 className="title-text"><strong>Our Values</strong></h1>
                        <p className="sub-title-text py-3">Our goal is Your satisfaction (of course after our cleaning work). Office Phone works around the clock (24/7).</p>
                    </div>
                </div>
                <div className="row d-flex justify-content-center align-items-start">
                    <div className="col-auto text-center py-3">
                        <img src="about-page-img-2.jpg" alt="" className="img-fluid"/>
                    </div>
                    <div className="col-lg-4 py-3">
                        <div className="row d-flex align-items-start text-start">
                            <div className="col-auto"><strong className='check-icon'>&#10003;</strong></div>
                            <div className="col">
                                <p className="sub-title-text">
                                    <strong>Client oriented:</strong> We serve our clients as if we were serving ourselves. We value their feedback and we use it to improve our work.
                                </p>
                            </div>
                        </div>
                        <div className="row d-flex align-items-start text-start">
                            <div className="col-auto"><strong className='check-icon'>&#10003;</strong></div>
                            <div className="col">
                                <p className="sub-title-text">
                                    <strong>Eco-Friendly Oriented:</strong> We carefully choose the best and most natural cleaning products that give amazing results.
                                </p>
                            </div>
                        </div>
                        <div className="row d-flex align-items-start text-start">
                            <div className="col-auto"><strong className='check-icon'>&#10003;</strong></div>
                            <div className="col">
                                <p className="sub-title-text">
                                    <strong>Excellence and Innovation:</strong> We provide training to our personnel in order to ensure the high standard of service. We stay up-to-date on the latest innovations in eco-friendly products and technologies, allowing us to bring the best in to our clients&apos; homes.
                                </p>
                            </div>
                        </div>
                        <div className="row d-flex align-items-start text-start">
                            <div className="col-auto"><strong className='check-icon'>&#10003;</strong></div>
                            <div className="col">
                                <p className="sub-title-text">
                                    <strong>Expansion / Growth:</strong> we make ourselves known in the community; we create long term relations, while constantly expanding. Therefore, we are always bringing in more people to work for us.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default About;