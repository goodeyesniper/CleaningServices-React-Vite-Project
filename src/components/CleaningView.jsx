import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import CleaningCalculator from "./CleaningCalculator";
import CarpetCleaningCalculator from "./CarpetCleaningCalculator"; // Fixed import name

const CleaningView = () => {
  const { id } = useParams(); // Get the service ID from the URL
  const navigate = useNavigate(); // To update the URL when clicking list items

  // List of cleaning services
  const cleaningView = [
    { id: 1, name: "Apartment Cleaning", render: (name) => <CleaningCalculator serviceName={name} /> },
    { id: 2, name: "House Cleaning", render: (name) => <CleaningCalculator serviceName={name} /> },
    { id: 3, name: "Move In / Move Out", render: (name) => <CleaningCalculator serviceName={name} /> },
    { id: 4, name: "Carpet Cleaning", render: (name) => <CarpetCleaningCalculator serviceName={name} /> },
    { id: 5, name: "After Renovation", render: (name) => <CleaningCalculator serviceName={name} /> },
    { id: 6, name: "Curtain Cleaning", render: (name) => <CarpetCleaningCalculator serviceName={name} /> },
    { id: 7, name: "Window Cleaning", render: (name) => <CarpetCleaningCalculator serviceName={name} /> },
    { id: 8, name: "Commercial Cleaning", render: (name) => <CleaningCalculator serviceName={name} /> },
    { id: 9, name: "Residential Cleaning", render: (name) => <CleaningCalculator serviceName={name} /> },
  ];

  // State to store the selected service
  const [selectedService, setSelectedService] = useState(cleaningView[0]); // Default to id: 1

  // Update the selected service when the URL parameter changes
  useEffect(() => {
    const serviceId = parseInt(id, 10); // Parse the ID from the URL
    const service = cleaningView.find((service) => service.id === serviceId);
    if (service) {
      setSelectedService(service);
    } else {
      // Fallback to default service (id: 1) if the ID is invalid or not provided
      setSelectedService(cleaningView[0]);
      navigate(`/cleaningview/1`, { replace: true }); // Update the URL to the default
    }
  }, [id, navigate]); // Removed `cleaningView` dependency to avoid unnecessary reruns

  // Function to handle clicking on a service in the list
  const handleServiceClick = (service) => {
    setSelectedService(service); // Update the selected service state
    navigate(`/cleaningview/${service.id}`); // Update the URL
  };

  return (
    <div className="container pt-5 pb-3">
      <h1 className="text-center primary-subtitle-text py-3 pb-5">
        <strong>Quote A Service</strong>
      </h1>
      <div className="row d-flex justify-content-center">
        <div className="col-lg-10">
          <div className="row">
            {/* List of Services */}
            <div className="col-lg-3 g-3">
              <ul className="ul-style list-group">
                {cleaningView.map((service) => (
                  <li
                    key={service.id}
                    className={`list-group-item py-3 ${
                      service.id === selectedService.id ? "active" : ""
                    }`}
                    onClick={() => handleServiceClick(service)}
                    style={{ cursor: "pointer" }} // Add pointer cursor for better UX
                  >
                    {service.name}
                  </li>
                ))}
              </ul>
            </div>

            {/* Corresponding Services Fields */}
            <div className="col-lg-9 border rounded-2 px-4 services-field-bg g-3">
                {selectedService.render(selectedService.name)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CleaningView;