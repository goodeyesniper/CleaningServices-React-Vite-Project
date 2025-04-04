import React, { useState } from 'react';

const CleaningCalculator = ({ serviceName, data, onDataChange }) => {
    const [state, setState] = useState({
        bedrooms: data?.bedrooms || 0,
        livingRooms: data?.livingRooms || 0,
        toilets: data?.toilets || 0,
        showerRooms: data?.showerRooms || 0,
        kitchenSize: data?.kitchenSize || "None",
        cleaningSupplies: data?.cleaningSupplies || "Use my own",
        additionalRooms: data?.additionalRooms || {
            diningRoom: false,
            laundryRoom: false,
            playRoom: false,
            homeOffice: false,
            attic: false,
            basement: false,
            garage: false,
            gym: false,
        },
        hasPets: data?.hasPets || false,
        cleanFridge: data?.cleanFridge || false,
        additionalServices: data?.additionalServices || {
            ovenCleaning: false,
            organizeClosets: false,
            laundryService: false,
            furnitureCleaning: false,
            dishWashing: false,
            plantCare: false,
        },
    });

    const handleChange = (key, value) => {
        const newState = { ...state, [key]: value };
        setState(newState);
        onDataChange?.(newState);
    };

    
    // Reset Function
    const handleReset = () => {
        const resetState = {
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
        };
        setState(resetState);
        onDataChange?.(resetState);
    };
    
    // Prices and Times
    const pricing = {
        bedrooms: 30,
        livingRooms: 20,
        toilets: 15,
        showerRooms: 25,
        kitchen: { None: 0, Small: 40, Medium: 60, Large: 80 },
        cleaningSupplies: { "Provided by cleaner": 10, "Use my own": 0 },
        additionalRooms: 10,
        hasPets: 20,
        cleanFridge: 15,
        additionalServices: {
            ovenCleaning: 30,
            organizeClosets: 25,
            laundryService: 40,
            furnitureCleaning: 35,
            dishWashing: 20,
            plantCare: 15,
        },
    };

    const calculateCost = () => {
        let totalCost = state.bedrooms * pricing.bedrooms +
            state.livingRooms * pricing.livingRooms +
            state.toilets * pricing.toilets +
            state.showerRooms * pricing.showerRooms +
            pricing.kitchen[state.kitchenSize] +
            pricing.cleaningSupplies[state.cleaningSupplies];    

        let additionalRoomsCost = 0;
        Object.keys(state.additionalRooms).forEach(room => {
            if (state.additionalRooms[room]) additionalRoomsCost += pricing.additionalRooms;
        });
        totalCost += additionalRoomsCost;

        let otherOptionsCost = (state.hasPets ? pricing.hasPets : 0) + (state.cleanFridge ? pricing.cleanFridge : 0);
        totalCost += otherOptionsCost;

        let additionalServicesCost = 0;
        Object.keys(state.additionalServices).forEach(service => {
            if (state.additionalServices[service]) additionalServicesCost += pricing.additionalServices[service];
        });
        totalCost += additionalServicesCost;

        return {
            totalCost,
            additionalRoomsCost,
            otherOptionsCost,
            additionalServicesCost,
        };
        
    };

    const calculateTime = () => {
        let timeInHours = 
            state.bedrooms * 0.5 +
            state.livingRooms * 0.4 +
            state.toilets * 0.3 +
            state.showerRooms * 0.5 +
            (state.kitchenSize === "None" ? 0 : 
                state.kitchenSize === "Small" ? 0.6 : 
                state.kitchenSize === "Medium" ? 0.8 : 1.0);
    
        Object.keys(state.additionalRooms).forEach(room => {
            if (state.additionalRooms[room]) timeInHours += 0.4;
        });
    
        if (state.hasPets) timeInHours += 0.5;
        if (state.cleanFridge) timeInHours += 0.4;
    
        Object.keys(state.additionalServices).forEach(service => {
            if (state.additionalServices[service]) timeInHours += 0.6;
        });
    
        // Ensure minimum time is not 1hr when everything is zero
        if (timeInHours === 0) return "0 min";
    
        let totalMinutes = Math.round(timeInHours * 60);
        let hours = Math.floor(totalMinutes / 60);
        let minutes = totalMinutes % 60;
    
        return hours > 0 
            ? `${hours} hr${hours > 1 ? 's' : ''} ${minutes > 0 ? minutes + " mins" : ""}` 
            : `${minutes} min`;
    };
    
    
    
    // Usage
    const { totalCost, additionalRoomsCost, otherOptionsCost, additionalServicesCost } = calculateCost();
    const estimatedTime = calculateTime();

    return (
        <>
            <div className="row d-flex align-items-center justify-content-center">
                <div className="col-lg-6 col-md-6 col-sm-6">
                    <h4 className='px-2 text-primary secondary-subtitle-text'>{serviceName}</h4>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6 py-4 text-md-end text-sm-end text-start reset-values-button ">
                    <button className='custom-btn-container custom-btn px-3 py-1' onClick={handleReset}>Reset Values</button>
                </div>
            </div>
            <div className="row p-2 border rounded-2 g-2 mb-3 basic-info-bg">
                <h5 className='pt-2 pb-3 text-primary'>Basic Information</h5>

                {/* Left Column of Calculator*/}
                <div className="col-lg-6">
                    <p className='mb-1 pb-1 calculator-base-text'>
                        Number of Bedrooms:
                    </p>
                    <div className="mb-4">
                        <select
                            className='form-select'
                            value={state.bedrooms} 
                            onChange={(e) => handleChange("bedrooms", Number(e.target.value))}
                        >
                            {[0, 1, 2, 3, 4, 5].map(num => <option key={num} value={num}>{num}</option>)}
                        </select>
                    </div>

                    <p className='mb-1 pb-1 calculator-base-text'>
                        Number of Shower Rooms:
                    </p>
                    <div className="mb-4">
                        <select className='form-select' value={state.showerRooms} onChange={(e) => handleChange("showerRooms", Number(e.target.value))}>
                            {[0, 1, 2, 3, 4, 5].map(num => <option key={num} value={num}>{num}</option>)}
                        </select>
                    </div>

                    <p className="mb-1 pb-1 calculator-base-text">
                        Size of your kitchen if included:
                    </p>
                    <div className="mb-4">
                        <select className='form-select' value={state.kitchenSize} onChange={(e) => handleChange("kitchenSize", e.target.value)}> 
                            {["None", "Small", "Medium", "Large"].map(size => (
                                <option key={size} value={size}>{size}</option>
                            ))}
                        </select>
                    </div>
                </div>
                        
                {/* Right Column of Calculator*/}
                <div className="col-lg-6">
                    <p className='mb-1 pb-1 calculator-base-text'>
                        Number of Living Rooms:
                    </p>
                    <div className="mb-4">
                        <select className='form-select' value={state.livingRooms} onChange={(e) => handleChange("livingRooms", Number(e.target.value))}>
                            {[0, 1, 2, 3].map(num => <option key={num} value={num}>{num}</option>)}
                        </select>
                    </div>

                    <p className="mb-1 pb-1 calculator-base-text">
                        Number of Toilets:
                    </p>
                    <div className="mb-4">
                        <select className='form-select' value={state.toilets} onChange={(e) => handleChange("toilets", Number(e.target.value))}>
                            {[0, 1, 2, 3, 4, 5].map(num => <option key={num} value={num}>{num}</option>)}
                        </select>
                    </div>

                    <p className="mb-1 pb-1 calculator-base-text">
                        Cleaning Supplies:
                    </p>
                    <div className="mb-4">
                        <select className='form-select' value={state.cleaningSupplies} onChange={(e) => handleChange("cleaningSupplies", e.target.value)}>
                            {["Provided by cleaner", "Use my own"].map(size => (
                                <option key={size} value={size}>{size}</option>
                            ))}
                        </select>
                    </div>
                </div>
            </div>

            <div className="row p-2 g-2 border rounded-2 mb-3 basic-info-bg">
                <div className="col-lg-12">
                    <h5 className='pt-2 pb-3 text-primary'>Additional Rooms</h5>
                    <div className="row">
                        {Object.keys(state.additionalRooms).map((room) => (
                            <div key={room} className="col-md-4">
                                <label className="d-flex align-items-center mb-2 calculator-base-text">
                                    <input
                                        type="checkbox"
                                        className='custom-checkbox-calculator'
                                        checked={state.additionalRooms[room]}
                                        onChange={() => handleChange("additionalRooms", { 
                                            ...state.additionalRooms, 
                                            [room]: !state.additionalRooms[room] 
                                            })
                                        }
                                    />
                                    <span className="ms-2">
                                        {room
                                            .replace(/([A-Z])/g, " $1")
                                            .replace(/^./, (str) => str.toUpperCase())
                                            .trim()}
                                    </span>
                                </label>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="row p-2 g-2 border rounded-2 mb-3 basic-info-bg">
                <div className="col-lg-12">
                    <h5 className='pt-2 pb-3 text-primary'>Other Options</h5>
                    <div className="row">
                        <div className="col-md-4">
                            <label className="d-flex align-items-center mb-2 calculator-base-text">
                                <input
                                    type="checkbox"
                                    className='custom-checkbox-calculator'
                                    checked={state.hasPets}
                                    onChange={() => handleChange("hasPets", !state.hasPets)}
                                />
                                <span className="ms-2">Has Pets</span>
                            </label>
                        </div>
                        <div className="col-md-4">
                            <label className="d-flex align-items-center mb-2 calculator-base-text">
                                <input
                                    type="checkbox"
                                    className='custom-checkbox-calculator'
                                    checked={state.cleanFridge}
                                    onChange={() => handleChange("cleanFridge", !state.cleanFridge)}
                                />
                                <span className="ms-2">Clean Fridge</span>
                            </label>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row p-2 g-2 border rounded-2 mb-3 basic-info-bg">
                <div className="col-lg-12">
                    <h5 className='pt-2 pb-3 text-primary'>Additional Services</h5>
                    <div className="row">
                        {Object.keys(state.additionalServices).map((service) => (
                            <div key={service} className="col-md-4">
                                <label className="d-flex align-items-center mb-2 calculator-base-text">
                                    <input
                                        type="checkbox"
                                        className='custom-checkbox-calculator'
                                        checked={state.additionalServices[service]}
                                        onChange={() => handleChange("additionalServices", { 
                                            ...state.additionalServices, 
                                            [service]: !state.additionalServices[service] 
                                            })
                                        }
                                    />
                                    <span className="ms-2">
                                        {service
                                            .replace(/([A-Z])/g, " $1")
                                            .replace(/^./, (str) => str.toUpperCase())
                                            .trim()}
                                    </span>
                                </label>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="row p-2 g-2 border rounded-2 mb-3 basic-info-bg">
                <div className="col-lg-12">
                    <h5 className='pt-2 pb-3 text-primary'>Estimated Cleaning Cost and Time</h5>
                    <div className="row d-flex justify-content-between">
                        <div className="col">
                            <p className='calculator-base-text'>Bedrooms</p>
                        </div>
                        <div className="col text-end">
                            <p className='calculator-base-text'>${(state.bedrooms * pricing.bedrooms).toFixed(2)}</p>
                        </div>
                    </div>
                    <div className="row d-flex justify-content-between">
                        <div className="col">
                            <p className='calculator-base-text'>Living Rooms</p>
                        </div>
                        <div className="col text-end">
                            <p className='calculator-base-text'>${(state.livingRooms * pricing.livingRooms).toFixed(2)}</p>
                        </div>
                    </div>
                    <div className="row d-flex justify-content-between">
                        <div className="col">
                            <p className='calculator-base-text'>Toilets</p>
                        </div>
                        <div className="col text-end">
                            <p className='calculator-base-text'>${(state.toilets * pricing.toilets).toFixed(2)}</p>
                        </div>
                    </div>
                    <div className="row d-flex justify-content-between">
                        <div className="col">
                            <p className='calculator-base-text'>Shower Rooms</p>
                        </div>
                        <div className="col text-end">
                            <p className='calculator-base-text'>${(state.showerRooms * pricing.showerRooms).toFixed(2)}</p>
                        </div>
                    </div>
                    <div className="row d-flex justify-content-between">
                        <div className="col">
                            <p className='calculator-base-text'>Kitchen</p>
                        </div>
                        <div className="col text-end">
                            <p className='calculator-base-text'>${pricing.kitchen[state.kitchenSize].toFixed(2)}</p>
                        </div>
                    </div>
                    <div className="row d-flex justify-content-between">
                        <div className="col">
                            <p className='calculator-base-text'>Cleaning Supplies</p>
                        </div>
                        <div className="col text-end">
                            <p className='calculator-base-text'>${pricing.cleaningSupplies[state.cleaningSupplies].toFixed(2)}</p>
                        </div>
                    </div>
                    <div className="row d-flex justify-content-between">
                        <div className="col">
                            <p className='calculator-base-text'>Additional Rooms</p>
                        </div>
                        <div className="col text-end">
                            <p className='calculator-base-text'>${additionalRoomsCost.toFixed(2)}</p>
                        </div>
                    </div>
                    <div className="row d-flex justify-content-between">
                        <div className="col">
                            <p className='calculator-base-text'>Other Options</p>
                        </div>
                        <div className="col text-end">
                            <p className='calculator-base-text'>${otherOptionsCost.toFixed(2)}</p>
                        </div>
                    </div>
                    <div className="row d-flex justify-content-between">
                        <div className="col">
                            <p className='calculator-base-text'>Additional Services</p>
                        </div>
                        <div className="col text-end">
                            <p className='calculator-base-text'>${additionalServicesCost.toFixed(2)}</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row p-2 g-2 border rounded-2 mb-4 basic-info-bg">
                <div className="row d-flex justify-content-between p-0 m-0">
                    <div className="col">
                        <h5 className='text-black calculator-base-text'>Total Cost:</h5>

                    </div>
                    <div className="col text-end">
                        <h5 className='text-black calculator-base-text'>${totalCost.toFixed(2)}</h5>
                    </div>
                </div>
                <div className="row d-flex justify-content-between p-0 m-0">
                    <div className="col">
                        <h5 className='text-black calculator-base-text'>Estimated Cleaning Time:</h5>
                    </div>
                    <div className="col text-end">
                        <h5 className='text-black calculator-base-text'>{estimatedTime}</h5>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CleaningCalculator;
