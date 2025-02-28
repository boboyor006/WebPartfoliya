
import { useState } from 'react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  Legend
} from 'recharts';

const data = [
  {
    name: 'Jan',
    patients: 65,
    procedures: 42,
  },
  {
    name: 'Feb',
    patients: 59,
    procedures: 38,
  },
  {
    name: 'Mar',
    patients: 80,
    procedures: 55,
  },
  {
    name: 'Apr',
    patients: 81,
    procedures: 56,
  },
  {
    name: 'May',
    patients: 95,
    procedures: 64,
  },
  {
    name: 'Jun',
    patients: 88,
    procedures: 58,
  },
];

const DentalChart = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <div className="w-full h-80 opacity-0 animate-fade-in delay-200">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip 
            contentStyle={{ 
              borderRadius: '8px', 
              boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
              border: 'none'
            }}
          />
          <Legend />
          <Bar 
            dataKey="patients" 
            name="Patients Seen" 
            fill="hsl(246, 84%, 65%)" 
            radius={[4, 4, 0, 0]}
            animationDuration={1500}
          />
          <Bar 
            dataKey="procedures" 
            name="Procedures Done" 
            fill="hsl(246, 84%, 75%)" 
            radius={[4, 4, 0, 0]}
            animationDuration={1500}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default DentalChart;
