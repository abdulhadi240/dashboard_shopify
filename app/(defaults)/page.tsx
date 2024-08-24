'use client';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ComponentsDashboardSales from '@/components/dashboard/components-dashboard-sales';

const Sales = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get('https://b519f5-ff.myshopify.com/admin/api/2024-07/orders.json', {
          headers: {
            'X-Shopify-Access-Token': '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',
            'Content-Type': 'application/json',
          },
        });
        setOrders(response.data.orders || []);
        console.log(orders);
        
      } catch (error) {
        console.error('Error fetching orders:', error);
      }
    };

    fetchOrders();
  }, []);

  return <ComponentsDashboardSales />;
};

export default Sales;
