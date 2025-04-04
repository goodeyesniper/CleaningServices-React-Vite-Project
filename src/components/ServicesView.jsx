import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';


const ServicesView = () => {
    const { id } = useParams(); // Get the service ID from the URL
    const navigate = useNavigate(); // To update the URL when clicking list items

    const cleaningServices = [
        { 
            id: 1, 
            image: "service-apartment-img.jpg", 
            name: "Apartment Cleaning", 
            details: "Our apartment cleaning service ensures a tidy and organized living space tailored to suit compact environments. From dusting and vacuuming to sanitizing surfaces, we prioritize every corner of your apartment. Enjoy a refreshing home atmosphere designed to match your lifestyle.",
            howdoes: "How does our apartment cleaning program work?",
            details2: "Apartment cleaning starts with decluttering the space to ensure easy access to all surfaces. The process includes dusting furniture, shelves, and fixtures, followed by vacuuming or sweeping and mopping the floors. Kitchen cleaning involves wiping countertops, disinfecting appliances, and scrubbing the sink to remove grime. Bathrooms require special attention, with thorough scrubbing of the toilet, sink, and shower to eliminate stains and bacteria. Bedrooms and living areas are tidied up by changing bed linens, fluffing cushions, and removing dust from hard-to-reach areas. The final step includes taking out the trash and adding fresh scents to leave the apartment clean and refreshed.",
        },
        { 
            id: 2, 
            image: "service-house-img.jpg", 
            name: "House Cleaning", 
            details: "Whether it's regular maintenance or deep cleaning, our house cleaning service keeps your home sparkling. We focus on every room, ensuring spotless surfaces, fresh air, and a hygienic environment. Let us create a welcoming space for you and your family to relax.",
            howdoes: "How does our apartment cleaning program work?",
            details2: "House cleaning begins with organizing clutter to create an efficient workspace for cleaning. Dusting and wiping down all surfaces, including shelves, tables, and baseboards, is essential to remove accumulated dust. Floors are then vacuumed or swept, followed by mopping to maintain a spotless and fresh appearance. The kitchen is thoroughly cleaned by scrubbing countertops, sanitizing sinks, and ensuring appliances are free of grease and dirt. Bathrooms receive deep cleaning, including toilet scrubbing, mirror polishing, and disinfection of all surfaces. Finishing touches include taking out the garbage, spraying air fresheners, and arranging items neatly to enhance the home's overall cleanliness.", 
        },
        { 
            id: 3, 
            image: "service-movein-moveout-img.jpg", 
            name: "Move In / Move Out", 
            details: "Make moving less stressful with our specialized cleaning service. We prepare your new home to feel fresh and inviting or ensure your previous residence is left in perfect condition. From kitchens to bathrooms, we clean it all thoroughly for a smooth transition.",
            howdoes: "How does our apartment cleaning program work?",
            details2: "Move-in and move-out cleaning ensures a property is spotless for new occupants or final inspections. The process begins with deep cleaning of all rooms, including dusting walls, baseboards, and ceiling fans. Floors are vacuumed, swept, and mopped, removing any accumulated dirt or stains. Kitchens and bathrooms undergo extensive scrubbing, with countertops, sinks, and appliances sanitized to eliminate bacteria and odors. Any leftover trash, cobwebs, or debris from previous tenants is removed to present a fresh and welcoming space. The last step involves checking every detail, ensuring the home is move-in ready or prepared for the final walkthrough.", 
        },
        { 
            id: 4, 
            image: "service-carpet-img.jpg", 
            name: "Carpet Cleaning", 
            details: "We bring carpets back to life with our deep-cleaning techniques, removing dirt, stains, and allergens. Our advanced technology ensures your carpets are soft, fresh, and vibrant. Perfect for creating a healthier indoor environment for you and your loved ones.",
            howdoes: "How does our apartment cleaning program work?",
            details2: "Carpet cleaning starts with vacuuming to remove surface dirt and dust. A pre-treatment solution is applied to break down deep-seated stains and grime. The cleaning method, whether steam cleaning, shampooing, or dry cleaning, is chosen based on the carpet's material and condition. Hot water extraction or steam cleaning effectively removes embedded dirt, allergens, and bacteria. After the deep cleaning, excess moisture is extracted to speed up the drying process and prevent mold growth. Finally, deodorizing treatments are applied to leave the carpet smelling fresh and looking revitalized.", 
        },
        { 
            id: 5, 
            image: "service-after-renovation-img.jpg", 
            name: "After Renovation", 
            details: "Post-renovation mess can be overwhelming—let us handle it for you. We clean dust, debris, and stains, ensuring your newly renovated space looks polished and ready for use. Enjoy your updated home or office without the hassle of cleaning.",
            howdoes: "How does our apartment cleaning program work?",
            details2: "After renovation cleaning begins by removing construction dust and debris from all surfaces. Walls, ceilings, and floors are carefully dusted and wiped down to eliminate any fine particles left behind. Windows, light fixtures, and ventilation systems are thoroughly cleaned to remove dust buildup. Kitchens and bathrooms receive a deep clean, including disinfecting sinks, countertops, and newly installed appliances. Floors are vacuumed and mopped multiple times to ensure a spotless finish. The final step involves disposing of leftover materials, polishing surfaces, and adding a fresh touch to make the space move-in ready.", 
        },
        { 
            id: 6, 
            image: "service-curtain-img.jpg", 
            name: "Curtain Cleaning", 
            details: "Curtains can trap dust and allergens, but our cleaning service revitalizes them. We use gentle yet effective methods to maintain their fabric quality while removing contaminants. Your curtains will look fresh and contribute to a healthier indoor space.",
            howdoes: "How does our apartment cleaning program work?",
            details2: "Curtain cleaning starts with assessing the fabric type to determine the best cleaning method. Dust and dirt are first removed using a vacuum or gentle brushing. For machine-washable curtains, a mild detergent and cold water cycle help preserve the fabric. Delicate or heavy curtains may require steam cleaning or professional dry cleaning to prevent damage. Once cleaned, curtains are carefully dried to avoid shrinkage and wrinkles. Finally, they are reinstalled, ensuring they look fresh and enhance the cleanliness of the space.", 
        },
        { 
            id: 7, 
            image: "service-window-img.jpg", 
            name: "Window Cleaning", 
            details: "Say goodbye to streaks and smudges with our professional window cleaning service. We ensure crystal-clear windows that brighten your home or office and improve the view. Whether it's ground level or high-rise, we've got you covered.",
            howdoes: "How does our apartment cleaning program work?",
            details2: "Window cleaning begins with removing dust and cobwebs from window frames and sills. A cleaning solution is applied to the glass, breaking down dirt, smudges, and water stains. Windows are then scrubbed using a microfiber cloth or a squeegee for a streak-free finish. Special attention is given to window tracks and screens, ensuring they are thoroughly wiped down and free of grime. Exterior windows may require extended tools or professional equipment for high-rise buildings. The final step involves drying the glass properly to achieve a crystal-clear shine.", 
        },
        { 
            id: 8, 
            image: "service-commercial-img.jpg", 
            name: "Commercial Cleaning", 
            details: "Our commercial cleaning service keeps your workplace professional, clean, and welcoming. From common areas to workstations, we ensure a spotless and hygienic environment. Boost productivity and create positive impressions with our tailored cleaning solutions.",
            howdoes: "How does our apartment cleaning program work?",
            details2: "Commercial cleaning involves maintaining cleanliness in offices, retail spaces, and business establishments. The process starts with general dusting, vacuuming, and sanitizing high-touch areas like doorknobs and desks. Restrooms are cleaned and disinfected, ensuring hygiene standards are met. Floors are swept and mopped, while carpets are deep cleaned periodically to remove dirt buildup. Break rooms and kitchens receive special attention, with appliances, sinks, and counters thoroughly sanitized. The cleaning team ensures a fresh and organized workspace that promotes productivity and a professional environment.", 
        },
        { 
            id: 9, 
            image: "service-residential-img.jpg", 
            name: "Residential Cleaning", 
            details: "Designed for homes of all sizes, our residential cleaning service covers everything from living areas to bedrooms. We handle routine cleaning, decluttering, and sanitization to maintain a fresh and clean home. Let us make your home a comfortable haven for your family.",
            howdoes: "How does our apartment cleaning program work?",
            details2: "Residential cleaning focuses on maintaining a clean and comfortable home environment. The process includes dusting furniture, cleaning floors, and wiping down all surfaces to eliminate dirt and bacteria. Bathrooms are disinfected, with toilets, sinks, and showers scrubbed to maintain hygiene. Kitchens receive thorough cleaning, ensuring countertops, appliances, and sinks are free of grease and stains. Bedrooms and living areas are tidied up, with fresh linens and proper organization enhancing the home’s comfort. The final step includes taking out the trash and adding finishing touches, such as air fresheners or neatly arranged décor, to create a welcoming space.", 
        },
      ];


    // State to store the selected service
    const [selectedService, setSelectedService] = useState(null);


    // Update the selected service when the URL parameter changes
    useEffect(() => {
        const service = cleaningServices.find(service => service.id === parseInt(id));
        if (service) {
            setSelectedService(service);
        }
    }, [id]); // Runs when `id` changes

    // Function to handle clicking on a service in the list
    const handleServiceClick = (service) => {
        console.log("Service Clicked:", service);
        setSelectedService(service); // Update the state
        navigate(`/servicesview/${service.id}`); // Update the URL
    };

    if (!selectedService) {
        return <p>Service not found.</p>;
    }

    return (
        <>
            <div className="container pt-5 pb-3">
                <h1 className="text-center primary-subtitle-text py-3"><strong>{selectedService.name}</strong></h1>
                <div className="row pt-5 d-flex justify-content-center">
                    {/* Left Column */}
                    <div className="col-lg-11">
                        <div className="row">
                            <div className="col-lg-9">
                                <div>
                                    <img src={`/${selectedService.image}`} alt={selectedService.name} className="img-fluid" />
                                </div>
                                <h2 className="pt-5 pb-4">{selectedService.name}</h2>
                                <p className="pb-2">{selectedService.details}</p>
                                <h4 className="py-3">{selectedService.howdoes}</h4>
                                <p>{selectedService.details2}</p>
                                <p className="pt-3 pb-1">Every time we clean, we'll provide services that include the following:</p>

                                <div className="row d-flex align-items-start pb-2">
                                    <div className="col-auto">
                                        <strong className='check-icon px-1'>&#10003;</strong>
                                    </div>
                                    <div className="col">
                                        <h5 className="pt-2 sub-title-text"><strong>Bathrooms</strong></h5>
                                        Cobwebs removed, dusting, floors cleaned, toilets cleaned, mirrors / chrome fixtures cleaned, shower doors cleaned, tile walls, bathtub / showers cleaned
                                    </div>
                                </div>
                                <div className="row d-flex align-items-start pb-2">
                                    <div className="col-auto">
                                        <strong className='check-icon px-1'>&#10003;</strong>
                                    </div>
                                    <div className="col">
                                        <h5 className="pt-2 sub-title-text"><strong>Sleeping Areas</strong></h5>
                                        Surfaces hand wiped, floors cleaned, general dusting, cobwebs removed, doors and door frames spot cleaned
                                    </div>
                                </div>
                                <div className="row d-flex align-items-start pb-2">
                                    <div className="col-auto">
                                        <strong className='check-icon px-1'>&#10003;</strong>
                                    </div>
                                    <div className="col">
                                        <h5 className="pt-2 sub-title-text"><strong>Living Areas</strong></h5>
                                        Surfaces hand wiped, cobwebs removed, doors and door frames spot cleaned, general dusting, floors cleaned
                                    </div>
                                </div>
                                <div className="row d-flex align-items-start pb-2">
                                    <div className="col-auto">
                                        <strong className='check-icon px-1'>&#10003;</strong>
                                    </div>
                                    <div className="col">
                                        <h5 className="pt-2 sub-title-text"><strong>Kitchen</strong></h5>
                                        Countertops cleaned, outside of range hood cleaned, top and front of range cleaned, drip pans / glass top surfaces wiped, sinks cleaned and chrome shined, fronts of all appliances cleaned, general dusting, cobwebs removed, microwave wiped out, doors and door frames spot cleaned
                                    </div>
                                </div>

                                <div className="row py-5">
                                    <div className="col">
                                        <div className="row d-flex align-items-center justify-content-center py-2 px-3"
                                            style={{ backgroundColor: "#F3F3F3" }}
                                        >
                                            <div className="col-lg-4 col-md-6 col-sm-6 d-flex align-items-center justify-content-center px-2">
                                                <div className="col-auto text-start px-2 py-3">
                                                    <svg xmlns="http://www.w3.org/2000/svg" height="30px" width="30px" viewBox="0 -960 960 960" fill="#69C064">
                                                        <path d="M760-480q0-117-81.5-198.5T480-760v-80q75 0 140.5 28.5t114 77q48.5 48.5 77 114T840-480h-80Zm-160 0q0-50-35-85t-85-35v-80q83 0 141.5 58.5T680-480h-80Zm198 360q-125 0-247-54.5T329-329Q229-429 174.5-551T120-798q0-18 12-30t30-12h162q14 0 25 9.5t13 22.5l26 140q2 16-1 27t-11 19l-97 98q20 37 47.5 71.5T387-386q31 31 65 57.5t72 48.5l94-94q9-9 23.5-13.5T670-390l138 28q14 4 23 14.5t9 23.5v162q0 18-12 30t-30 12ZM241-600l66-66-17-94h-89q5 41 14 81t26 79Zm358 358q39 17 79.5 27t81.5 13v-88l-94-19-67 67ZM241-600Zm358 358Z"/>
                                                    </svg>
                                                </div>
                                                <div className="col text-start py-3">
                                                    <p className="p-0 m-0 sub-title-text-sm">Phone: 027-393-4412</p>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-md-6 col-sm-6 d-flex align-items-center justify-content-center px-2">
                                                <div className="col-auto text-start px-2 py-3">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#69C064" className="bi bi-clock" viewBox="0 0 16 16">
                                                        <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z"/>
                                                        <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0"/>
                                                    </svg>
                                                </div>
                                                <div className="col text-start py-3">
                                                    <p className="p-0 m-0 sub-title-text-sm">Mon-Sun: 9:00 am - 5:00 pm</p>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 d-flex align-items-center justify-content-center">
                                                <div className="col text-center py-3">
                                                    <Link to="/cleaningview/1" className='link-reset'>
                                                        <button className="custom-btn-container custom-btn btn btn-success py-2 px-3">GET FREE ESTIMATE</button>
                                                    </Link>
                                                </div>
                                            </div>
                                            
                                            
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Right Column */}

                            <div className="col-lg-3">
                                <ul className="ul-style list-group">
                                    {cleaningServices.map((service) => (
                                    <li
                                        key={service.id}
                                        className={`list-group-item py-3 ${
                                            service.id === selectedService.id ? "active" : ""
                                        }`}
                                    
                                        onClick={() => handleServiceClick(service)}
                                    >
                                        {service.name}
                                    </li>
                                    ))}
                                </ul>
                            </div>
          
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ServicesView;