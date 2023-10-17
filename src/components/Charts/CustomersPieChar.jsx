import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts'

const data = [
  { name: 'Group A', value: 15 },
  { name: 'Group B', value: 30 },
  { name: 'Group C', value: 55 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28']

const CustomersPieChar = () => {
  return <div className="card m-2">
    <div className="card-body">

      <div>
        <h5 className='m-0'>Customers</h5>
        <p className='text-secondary'>Customers that buy products</p>
      </div>

      <ResponsiveContainer width='100%' height={250}>
        <PieChart>
          <Pie
            data={data}
            cx='50%'
            cy='50%'
            innerRadius={60}
            outerRadius={90}
            fill="#8884d8"
            dataKey="value">
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>

    </div>
  </div>

}

export default CustomersPieChar;
