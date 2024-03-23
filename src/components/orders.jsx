import React, { useState } from 'react';

function Shipment() {
  const [trackingNumber, setTrackingNumber] = useState('');
  const [shipmentDetails, setShipmentDetails] = useState(null);
  const [error, setError] = useState('');

  const handleInputChange = (event) => {
    setTrackingNumber(event.target.value);
  };

  const handleTrackShipment = () => {
    // Simulated data for tracking shipment
    const shipmentData = {
      trackingNumber: trackingNumber,
      status: 'Shipped',
      estimatedDeliveryDate: 'March 30, 2024', // Example estimated delivery date
      // Add more shipment details as needed
    };

    // Simulate loading delay
    setTimeout(() => {
      if (trackingNumber === '123456') {
        setShipmentDetails(shipmentData);
        setError('');
      } else {
        setError('Shipment not found. Please check the tracking number.');
        setShipmentDetails(null);
      }
    }, 1000);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold mb-8">Track Shipment</h1>
      <div className="flex items-center">
        <input
          type="text"
          value={trackingNumber}
          onChange={handleInputChange}
          placeholder="Enter Tracking Number"
          className="border border-gray-300 px-4 py-2 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={handleTrackShipment}
          className="bg-blue-500 text-white px-4 py-2 rounded-r-md ml-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Track
        </button>
      </div>
      {error && <p className="text-red-500 mt-4">{error}</p>}
      {shipmentDetails && (
        <div className="mt-8 border-2 border-gray-300 rounded-md p-4 transform transition duration-300 hover:shadow-lg hover:-translate-y-1 hover:scale-105">
          <h2 className="text-xl font-bold mb-2">Shipment Details</h2>
          <p><span className="font-bold">Tracking Number:</span> {shipmentDetails.trackingNumber}</p>
          <p><span className="font-bold">Status:</span> {shipmentDetails.status}</p>
          <p><span className="font-bold">Estimated Delivery Date:</span> {shipmentDetails.estimatedDeliveryDate}</p>
          {/* Additional details as needed */}
        </div>
      )}
    </div>
  );
}

export default Shipment;
