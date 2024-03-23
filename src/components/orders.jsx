import React, { useState, useEffect } from "react";

const OrderTrackingPage = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch order data from an API
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      
      const response = await fetchOrders();
      const data = await response.json();
      setOrders(data.orders);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching orders:", error);
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Order Tracking</h1>
      {loading ? (
        <p>Loading...</p>
      ) : orders.length === 0 ? (
        <p>No orders found.</p>
      ) : (
        <div className="grid grid-cols-1 gap-4">
          {orders.map(order => (
            <div key={order.id} className="border rounded-lg p-4">
              <h2 className="text-xl font-semibold mb-2">Order #{order.id}</h2>
              <p>Status: {order.status}</p>
              <p>Tracking Number: {order.trackingNumber}</p>
              {/* Add more order details as needed */}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default OrderTrackingPage;
