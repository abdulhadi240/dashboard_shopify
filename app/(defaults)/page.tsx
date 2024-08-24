'use client'
import ComponentsDashboardSales from '@/components/dashboard/components-dashboard-sales';
import axios from 'axios';
import { Metadata } from 'next';
import React from 'react';
import { useEffect, useState } from 'react'



const Sales = () => {
    const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get('https://b519f5-ff.myshopify.com/admin/api/2024-07/orders.json', {
            headers: {
              'X-Shopify-Access-Token': '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',
              'Content-Type': 'application/json'
            }
          });
        console.log(response);
      } catch (error) {
        console.error('Error fetching orders:', error);
      }
    };

    fetchOrders();
  }, []);

    return <ComponentsDashboardSales />;

};

export default Sales;
