import { Link } from 'react-router-dom';
import { useState } from 'react';


const Navigation = () => {
    const [isSidebarVisible, setSidebarVisible] = useState(false);

    const showSidebar = () => {
        setSidebarVisible(true);
    };

    const hideSidebar = () => {
        setSidebarVisible(false);
    };

    return (
        <>
            <nav className={`navigation-sidebar ${isSidebarVisible ? 'visible' : 'hidden'}`}>
                <ul>
                    <li>
                        <Link to="/cleaningview/1" className='link-reset'>
                            <button type="button" className="custom-btn custom-btn-container btn btn-success px-2 py-2 swing-animation">
                                <span className='px-2'>
                                    <svg 
                                        xmlns="http://www.w3.org/2000/svg" 
                                        width="16" 
                                        height="16" 
                                        fill="white" 
                                        className="bi bi-bell" 
                                        viewBox="0 0 16 16"
                                    >
                                        <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2M8 1.918l-.797.161A4 4 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4 4 0 0 0-3.203-3.92zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5 5 0 0 1 13 6c0 .88.32 4.2 1.22 6"/>
                                    </svg> 
                                </span>
                                <span className='px-2 text-white'>GET A QUOTE</span>
                            </button>
                        </Link>
                    </li>
                    <li>
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
                        </span>
                        <span>4 Oaks Lane, Motueka 7120</span>
                    </li>
                    <li>
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
                        </span>
                        <span>8:00am - 10:00pm Mon - Sun</span>
                    </li>
                    <li>
                        <span className="px-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-phone-vibrate" viewBox="0 0 16 16">
                                <path d="M10 3a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zM6 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2z"/>
                                <path d="M8 12a1 1 0 1 0 0-2 1 1 0 0 0 0 2M1.599 4.058a.5.5 0 0 1 .208.676A7 7 0 0 0 1 8c0 1.18.292 2.292.807 3.266a.5.5 0 0 1-.884.468A8 8 0 0 1 0 8c0-1.347.334-2.619.923-3.734a.5.5 0 0 1 .676-.208m12.802 0a.5.5 0 0 1 .676.208A8 8 0 0 1 16 8a8 8 0 0 1-.923 3.734.5.5 0 0 1-.884-.468A7 7 0 0 0 15 8c0-1.18-.292-2.292-.807-3.266a.5.5 0 0 1 .208-.676M3.057 5.534a.5.5 0 0 1 .284.648A5 5 0 0 0 3 8c0 .642.12 1.255.34 1.818a.5.5 0 1 1-.93.364A6 6 0 0 1 2 8c0-.769.145-1.505.41-2.182a.5.5 0 0 1 .647-.284m9.886 0a.5.5 0 0 1 .648.284C13.855 6.495 14 7.231 14 8s-.145 1.505-.41 2.182a.5.5 0 0 1-.93-.364C12.88 9.255 13 8.642 13 8s-.12-1.255-.34-1.818a.5.5 0 0 1 .283-.648"/>
                            </svg>
                        </span>
                        <span>Call us: 027-393-4412</span>
                    </li>
                    <li>
                        <span className='navigation-link drop-down-arrow' onClick={hideSidebar}>
                            <img src="keyboard_double_arrow_up_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24.svg" alt="Close Menu" width="20" height="20" />
                        </span>
                    </li>
                </ul>
            </nav>
            <nav className='navigation'>
                <div className="row d-flex align-items-center justify-content-between">
                    <div className="col-auto">
                        <span className='navigation-link drop-down-arrow' onClick={showSidebar}>
                            <img src="/keyboard_double_arrow_down_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24.svg" alt="Show Menu" width="20" height="20" />
                        </span>
                    </div>
                    <div className="col-auto">
                        <Link to="/cleaningview/1" className='link-reset'>
                            <button type="button" className="custom-btn custom-btn-container btn btn-success px-2 py-2 swing-animation get-quote-small-screen">
                                <span className='px-2'>
                                    <svg 
                                        xmlns="http://www.w3.org/2000/svg" 
                                        width="16" 
                                        height="16" 
                                        fill="white" 
                                        className="bi bi-bell" 
                                        viewBox="0 0 16 16"
                                    >
                                        <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2M8 1.918l-.797.161A4 4 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4 4 0 0 0-3.203-3.92zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5 5 0 0 1 13 6c0 .88.32 4.2 1.22 6"/>
                                    </svg> 
                                </span>
                                <span className='px-2 text-white'>GET A QUOTE</span>
                            </button>
                        </Link>
                    </div>
                </div>
                    
                <div className="row d-flex justify-content-center">
                    <div className="col-auto">
                        <ul>
                            <li className='d-flex justify-content-end'>
                                <Link to="/" className='navigation-link navbar-brand-top mx-auto'>
                                    <div className='d-flex flex-column px-3 py-1'>
                                        <strong className='banner-text-color banner-text'>Sollano</strong>
                                        <strong className='banner-subtitle-text'>Cleaning Services Ltd.</strong>
                                    </div>
                                </Link>
                            </li>
                            <li className='navbar-address hideOnMobile mx-auto px-3'>
                                <span className="px-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-geo-alt" viewBox="0 0 16 16">
                                        <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10"/>
                                        <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
                                    </svg>
                                </span>
                                <span>4 Oaks Lane, Motueka 7120</span>
                            </li>
                            <li className='navbar-operating-hours hideOnMobile mx-auto px-3'>
                                <span className="px-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-clock" viewBox="0 0 16 16">
                                        <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z"/>
                                        <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0"/>
                                    </svg>
                                </span>
                                <span>8:00am - 10:00pm Mon - Sun</span>
                            </li>
                            <li className='hideOnMobile mx-auto px-3'>
                                <span className="px-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-phone-vibrate" viewBox="0 0 16 16">
                                        <path d="M10 3a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zM6 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2z"/>
                                        <path d="M8 12a1 1 0 1 0 0-2 1 1 0 0 0 0 2M1.599 4.058a.5.5 0 0 1 .208.676A7 7 0 0 0 1 8c0 1.18.292 2.292.807 3.266a.5.5 0 0 1-.884.468A8 8 0 0 1 0 8c0-1.347.334-2.619.923-3.734a.5.5 0 0 1 .676-.208m12.802 0a.5.5 0 0 1 .676.208A8 8 0 0 1 16 8a8 8 0 0 1-.923 3.734.5.5 0 0 1-.884-.468A7 7 0 0 0 15 8c0-1.18-.292-2.292-.807-3.266a.5.5 0 0 1 .208-.676M3.057 5.534a.5.5 0 0 1 .284.648A5 5 0 0 0 3 8c0 .642.12 1.255.34 1.818a.5.5 0 1 1-.93.364A6 6 0 0 1 2 8c0-.769.145-1.505.41-2.182a.5.5 0 0 1 .647-.284m9.886 0a.5.5 0 0 1 .648.284C13.855 6.495 14 7.231 14 8s-.145 1.505-.41 2.182a.5.5 0 0 1-.93-.364C12.88 9.255 13 8.642 13 8s-.12-1.255-.34-1.818a.5.5 0 0 1 .283-.648"/>
                                    </svg>
                                </span>
                                <span>Call us: 027-393-4412</span>
                            </li>
                            <li className='px-3 get-quote-large-screen'>
                                <Link to="/cleaningview/1" className='link-reset'>
                                    <button type="button" className="custom-btn custom-btn-container btn px-2 py-2 swing-animation">
                                        <span className='px-2'>
                                            <svg 
                                                xmlns="http://www.w3.org/2000/svg" 
                                                width="16" 
                                                height="16" 
                                                fill="white" 
                                                className="bi bi-bell" 
                                                viewBox="0 0 16 16"
                                            >
                                                <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2M8 1.918l-.797.161A4 4 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4 4 0 0 0-3.203-3.92zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5 5 0 0 1 13 6c0 .88.32 4.2 1.22 6"/>
                                            </svg> 
                                        </span>
                                        <span className='px-2 text-white'>GET A QUOTE</span>
                                    </button>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                
            </nav>
        </>
    );
};

export default Navigation;