// pages/api/getOrders.js

import axios from 'axios';

export default async function handler(req, res) {
  try {
    const response = await axios.get('https://b519f5-ff.myshopify.com/admin/api/2024-07/orders.json', {
      headers: {
        'X-Shopify-Access-Token': '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',
        'Content-Type': 'application/json'
      }
    });

    // Send the response data to the client
    res.status(200).json(response.data);
  } catch (error) {
    console.error('Error fetching orders:', error);
    res.status(error.response?.status || 500).json({ error: 'Error fetching orders' });
  }
}
