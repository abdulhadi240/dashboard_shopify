'use client'
import React, { useEffect, useState } from 'react';
import ComponentsDashboardSales from '@/components/dashboard/components-dashboard-sales';
import axios from 'axios';

const Sales = () => {
  const [salesData, setSalesData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://dashboard-shopify-backend2.onrender.com/orders");
        setSalesData(response.data);
        console.log(salesData);
        
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <ComponentsDashboardSales  />
    </div>
  );
};

export default Sales;
