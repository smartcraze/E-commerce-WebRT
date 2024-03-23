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
    <div>
      <h1>Track Shipment</h1>
      <div>
        <input
          type="text"
          value={trackingNumber}
          onChange={handleInputChange}
          placeholder="Enter Tracking Number"
        />
        <button onClick={handleTrackShipment}>Track</button>
      </div>
      {error && <p>{error}</p>}
      {shipmentDetails && (
        <div>
          <h2>Shipment Details</h2>
          <p>Tracking Number: {shipmentDetails.trackingNumber}</p>
          <p>Status: {shipmentDetails.status}</p>
          <p>Estimated Delivery Date: {shipmentDetails.estimatedDeliveryDate}</p>
          {/* Additional details as needed */}
        </div>
      )}
    </div>
  );
}

export default Shipment;
