import Hero from './Hero';
import { Link } from 'react-router-dom';



const Home = () => {
    return (
        <>
            <Hero />

            {/* Our cleaning services */}
            <div className="container-fluid py-5">
                <div className="container text-center py-5">
                    <h1 className='title-text'><strong>Our Cleaning Services</strong></h1>
                </div>
                <div className="container text-center pb-2">
                    <p className='sub-title-text'>Let us use our years of experience, skilled employees, and advanced procedures to ensure a clean and <br /> healthy environment for your family, employees, customers and guests.</p>
                </div>
                <div className="container d-flex justify-content-center py-5">
                    <div className="row text-center">
                        <div className="col px-4 py-2 d-flex justify-content-center">
                            <div className="card py-4 our-cleaning-services-card-style">
                                <div className='text-center'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="#69C064" className="bi bi-house-door" viewBox="0 0 16 16">
                                    <path d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4z"/>
                                    </svg>
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title py-3 main-color">Residential Cleaning</h5>
                                    <ul className='custom-list'>
                                        <li className='py-2'><strong className='check-icon'>&#10003;</strong> Carpet cleaning</li>
                                        <li className='py-2'><strong className='check-icon'>&#10003;</strong> Hard surface cleaning</li>
                                        <li className='py-2'><strong className='check-icon'>&#10003;</strong> Upholstery cleaning</li>
                                    </ul>
                                    <div className='pt-3'>
                                        <Link to="/servicesview/9" className="btn btn-outline-success px-5">Read More</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col px-4 py-2 d-flex justify-content-center">
                            <div className="card py-4 our-cleaning-services-card-style">
                                <div className='text-center'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="#69C064" className="bi bi-buildings" viewBox="0 0 16 16">
                                    <path d="M14.763.075A.5.5 0 0 1 15 .5v15a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V14h-1v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V10a.5.5 0 0 1 .342-.474L6 7.64V4.5a.5.5 0 0 1 .276-.447l8-4a.5.5 0 0 1 .487.022M6 8.694 1 10.36V15h5zM7 15h2v-1.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5V15h2V1.309l-7 3.5z"/>
                                    <path d="M2 11h1v1H2zm2 0h1v1H4zm-2 2h1v1H2zm2 0h1v1H4zm4-4h1v1H8zm2 0h1v1h-1zm-2 2h1v1H8zm2 0h1v1h-1zm2-2h1v1h-1zm0 2h1v1h-1zM8 7h1v1H8zm2 0h1v1h-1zm2 0h1v1h-1zM8 5h1v1H8zm2 0h1v1h-1zm2 0h1v1h-1zm0-2h1v1h-1z"/>
                                    </svg>
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title py-3 main-color">Commercial Cleaning</h5>
                                    <ul className='custom-list'>
                                        <li className='py-2'><strong className='check-icon'>&#10003;</strong> Carpet cleaning</li>
                                        <li className='py-2'><strong className='check-icon'>&#10003;</strong> Tile and grout cleaning</li>
                                        <li className='py-2'><strong className='check-icon'>&#10003;</strong> Hard surface floor cleaning</li>
                                    </ul>
                                    <div className='pt-3'>
                                        <Link to="/servicesview/8" className="btn btn-outline-success px-5">Read More</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col px-4 py-2 d-flex justify-content-center">
                            <div className="card py-4 our-cleaning-services-card-style">
                                <div className='text-center'>
                                    <svg xmlns="http://www.w3.org/2000/svg" height="80px" viewBox="0 -960 960 960" width="80px" fill="#69C064"><path d="M697-623h60v-60h-60v60Zm0 171h60v-60h-60v60Zm0 170h60v-60h-60v60Zm-56 162v-60h219v-600H465v112l-60-42v-130h515v720H641Zm-601 0v-390l271-194 270 194v390H364v-201H258v201H40Zm60-60h98v-201h226v201h97v-299L311-630 100-478.58V-180Zm541-365ZM424-180v-201H198v201-201h226v201Z"/></svg>
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title py-3 main-color">Window Cleaning</h5>
                                    <ul className='custom-list'>
                                        <li className='py-2'><strong className='check-icon'>&#10003;</strong> Glass window cleaning</li>
                                        <li className='py-2'><strong className='check-icon'>&#10003;</strong> Hard to reach areas</li>
                                        <li className='py-2'><strong className='check-icon'>&#10003;</strong> Elevated area cleaning</li>
                                    </ul>
                                    <div className='pt-3'>
                                        <Link to="/servicesview/7" className="btn btn-outline-success px-5">Read More</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Cleaning with conscience */}
            <div className="container-fluid">
                <div className="container">
                    <div className="row d-flex align-items-center justify-content-center text-center flex-wrap">
                        <div className="col-lg-4 col-md-6 col-sm-12 p-0 spray-img-container">
                            <img src="/spray-img.jpg" alt="Cleaning Spray" className="vacuum img-fluid" />
                        </div>
                        <div className="col-lg-8 col-md-12 col-sm-12 py-5 spray-img-container-right">
                            <h1 className="title-text py-5"><strong>Cleaning With a Conscience</strong></h1>

                            <p className="tertiary-subtitle-text pb-3"><strong>Professional Cleaning Services for Home and Office</strong></p>

                            <p className="px-md-3 px-sm-2 sub-title-text">
                                Cleaning can be a chore and we know you have many choices when you consider hiring a maid service.
                                Because of that, we are constantly thriving to improve our already high standards to have you see us as
                                the absolute best in the industry. It&#39;s not enough to have trust in the cleaning crew that you let into your
                                home… you also have to trust that they will perform a first-class cleaning job for you. Putting our employees
                                through a rigorous training program ensures each member of our cleaning team understands their role and
                                how it relates to the overall performance of the team.
                            </p>
                            
                            <div className="row py-5 text-center">
                                <div className="col-md-6 col-sm-12">
                                    <ul className="ul-style">
                                        <li className="sub-title-text">
                                            <strong className="check-icon">&#10003;</strong> One-off, weekly or fortnightly visits
                                        </li>
                                        <li className="sub-title-text">
                                            <strong className="check-icon">&#10003;</strong> Vetted & background-checked cleaners
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-md-6 col-sm-12">
                                    <ul className="ul-style">
                                        <li className="sub-title-text">
                                            <strong className="check-icon">&#10003;</strong> Keep the same cleaner for every visit
                                        </li>
                                        <li className="sub-title-text">
                                            <strong className="check-icon">&#10003;</strong> Book, manage & pay online
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Reasons to choose us */}
            <div className="container-fluid py-5">
                <div className="container text-start d-flex justify-content-center py-5">
                    <div className="row d-flex align-items-center justify-content-center text-start reason-container">
                        {/* FOR LARGE SCREENS */}
                        <div className="col-lg-3 col-md-4 col-sm-6 reason-col-1 px-2 py-1">
                            <img src="cleaner-2537316_1920.jpg" alt="" id='reason-1' className='img-fluid'/>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6 reason-col-2 px-2">
                            <div className="row reason-row-1">
                                <img src="aaron-huber-G7sE2S4Lab4-unsplash.jpg" alt="" className='img-fluid'/>
                            </div>
                            <div className="row reason-row-2">
                                <img src="lotus-design-n-print-l_M3usPiEuM-unsplash.jpg" alt="" className='img-fluid' />
                            </div>
                        </div>
                        {/* FOR SMALL SCREENS */}
                        <div className="container reason-alternative-layout">
                            <div className="row">
                                <div className="col-sm-6 pb-3">
                                    <img src="cleaner-2537316_1920.jpg" alt="" id='reason-1' className='img-fluid'/>
                                </div>
                                <div className="col-sm-6 pb-3">
                                    <img src="aaron-huber-G7sE2S4Lab4-unsplash.jpg" alt="" id='reason-2' className='img-fluid pb-2'/>
                                    <img src="lotus-design-n-print-l_M3usPiEuM-unsplash.jpg" alt="" id='reason-2' className='img-fluid pt-2'/>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-5 col-md-12 reason-col-3 px-1 reason-to-choose-us">
                            <p className='primary-subtitle-text reason-text-small-screen'><strong>Reasons to <span className='green-color'>Choose Us</span></strong></p>
                            <p>
                                Behind our commitment to excellence are few key attributes that define who we are and what makes us different from any other.
                            </p>

                            <div className="row reason-to-choose-us-2">
                                <div className="col-sm-1 d-flex align-items-start reason-to-choose-us-photo-1">
                                    <span className='pr-2 pt-3'>
                                        <svg xmlns="http://www.w3.org/2000/svg" height="28px" viewBox="0 -960 960 960" width="28px" fill="#69C064"><path d="M213-175q-43.59-45-68.3-104Q120-338 120-400q0-73 25.5-133.5T222-645q35-35 87-59t122.5-37.5Q502-755 591-758.5t198 3.5q8 108 5.5 197.5t-16 160.75q-13.5 71.25-38 124.56Q716-218.87 680-183q-51 51-110 77T444-80q-69 0-126.5-23.5T213-175Zm103 0q25 17 58 26t69.92 9Q497-140 547-162t91-64q27-27 46-70.5t31-103Q727-459 731-534t0-165q-94-2-168.5 2.5T431-680q-57 12-98 30.5T266-604q-42 43-64 91t-22 98q0 48 20.5 100.5T251-230q53-98 127-176t157-123q-87 75-141 162.5T316-175Zm0 0Zm0 0Z"/>
                                        </svg>
                                    </span>
                                </div>
                                <div className="col-sm-11">
                                    <p className='sub-title-text pt-3'><strong>Top-Rated Company</strong></p>
                                    <p>We hold a successful track record of satisfying our customers and getting back their money&apos;s worth.</p>
                                </div>
                            </div>
                            <div className="row reason-to-choose-us-2">
                                <div className="col-sm-1 d-flex align-items-start">
                                    <span className='pr-2 pt-3'>
                                        <svg xmlns="http://www.w3.org/2000/svg" height="28px" viewBox="0 -960 960 960" width="28px" fill="#69C064"><path d="M213-175q-43.59-45-68.3-104Q120-338 120-400q0-73 25.5-133.5T222-645q35-35 87-59t122.5-37.5Q502-755 591-758.5t198 3.5q8 108 5.5 197.5t-16 160.75q-13.5 71.25-38 124.56Q716-218.87 680-183q-51 51-110 77T444-80q-69 0-126.5-23.5T213-175Zm103 0q25 17 58 26t69.92 9Q497-140 547-162t91-64q27-27 46-70.5t31-103Q727-459 731-534t0-165q-94-2-168.5 2.5T431-680q-57 12-98 30.5T266-604q-42 43-64 91t-22 98q0 48 20.5 100.5T251-230q53-98 127-176t157-123q-87 75-141 162.5T316-175Zm0 0Zm0 0Z"/>
                                    </svg>
                                    </span>
                                </div>
                                <div className="col-sm-11">
                                    <p className='sub-title-text pt-3'><strong>Superior Quality</strong></p>
                                    <p>We use the most excellent quality tools and equipment to get all the dust and dirt out of your premises.</p>
                                </div>
                            </div>
                            <div className="row reason-to-choose-us-2">
                                <div className="col-sm-1 d-flex align-items-start">
                                    <span className='pr-2 pt-3'>
                                        <svg xmlns="http://www.w3.org/2000/svg" height="28px" viewBox="0 -960 960 960" width="28px" fill="#69C064"><path d="M213-175q-43.59-45-68.3-104Q120-338 120-400q0-73 25.5-133.5T222-645q35-35 87-59t122.5-37.5Q502-755 591-758.5t198 3.5q8 108 5.5 197.5t-16 160.75q-13.5 71.25-38 124.56Q716-218.87 680-183q-51 51-110 77T444-80q-69 0-126.5-23.5T213-175Zm103 0q25 17 58 26t69.92 9Q497-140 547-162t91-64q27-27 46-70.5t31-103Q727-459 731-534t0-165q-94-2-168.5 2.5T431-680q-57 12-98 30.5T266-604q-42 43-64 91t-22 98q0 48 20.5 100.5T251-230q53-98 127-176t157-123q-87 75-141 162.5T316-175Zm0 0Zm0 0Z"/>
                                    </svg>
                                    </span>
                                </div>
                                <div className="col-sm-11">
                                    <p className='sub-title-text pt-3'><strong>Eco-Friendly Products</strong></p>
                                    <p>We use biodegradable products which do not harm the environment, pets or humans in any way.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* FAQ */}
            <div className="container-fluid bg-f5f5f5 py-5">
                <div className="container text-center pb-5">
                    <p className='title-text py-3'><strong>Frequently Asked Questions</strong></p>
                    <div className="accordion text-start" id="accordionExample">
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                <span className='tertiary-subtitle-text'>What types of cleaning services do you offer?</span>
                            </button>
                            </h2>
                            <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                            <div className="accordion-body sub-title-text">
                                We provide a variety of cleaning services, including residential, commercial, deep cleaning, move-in/move-out cleaning, and specialized cleaning for carpets, windows, and upholstery. Whatever your cleaning needs, we&apos;ve got you covered!
                            </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                            <span className='tertiary-subtitle-text'>What areas do you serve?</span>
                            </button>
                            </h2>
                            <div id="collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body sub-title-text">
                                We proudly serve Nelson-Tasman and the surrounding regions. If you're unsure whether we cover your area, feel free to contact us.
                            </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                            <span className='tertiary-subtitle-text'>How do I book a cleaning service?</span>
                            </button>
                            </h2>
                            <div id="collapseFive" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body sub-title-text">
                                You can easily book our services online through our website, or by calling us directly. Just choose a date, time, and service type, and we&apos;ll take care of the rest!
                            </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEight" aria-expanded="false" aria-controls="collapseEight">
                            <span className='tertiary-subtitle-text'>How much do your services cost?</span>
                            </button>
                            </h2>
                            <div id="collapseEight" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body sub-title-text">
                                Our pricing is based on the type of cleaning and the size of your home or office. You can request a free quote through our website or by contacting us directly.
                            </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseNine" aria-expanded="false" aria-controls="collapseNine">
                            <span className='tertiary-subtitle-text'>Do you offer free quotes or estimates?</span>
                            </button>
                            </h2>
                            <div id="collapseNine" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body sub-title-text">
                                Yes! We provide free, no-obligation quotes to help you understand our pricing before booking.
                            </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwelve" aria-expanded="false" aria-controls="collapseTwelve">
                            <span className='tertiary-subtitle-text'>Do I need to provide cleaning supplies and equipment?</span>
                            </button>
                            </h2>
                            <div id="collapseTwelve" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body sub-title-text">
                                No, our team comes fully equipped with all necessary supplies and equipment. However, if you prefer us to use your products, just let us know.
                            </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThirteen" aria-expanded="false" aria-controls="collapseThirteen">
                            <span className='tertiary-subtitle-text'>Can I request specific tasks or areas to be cleaned?</span>
                            </button>
                            </h2>
                            <div id="collapseThirteen" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body sub-title-text">
                                Of course! Simply let us know your priorities, and we&apos;ll tailor the cleaning to meet your specific needs.
                            </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFourteen" aria-expanded="false" aria-controls="collapseFourteen">
                            <span className='tertiary-subtitle-text'>What happens if I&apos;m not satisfied with the cleaning?</span>
                            </button>
                            </h2>
                            <div id="collapseFourteen" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body sub-title-text">
                                Your satisfaction is our priority. If you&apos;re not happy, please contact us within 12 hours after cleaning, and we&apos;ll arrange a re-clean free of charge.
                            </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSixteen" aria-expanded="false" aria-controls="collapseSixteen">
                            <span className='tertiary-subtitle-text'>Can you clean carpets, upholstery, or windows?</span>
                            </button>
                            </h2>
                            <div id="collapseSixteen" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body sub-title-text">
                                Yes, we offer specialized services for carpets, upholstery, and windows. These can be booked separately or as part of a cleaning package.
                            </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEighteen" aria-expanded="false" aria-controls="collapseEighteen">
                            <span className='tertiary-subtitle-text'>How do you handle customer complaints or issues?</span>
                            </button>
                            </h2>
                            <div id="collapseEighteen" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body sub-title-text">
                                We strive for excellence, but if there&apos;s ever an issue, please contact our support team immediately. We&apos;re committed to resolving complaints quickly and ensuring your satisfaction.
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Our clients say */}
            <div className="container-fluid py-5 our-clients-say">
                <p className='text-center title-text pt-3'><strong>Our Clients Say</strong></p>
                <div className="container">
                    <div className="row d-flex align-items-center justify-content-center" id="clients-say" style={{ height: "400px"}}>
                        <div className="col-lg-10">
                            <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
                                <div className="carousel-inner carousel-inner-testimony">
                                    <div className="carousel-item active" data-bs-interval="5000">
                                    <div className="container">
                                        <div className="row d-flex align-items-center justify-content-center">
                                            {/* Left Column */}
                                            <div className="col-lg-2 d-flex align-items-end justify-content-end bi-quote-left" style={{ position: "relative" }}>
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="50"
                                                    height="50"
                                                    fill="currentColor"
                                                    className="bi bi-quote bi-quote-left"
                                                    viewBox="0 0 16 16"
                                                    style={{ position: "absolute", top: -120, right: 50 }}
                                                >
                                                    <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388q0-.527.062-1.054.093-.558.31-.992t.559-.683q.34-.279.868-.279V3q-.868 0-1.52.372a3.3 3.3 0 0 0-1.085.992 4.9 4.9 0 0 0-.62 1.458A7.7 7.7 0 0 0 9 7.558V11a1 1 0 0 0 1 1zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612q0-.527.062-1.054.094-.558.31-.992.217-.434.559-.683.34-.279.868-.279V3q-.868 0-1.52.372a3.3 3.3 0 0 0-1.085.992 4.9 4.9 0 0 0-.62 1.458A7.7 7.7 0 0 0 3 7.558V11a1 1 0 0 0 1 1z" />
                                                </svg>
                                            </div>

                                                {/* Middle Column */}
                                                <div className="col-lg-8 text-center">
                                                    <p className="sub-title-text pb-4">
                                                        <i>
                                                        They are very professional and do a great job cleaning the house! I locked myself out of the house the other
                                                        day and they were the only ones with a key. They were kind enough to drive over to unlock the door. That
                                                        speaks volumes! They really care about their clients.
                                                        </i>
                                                    </p>
                                                <div className="py-2">
                                                    <img
                                                    src="https://randomuser.me/api/portraits/women/28.jpg"
                                                    alt=""
                                                    className="img-fluid rounded-circle our-clients-say-img-size"
                                                    />
                                                </div>
                                                <span className="sub-title-text pb-4 text-fluid">Ruth Cooper</span>
                                                </div>

                                                {/* Right Column */}
                                                <div className="col-lg-2 d-flex align-items-start justify-content-start bi-quote-right" style={{ position: "relative" }}>
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="50"
                                                        height="50"
                                                        fill="currentColor"
                                                        className="bi bi-quote bi-quote-right"
                                                        viewBox="0 0 16 16"
                                                        style={{ position: "absolute", top: -150, left: 50, transform: "rotate(180deg)" }}
                                                    >
                                                        <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388q0-.527.062-1.054.093-.558.31-.992t.559-.683q.34-.279.868-.279V3q-.868 0-1.52.372a3.3 3.3 0 0 0-1.085.992 4.9 4.9 0 0 0-.62 1.458A7.7 7.7 0 0 0 9 7.558V11a1 1 0 0 0 1 1zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612q0-.527.062-1.054.094-.558.31-.992.217-.434.559-.683.34-.279.868-.279V3q-.868 0-1.52.372a3.3 3.3 0 0 0-1.085.992 4.9 4.9 0 0 0-.62 1.458A7.7 7.7 0 0 0 3 7.558V11a1 1 0 0 0 1 1z" />
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="carousel-item" data-bs-interval="5000">
                                        <div className="container">
                                            <div className="row d-flex align-items-center justify-content-center">
                                                {/* Left Column */}
                                                <div className="col-lg-2 d-flex align-items-end justify-content-end bi-quote-left" style={{ position: "relative" }}>
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="50"
                                                        height="50"
                                                        fill="currentColor"
                                                        className="bi bi-quote bi-quote-left"
                                                        viewBox="0 0 16 16"
                                                        style={{ position: "absolute", top: -120, right: 50 }}
                                                    >
                                                        <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388q0-.527.062-1.054.093-.558.31-.992t.559-.683q.34-.279.868-.279V3q-.868 0-1.52.372a3.3 3.3 0 0 0-1.085.992 4.9 4.9 0 0 0-.62 1.458A7.7 7.7 0 0 0 9 7.558V11a1 1 0 0 0 1 1zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612q0-.527.062-1.054.094-.558.31-.992.217-.434.559-.683.34-.279.868-.279V3q-.868 0-1.52.372a3.3 3.3 0 0 0-1.085.992 4.9 4.9 0 0 0-.62 1.458A7.7 7.7 0 0 0 3 7.558V11a1 1 0 0 0 1 1z" />
                                                    </svg>
                                                </div>
                                                <div className="col-lg-8 text-center">
                                                    <p className='sub-title-text pb-4'><i>They are very professional and do a great job cleaning the house! I locked myself out of the house the other day and they were the only ones with a key. They were kind enough to drive over to unlock the door. That speaks volumes! They really care about their clients.</i></p>
                                                    <div className='py-2'>
                                                        <img src="https://randomuser.me/api/portraits/women/24.jpg" alt="" className='img-fluid rounded-circle our-clients-say-img-size' />
                                                    </div>
                                                    <span className='sub-title-text pb-4'>Vicki Callahan</span>
                                                </div>
                                                {/* Right Column */}
                                                <div className="col-lg-2 d-flex align-items-start justify-content-start bi-quote-right" style={{ position: "relative" }}>
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="50"
                                                        height="50"
                                                        fill="currentColor"
                                                        className="bi bi-quote-right"
                                                        viewBox="0 0 16 16"
                                                        style={{ position: "absolute", top: -150, left: 50, transform: "rotate(180deg)" }}
                                                    >
                                                        <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388q0-.527.062-1.054.093-.558.31-.992t.559-.683q.34-.279.868-.279V3q-.868 0-1.52.372a3.3 3.3 0 0 0-1.085.992 4.9 4.9 0 0 0-.62 1.458A7.7 7.7 0 0 0 9 7.558V11a1 1 0 0 0 1 1zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612q0-.527.062-1.054.094-.558.31-.992.217-.434.559-.683.34-.279.868-.279V3q-.868 0-1.52.372a3.3 3.3 0 0 0-1.085.992 4.9 4.9 0 0 0-.62 1.458A7.7 7.7 0 0 0 3 7.558V11a1 1 0 0 0 1 1z" />
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="carousel-item" data-bs-interval="5000">
                                        <div className="container">
                                            <div className="row d-flex align-items-center justify-content-center">
                                                {/* Left Column */}
                                                <div className="col-lg-2 d-flex align-items-end justify-content-end bi-quote-left" style={{ position: "relative" }}>
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="50"
                                                        height="50"
                                                        fill="currentColor"
                                                        className="bi bi-quote bi-quote-left"
                                                        viewBox="0 0 16 16"
                                                        style={{ position: "absolute", top: -120, right: 50 }}
                                                    >
                                                        <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388q0-.527.062-1.054.093-.558.31-.992t.559-.683q.34-.279.868-.279V3q-.868 0-1.52.372a3.3 3.3 0 0 0-1.085.992 4.9 4.9 0 0 0-.62 1.458A7.7 7.7 0 0 0 9 7.558V11a1 1 0 0 0 1 1zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612q0-.527.062-1.054.094-.558.31-.992.217-.434.559-.683.34-.279.868-.279V3q-.868 0-1.52.372a3.3 3.3 0 0 0-1.085.992 4.9 4.9 0 0 0-.62 1.458A7.7 7.7 0 0 0 3 7.558V11a1 1 0 0 0 1 1z" />
                                                    </svg>
                                                </div>
                                                <div className="col-lg-8 text-center">
                                                    <p className='sub-title-text pb-4'><i>They are very professional and do a great job cleaning the house! I locked myself out of the house the other day and they were the only ones with a key. They were kind enough to drive over to unlock the door. That speaks volumes! They really care about their clients.</i></p>
                                                    <div className='py-2'>
                                                        <img src="https://randomuser.me/api/portraits/women/12.jpg" alt="" className='img-fluid rounded-circle our-clients-say-img-size' />
                                                    </div>
                                                    <span className='sub-title-text pb-4'>Karen Wong</span>
                                                </div>
                                                {/* Right Column */}
                                                <div className="col-lg-2 d-flex align-items-start justify-content-start bi-quote-right" style={{ position: "relative" }}>
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="50"
                                                        height="50"
                                                        fill="currentColor"
                                                        className="bi bi-quote bi-quote-right"
                                                        viewBox="0 0 16 16"
                                                        style={{ position: "absolute", top: -150, left: 50, transform: "rotate(180deg)" }}
                                                    >
                                                        <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388q0-.527.062-1.054.093-.558.31-.992t.559-.683q.34-.279.868-.279V3q-.868 0-1.52.372a3.3 3.3 0 0 0-1.085.992 4.9 4.9 0 0 0-.62 1.458A7.7 7.7 0 0 0 9 7.558V11a1 1 0 0 0 1 1zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612q0-.527.062-1.054.094-.558.31-.992.217-.434.559-.683.34-.279.868-.279V3q-.868 0-1.52.372a3.3 3.3 0 0 0-1.085.992 4.9 4.9 0 0 0-.62 1.458A7.7 7.7 0 0 0 3 7.558V11a1 1 0 0 0 1 1z" />
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;
