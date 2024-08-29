import axios from 'axios';
import ComponentsDashboardSales from '@/components/dashboard/components-dashboard-sales';

const Sales = async () => {
    const response = await axios.get('https://dashboard-shopify-backend.onrender.com/shopify/orders');
    console.log(response.data.orders);
    return (
      <div>
        <ComponentsDashboardSales data={response.data.orders}/>
      </div>
    );
};

export default Sales;
