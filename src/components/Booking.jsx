import React, { useState } from "react";
import CleaningCalculator from "./CleaningCalculator";
import CarpetCleaningCalculator from "./CarpetCleaningCalculator"

const Booking = () => {
    const [bookingData, setBookingData] = useState({
        bedrooms: 0,
        livingRooms: 0,
        toilets: 0,
        showerRooms: 0,
        kitchenSize: "None",
        cleaningSupplies: "Use my own",
        additionalRooms: {
            diningRoom: false,
            laundryRoom: false,
            playRoom: false,
            homeOffice: false,
            attic: false,
            basement: false,
            garage: false,
            gym: false,
        },
        hasPets: false,
        cleanFridge: false,
        additionalServices: {
            ovenCleaning: false,
            organizeClosets: false,
            laundryService: false,
            furnitureCleaning: false,
            dishWashing: false,
            plantCare: false,
        },

        // ✅ Add Carpet Cleaning Fields
        carpetCleaning: {
            totalArea: 1,
            totalCost: 10,
            unit: "sq mtr",
            carpetCount: 1,
            carpetSizes: [{ size: 1 }],
        }
    });

    const [formData, setFormData] = useState({
        name: "",
        address: "",
        email: "",
        phone: "",
        serviceType: "-Please Select-",
        date: "",
        startTime: "",
        endTime: "",
        selectedService: "One Time Service", // Default
    });

    const services = [
        { id: 1, title: "One Time Service" },
        { id: 2, title: "Weekly Service" },
        { id: 3, title: "Bi-Weekly Service" },
        { id: 4, title: "Monthly Service" },
    ];

    const handleCarpetCleaningChange = (updatedData) => {
        setBookingData((prev) => ({
            ...prev,
            carpetCleaning: updatedData,
        }));
    };
    
    const [selectedService, setSelectedService] = useState('');

    const [selected, setSelected] = useState(services[0].id);

    const handleUpdateBookingData = (updatedData) => {
        setBookingData((prevData) => ({
            ...prevData,
            ...updatedData,
        }));
    };


    const handleSaveBooking = () => {
        const filteredBookingData = isSpecialCleaning
            ? { carpetCleaning: bookingData.carpetCleaning }
            : { ...bookingData, carpetCleaning: undefined };

        console.log("Booking Data Saved:", { formData, bookingData: filteredBookingData });
        localStorage.setItem("bookingData", JSON.stringify({ formData, bookingData: filteredBookingData }));
    };
    
    

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSelect = (id) => {
        const selectedService = services.find(service => service.id === id).title;
        setSelected(id);  // ✅ Update selected state
        setFormData((prev) => ({ ...prev, selectedService }));
    };
    

    const handleSubmit = (e) => {
        e.preventDefault();
        handleSaveBooking();
    
        // Ensure isSpecialCleaning is based on the latest formData
        const isSpecialCleaning = ["Carpet Cleaning", "Curtain Cleaning", "Window Cleaning"].includes(formData.serviceType);
    
        // Create a formatted message for the alert
        const alertMessage = `
            📋 Booking Summary 📋
    
            🔹 Name: ${formData.name}
            🔹 Address: ${formData.address}
            🔹 Email: ${formData.email}
            🔹 Phone: ${formData.phone}
            🔹 Service Type: ${formData.serviceType}
            🔹 Date: ${formData.date}
            🔹 Time: ${formData.startTime} - ${formData.endTime}
            🔹 Selected Service: ${formData.selectedService}
    
            🏡 Property Details:
            - Bedrooms: ${bookingData.bedrooms}
            - Living Rooms: ${bookingData.livingRooms}
            - Toilets: ${bookingData.toilets}
            - Kitchen Size: ${bookingData.kitchenSize}
    
            ${isSpecialCleaning ? `
            🧼 Carpet Cleaning Details:
            - Total Area: ${bookingData.carpetCleaning.totalArea} ${bookingData.carpetCleaning.unit}
            - Carpet Count: ${bookingData.carpetCleaning.carpetCount}
            ` : ""}
            
            ✅ Your booking has been saved successfully!
        `;
    
        // Show the alert with booking details
        alert(alertMessage);
    
        // Reset formData
        setFormData({
            name: "",
            address: "",
            email: "",
            phone: "",
            serviceType: "-Please Select-",
            date: "",
            startTime: "",
            endTime: "",
            selectedService: "One Time Service",
        });
    
        // Reset bookingData
        setBookingData({
            bedrooms: 0,
            livingRooms: 0,
            toilets: 0,
            showerRooms: 0,
            kitchenSize: "None",
            cleaningSupplies: "Use my own",
            additionalRooms: {
                diningRoom: false,
                laundryRoom: false,
                playRoom: false,
                homeOffice: false,
                attic: false,
                basement: false,
                garage: false,
                gym: false,
            },
            hasPets: false,
            cleanFridge: false,
            additionalServices: {
                ovenCleaning: false,
                organizeClosets: false,
                laundryService: false,
                furnitureCleaning: false,
                dishWashing: false,
                plantCare: false,
            },
    
            // ✅ Reset Carpet Cleaning Fields
            carpetCleaning: {
                totalArea: 1,
                totalCost: 10,
                unit: "sq mtr",
                carpetCount: 1,
                carpetSizes: [{ size: 1 }],
            }
        });
    
        // ✅ Reset selected state to default service
        setSelected(services[0].id);
    };
    
    
    

    const isCleaningService = [
        "Apartment Cleaning",
        "House Cleaning",
        "Move In / Move Out",
        "After Renovation",
        "Commercial Cleaning",
        "Residential Cleaning",
    ].includes(formData.serviceType);

    const isSpecialCleaning = ["Carpet Cleaning", "Curtain Cleaning", "Window Cleaning"].includes(formData.serviceType);

      
    return (
        <>
            <div className="container text-center pt-5">
                <h1 className="primary-subtitle-text pt-3 pb-5"><strong>Cleaning Service Form</strong></h1>
            </div>
            <div className="container">
                <div className="row d-flex justify-content-center">
                    <div className="col-lg-7">
                        <h4 className="py-4 book-a-cleaning-service">Book your cleaning service in 60 seconds</h4>
                        <h5 className="pb-4 pt-2">Contact Information</h5>
                        <p className="sub-title-text pb-3">This information will be used to contact you about your service.</p>
                        <form onSubmit={handleSubmit}>
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="mb-4">
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="name"
                                            placeholder="Name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div className="mb-4">
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
                                </div>

                                <div className="col-lg-6 pb-4">
                                    <div className="mb-4">
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="address"
                                            placeholder="Address"
                                            value={formData.address}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <input
                                            type="tel"
                                            className="form-control"
                                            name="phone"
                                            placeholder="Phone Number"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="row pb-4">
                                <div className="col-lg-12">
                                    <h5 className="py-3 book-a-cleaning-service-top-border">Service Requested</h5>
                                    <div className="mb-3">
                                        <select
                                            className="form-select"
                                            name="serviceType"
                                            value={formData.serviceType}
                                            onChange={handleChange}
                                            required
                                        >
                                            <option>-Please Select-</option>
                                            {["Apartment Cleaning", "House Cleaning", "Move In / Move Out", "Carpet Cleaning", "After Renovation", "Curtain Cleaning", "Window Cleaning", "Commercial Cleaning", "Residential Cleaning"].map((service) => (
                                                <option key={service}>{service}</option>
                                            ))}
                                        </select>
                                    </div>
                                    <div className="mb-3">
                                        <input
                                            type="date"
                                            className="form-control"
                                            name="date"
                                            value={formData.date}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-12">
                                    <h5 className="py-3 book-a-cleaning-service-top-border">Property Information</h5>
                                    <p className="sub-title-text">Tell us about your property</p>
                                    <div className="container rounded-3 calculator-bg">
                                        {isCleaningService ? (
                                            <CleaningCalculator
                                                data={bookingData} 
                                                onDataChange={handleUpdateBookingData} 
                                                serviceName={<span className="service-name">{formData.serviceType}</span>} 
                                            />
                                        ) : isSpecialCleaning ? (
                                            <CarpetCleaningCalculator
                                                data={bookingData.carpetCleaning}  // ✅ Pass only carpetCleaning data
                                                onDataChange={handleCarpetCleaningChange}
                                                serviceName={<span className="service-name">{formData.serviceType}</span>}
                                            />
                                        ) : (
                                            <p className="service-name"><strong>Please select a valid service type to see the calculator.</strong></p>
                                        )}
                                    </div>

                                </div>
                            </div>
                            
                            <div className="row pt-5">
                                <div className="col-lg-12">
                                    <h5 className="py-3 book-a-cleaning-service-top-border">When would you like us to come?</h5>
                                    <p className="sub-title-text pb-3">Any time between:</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="mb-3">
                                        <input
                                            type="time"
                                            className="form-control"
                                            name="startTime"
                                            value={formData.startTime}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="mb-3">
                                        <input
                                            type="time"
                                            className="form-control"
                                            name="endTime"
                                            value={formData.endTime}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="row pt-5">
                            <div className="col-lg-12">
                                <h5 className="pt-3 book-a-cleaning-service-top-border">How Often?</h5>
                                <p className="pt-3">It's all about matching you with the perfect cleaner for your home. Scheduling is flexible. Cancel or reschedule anytime.</p>
                            </div>
                            </div>

                            <div className="row">
                                {services.map((service) => (
                                    <div className="col-auto d-flex justify-content-center py-2" key={service.id}>
                                        <div
                                            className={`card text-center ${selected === service.id ? "border-primary shadow" : ""}`}
                                            style={{ cursor: "pointer" }}
                                            onClick={() => handleSelect(service.id)}
                                        >
                                            <div className="card-body">
                                                <p className="card-title">{service.title}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="py-5 d-flex justify-content-center">
                                        <button type="submit" className="custom-btn-container custom-btn btn btn-success px-5 py-2">BOOK NOW</button>
                                    </div>   
                                </div>
                            </div>

                            <div className="row book-a-cleaning-service-top-border py-3">
                                <div className="col-lg-12">
                                    <p className="text-center">We will confirm your service request within 24 hours. Thank you very much!</p>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="col-lg-4">
                        <img src="booking-img.jpg" alt="" />
                    </div>
                
                </div>
            </div>
        </>
    );
};

export default Booking;