// pages/api/getOrders.js

import axios from 'axios';

export default async function handler(req, res) {
  try {
    const response = await axios.get('https://dashboard-shopify-backend2.onrender.com/orders');

    // Send the response data to the client
    res.status(200).json(response.data);
  } catch (error) {
    console.error('Error fetching orders:', error);
    res.status(error.response?.status || 500).json({ error: 'Error fetching orders' });
  }
}
