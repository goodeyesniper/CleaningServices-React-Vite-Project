import React, { useState } from "react";



const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Thank you, ${formData.name}! Your message has been sent.`);
        // You can integrate an API or email service here to handle submissions.
        setFormData({ name: "", email: "", message: "" });
      };
    
    return (
        <>
            <div className="container text-center pt-5">
                <h1 className="title-text pt-3 pb-5"><strong>Contact Us</strong></h1>
            </div>

            <div className="container-fluid d-flex justify-content-center pb-5">
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6011.947807416633!2d173.010304!3d-41.113261!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d3b86deb8e37041%3A0x5f811c03e31849b0!2s4%20Oaks%20Lane%2C%20Motueka%207120!5e0!3m2!1sen!2snz!4v1743024131146!5m2!1sen!2snz" width="100%" height="580"
                style={{
                    border: 0, 
                    allowfullscreen: "",
                    loading: "lazy",
                    referrerpolicy: "no-referrer-when-downgrade",
                }}
                >
                </iframe>
            </div>
            <div className="container py-5">
                <div className="row g-5">
                    <div className="col-lg-4">
                        <h1>General Office</h1>
                        <h4 className="py-3">Contacts</h4>
                        <div className="row d-flex align-items-start pb-4">
                            <div className="col-auto text-start">
                                <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#69C064"><path d="M480-480q33 0 56.5-23.5T560-560q0-33-23.5-56.5T480-640q-33 0-56.5 23.5T400-560q0 33 23.5 56.5T480-480Zm0 294q122-112 181-203.5T720-552q0-109-69.5-178.5T480-800q-101 0-170.5 69.5T240-552q0 71 59 162.5T480-186Zm0 106Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Zm0-480Z"/>
                                </svg>
                            </div>
                            <div className="col">
                                <p className="tertiary-subtitle-text"><strong>Address</strong></p>
                                <p className="sub-title-text">
                                    4 Oaks Lane, Motueka 7120, New Zealand
                                </p>
                            </div>
                        </div>
                        <div className="row d-flex align-items-start pb-4">
                            <div className="col-auto text-start">
                                <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#69C064"><path d="M760-480q0-117-81.5-198.5T480-760v-80q75 0 140.5 28.5t114 77q48.5 48.5 77 114T840-480h-80Zm-160 0q0-50-35-85t-85-35v-80q83 0 141.5 58.5T680-480h-80Zm198 360q-125 0-247-54.5T329-329Q229-429 174.5-551T120-798q0-18 12-30t30-12h162q14 0 25 9.5t13 22.5l26 140q2 16-1 27t-11 19l-97 98q20 37 47.5 71.5T387-386q31 31 65 57.5t72 48.5l94-94q9-9 23.5-13.5T670-390l138 28q14 4 23 14.5t9 23.5v162q0 18-12 30t-30 12ZM241-600l66-66-17-94h-89q5 41 14 81t26 79Zm358 358q39 17 79.5 27t81.5 13v-88l-94-19-67 67ZM241-600Zm358 358Z"/>
                                </svg>
                            </div>
                            <div className="col">
                                <p className="tertiary-subtitle-text"><strong>Phone 24/7</strong></p>
                                <p className="sub-title-text">
                                    027-393-4412
                                </p>
                            </div>
                        </div>
                        <div className="row d-flex align-items-start pb-4">
                            <div className="col-auto text-start">
                                <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#69C064"><path d="m612-292 56-56-148-148v-184h-80v216l172 172ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-400Zm0 320q133 0 226.5-93.5T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 133 93.5 226.5T480-160Z"/>
                                </svg>
                            </div>
                            <div className="col">
                                <p className="tertiary-subtitle-text"><strong>Operating Hours</strong></p>
                                <p className="sub-title-text">
                                    8:00am - 10:00pm Mon - Sun
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-8 px-5">
                        <h1 className="primary-subtitle-text pb-5 text-center"><strong className="title-text">Get in Touch</strong></h1>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <input
                                    type="text"
                                    className="form-control"
                                    name="name"
                                    placeholder="Your Name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <input
                                    type="email"
                                    className="form-control"
                                    name="email"
                                    placeholder="Email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <textarea
                                    className="form-control"
                                    name="message"
                                    placeholder="Message"
                                    rows="10"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                ></textarea>
                            </div>
                            <div className="text-center py-3">
                                <button type="submit" className="custom-btn custom-btn-container btn btn-success px-4 py-2">SEND MESSAGE</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row d-flex justify-content-center">
                    <div className="col-auto p-5">
                        <h5>Contact us to book your freequote.</h5>
                        <div className="row">
                            <ul className="ul-style">
                                <li><strong className='check-icon px-1'>&#10003;</strong> No contracts and no obligation</li>
                                <li><strong className='check-icon px-1'>&#10003;</strong> Competitive Rates</li>
                                <li><strong className='check-icon px-1'>&#10003;</strong> Top quality work</li>
                                <li><strong className='check-icon px-1'>&#10003;</strong> A service schedule designed to meet your needs</li>
                                <li><strong className='check-icon px-1'>&#10003;</strong> Proud members of the Better Business Bureau</li>
                                <li><strong className='check-icon px-1'>&#10003;</strong> We provide all our own supplies.</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-4 contact-info p-5 mx-5">
                        <h4 className="pb-3">Contact Information</h4>
                        <div className="row">
                            <div className="col-auto text-start">
                                <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#69C064"><path d="M480-480q33 0 56.5-23.5T560-560q0-33-23.5-56.5T480-640q-33 0-56.5 23.5T400-560q0 33 23.5 56.5T480-480Zm0 294q122-112 181-203.5T720-552q0-109-69.5-178.5T480-800q-101 0-170.5 69.5T240-552q0 71 59 162.5T480-186Zm0 106Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Zm0-480Z"/>
                                </svg>
                            </div>
                            <div className="col">
                                <p className="sub-title-text"><strong>Nelson-Tasman</strong></p>
                                <p className="sub-title-text">
                                    4 Oaks Lane, Motueka 7120, New Zealand
                                </p>
                                <p className="sub-title-text">
                                    Phone: 027-393-4412
                                </p>
                                <p className="sub-title-text">
                                    Email: totallyfake@email.com
                                </p>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact;