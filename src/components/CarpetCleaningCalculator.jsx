import React, { useState } from "react";

function CarpetCleaningCalculator({ serviceName, data, onDataChange }) {
  const [unit, setUnit] = useState("sq mtr");
  const [carpetCount, setCarpetCount] = useState(1);
  const [carpetSizes, setCarpetSizes] = useState([{ size: 1 }]);
  const [totalArea, setTotalArea] = useState(1);
  const [totalCost, setTotalCost] = useState(10);

  const handleUnitChange = (e) => {
    const newUnit = e.target.value;

    // Reset carpet sizes to default values for the new unit
    const resetSizes = Array.from({ length: carpetCount }, () => ({
      size: newUnit === "sq mtr" ? 1 : 11, // Conversion of 1 square meter to 11 sq ft
    }));

    setUnit(newUnit);
    setCarpetSizes(resetSizes);

    // Recalculate total area and cost based on the new unit
    const resetArea = newUnit === "sq mtr" ? carpetCount * 1 : carpetCount * 11;
    setTotalArea(resetArea); // Ensure total area is an integer
    calculateCost(resetArea, newUnit);
  };

  const handleCarpetCountChange = (e) => {
    const count = parseInt(e.target.value, 10);
    setCarpetCount(count);

    // Reset sizes array to default values for the current unit
    const resetSizes = Array.from({ length: count }, () => ({
      size: unit === "sq mtr" ? 1 : 11,
    }));

    setCarpetSizes(resetSizes);

    // Reset total area and cost
    const resetArea = unit === "sq mtr" ? count * 1 : count * 11;
    setTotalArea(resetArea); // Ensure total area is an integer
    calculateCost(resetArea, unit);

	onDataChange({
        ...data,
        totalArea: resetArea,
        totalCost: totalCost,
        unit: unit,
        carpetCount: count,
        carpetSizes: resetSizes
    });
  };

  const handleSizeChange = (index, value) => {
    const sizes = [...carpetSizes];
    const parsedValue = parseInt(value, 10) || 0; // Ensure integer input

    // Apply minimum value and handle rounding
    if (unit === "sq mtr") {
      sizes[index].size = Math.max(1, parsedValue);
    } else if (unit === "sq ft") {
      sizes[index].size = Math.max(11, parsedValue); // Minimum size of 11 sq ft
    }

    setCarpetSizes(sizes);

    // Update total area
    const total = sizes.reduce((sum, carpet) => sum + carpet.size, 0);
    setTotalArea(total); // Ensure total area is an integer
    calculateCost(total, unit);

	onDataChange({
        ...data,
        totalArea: total,
        totalCost: totalCost,
        unit: unit,
        carpetCount: carpetCount,
        carpetSizes: sizes
    });
  };

  const calculateCost = (area, unit) => {
    const cost = unit === "sq mtr" ? area * 10 : (area / 11) * 10;
    setTotalCost(cost);

    // Update bookingData in Booking.jsx
    onDataChange({
        ...data,
        totalArea: area,
        totalCost: cost,
        unit: unit,
        carpetCount: carpetCount,
        carpetSizes: carpetSizes
    });
	};

  const resetCalculator = () => {
    setUnit("sq mtr");
    setCarpetCount(1);
    setCarpetSizes([{ size: 1 }]);
    setTotalArea(1);
    setTotalCost(10);
  };

  return (
    <>
      	<div className="row d-flex align-items-center justify-content-center">
			<div className="col-lg-6 col-md-6 col-sm-6 py-4">
				<h4 className='px-2 text-primary secondary-subtitle-text'>{serviceName}</h4>
			</div>
			<div className="col-lg-6 col-md-6 col-sm-6 py-4 text-md-end text-sm-end text-start reset-values-button ">
				<button className='btn btn-success custom-btn-container custom-btn px-3' onClick={resetCalculator}>Reset Values</button>
			</div>
		</div>
			
		<div className="row p-2 border rounded-2 g-2 mb-3 basic-info-bg">
			<div className="col-lg-6">
				<p className='mb-1 pb-1 calculator-base-text'>
				Select unit of measurement
				</p>
				<div className="mb-4">
				<select className='form-select' value={unit} onChange={handleUnitChange}>
					<option value="sq mtr">sq mtr</option>
					<option value="sq ft">sq ft</option>
				</select>
				</div>

				<p className='mb-1 pb-1 calculator-base-text'>
				How many items?
				</p>
				<div className="mb-4">
				<select className='form-select' value={carpetCount} onChange={handleCarpetCountChange}>
					{Array.from({ length: 10 }, (_, i) => (
					<option key={i + 1} value={i + 1}>
						{i + 1}
					</option>
					))}
				</select>
				</div>
			</div>
		</div>

		<div className="row p-2 border rounded-2 g-2 mb-3 basic-info-bg">
			<div className="col-lg-12">
				{carpetSizes.map((carpet, index) => (
					<div key={index}>
					<label>
						<div className="row d-flex align-items-center">
							<div className="col-lg-6 pb-2">
								Item {index + 1} Size ({unit}):
							</div>
							<div className="col-lg-6 pb-2">
								<input
									className="form-control" // `appearance-none` removes native styling
									type="number"
									value={carpet.size}
									onChange={(e) => handleSizeChange(index, e.target.value)}
									min={unit === "sq mtr" ? 1 : 11}
								/>
							</div>
						</div>
					</label>
					</div>
				))}
			</div>
		</div>

		<div className="row p-2 border rounded-2 g-2 mb-3 basic-info-bg">
			<div className="col-lg-12">
			<h5 className='text-black calculator-base-text'>Total Area: {totalArea} {unit}</h5>
			<h5 className='text-black calculator-base-text'>Total Cost: ${totalCost.toFixed(2)}</h5>
			</div>
		</div>


    </>
  );
}

export default CarpetCleaningCalculator;