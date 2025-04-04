import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <>
            <div className="container-fluid px-0 py-5">
                <div
                    className="container-fluid bg-warning"
                    style={{
                        height: "80px",
                        background: "linear-gradient(to right, #69C064, #198754)" // Gradient background
                    }}
                >
                    <div className="container-sm d-flex justify-content-end" style={{ position: "relative"}}>
                        <img src="footer-ribbon.png" alt="" style={{ position: "absolute", top: "-13.3px"}} />
                    </div>
                </div>
            </div>
            
            <div className="container-fluid bg-white text-start">
                <div className="container pb-5">
                    <div className="row d-flex align-items-start justify-content-center">
                        <div className="col-lg-3 col-md-6 col-sm-12 pb-4">
                            <Link to="/" className='navigation-link mx-auto'>
                                <div className='d-flex flex-column'>
                                    <strong className='banner-text-color banner-text'>Sollano</strong>
                                    <strong className='banner-subtitle-text'>Cleaning Services Ltd.</strong>
                                </div>
                            </Link>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12">
                            <ul className='list-style-none'>
                                <li><p className='sub-title-text'><strong>Contact Us</strong></p></li>
                                <li className='pb-4'>
                                    <span className="px-2">
                                        <svg 
                                            xmlns="http://www.w3.org/2000/svg" 
                                            width="20" 
                                            height="20" 
                                            fill="currentColor" 
                                            className="bi bi-geo-alt" 
                                            viewBox="0 0 16 16"
                                        >
                                            <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10"/>
                                            <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
                                        </svg>
							        </span>4 Oaks Lane, Motueka 7120
                                </li>
                                <li>
                                <span className="px-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-phone-vibrate" viewBox="0 0 16 16">
                                        <path d="M10 3a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zM6 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2z"/>
                                        <path d="M8 12a1 1 0 1 0 0-2 1 1 0 0 0 0 2M1.599 4.058a.5.5 0 0 1 .208.676A7 7 0 0 0 1 8c0 1.18.292 2.292.807 3.266a.5.5 0 0 1-.884.468A8 8 0 0 1 0 8c0-1.347.334-2.619.923-3.734a.5.5 0 0 1 .676-.208m12.802 0a.5.5 0 0 1 .676.208A8 8 0 0 1 16 8a8 8 0 0 1-.923 3.734.5.5 0 0 1-.884-.468A7 7 0 0 0 15 8c0-1.18-.292-2.292-.807-3.266a.5.5 0 0 1 .208-.676M3.057 5.534a.5.5 0 0 1 .284.648A5 5 0 0 0 3 8c0 .642.12 1.255.34 1.818a.5.5 0 1 1-.93.364A6 6 0 0 1 2 8c0-.769.145-1.505.41-2.182a.5.5 0 0 1 .647-.284m9.886 0a.5.5 0 0 1 .648.284C13.855 6.495 14 7.231 14 8s-.145 1.505-.41 2.182a.5.5 0 0 1-.93-.364C12.88 9.255 13 8.642 13 8s-.12-1.255-.34-1.818a.5.5 0 0 1 .283-.648"/>
                                    </svg>
                                </span>Call us: 027-393-4412
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12">
                            <ul className='list-style-none'>
                                <li className='pb-4 pt-5'>
                                <span className="px-2">
                                    <svg 
                                        xmlns="http://www.w3.org/2000/svg" 
                                        width="20" 
                                        height="20" 
                                        fill="currentColor" 
                                        className="bi bi-clock" 
                                        viewBox="0 0 16 16"
                                    >
                                        <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z"/>
                                        <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0"/>
                                    </svg>
                                </span>8:00am - 10:00pm Mon - Sun
                                </li>
                                <li>
                                    <span className='px-2'>
                                        <svg 
                                            xmlns="http://www.w3.org/2000/svg" 
                                            height="20px" 
                                            viewBox="0 -960 960 960" 
                                            width="20px" 
                                            fill="#4B5B68"
                                        >
                                            <path d="M633-80 472-241l43-43 118 118 244-244 43 43L633-80ZM478-527l334-213H144l334 213Zm0 60L140-684v452h256l60 60H140q-24 0-42-18t-18-42v-508q0-24 18-42t42-18h677q24 0 42 18t18 42v244l-60 60v-248L478-467Zm1 9Zm-1-69Zm1 60Z"/>
                                        </svg>
                                    </span>
                                    plunisperos@gmail.com
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 text-center pt-3">
                            <ul className='list-style-none pt-4 d-flex justify-content-center'>
                                <li className='p-2'>
                                    <Link to="https://www.facebook.com/philip.louis.u.nisperos/" title="Facebook" target="_blank">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#4B5B68" className="bi bi-facebook" viewBox="0 0 16 16">
                                        <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"/>
                                        </svg>
                                    </Link>
                                </li>
                                <li className='p-2'>
                                    <Link to="https://instagram.com/ishooturun" title="Instagram" target="_blank">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#4B5B68" className="bi bi-instagram" viewBox="0 0 16 16">
                                            <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"/>
                                        </svg>
                                    </Link>
                                </li>
                                <li className='p-2'>
                                    <Link to="https://x.com/home" title="Twitter" target="_blank">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#4B5B68" className="bi bi-twitter-x" viewBox="0 0 16 16">
                                            <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"/>
                                        </svg>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="row pt-3 copyright">
                        <p>Copyright &copy; 2025</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Footer;
