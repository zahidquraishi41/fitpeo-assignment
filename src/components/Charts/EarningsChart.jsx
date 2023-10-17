import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Rectangle, ResponsiveContainer } from 'recharts';

const generateRandomValue = () => Math.floor(Math.random() * 1000) + 500;

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const data = months.map(month => ({
  month,
  earnings: generateRandomValue(),
}));

const EarningsChart = () => {
  return (
    <div className="card m-2">
      <div className="card-body">

        <div className="row justify-content-between">
          <div className="col">
            <h5 className='m-0'>Overview</h5>
            <p className='text-secondary'>Monthly Earning</p>
          </div>

          <div className="col text-end">
            <div className="btn-group">
              <button type="button" className="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                Quaterly
              </button>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Monthly</a></li>
                <li><a className="dropdown-item" href="#">Quaterly</a></li>
                <li><a className="dropdown-item" href="#">Yearly</a></li>
              </ul>
            </div>
          </div>

        </div>

        <ResponsiveContainer width='100%' height={250}>
          <BarChart
            data={data}
            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <XAxis dataKey="month" />
            <YAxis type="number" hide={true} axisLine={false} tickLine={false} />
            <Tooltip />
            <Bar dataKey="earnings" fill="#8884d8"
              shape={<Rectangle radius={[5, 5, 0, 0]} />} />

          </BarChart>
        </ResponsiveContainer>

      </div>
    </div>
  );
};

export default EarningsChart;
