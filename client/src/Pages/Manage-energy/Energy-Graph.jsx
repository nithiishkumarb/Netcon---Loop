import React, { useState, useCallback } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";

const data = [
  {
    name: `${new Date().getDate()-6}/${new Date().getMonth()+1}`,
    HVAC: 4000,
    Others: 2400,
    amt: 2400
  },
  {
    name:  `${new Date().getDate()-5}/${new Date().getMonth()+1}`,
    HVAC: 3000,
    Others: 1398,
    amt: 2210
  },
  {
    name: `${new Date().getDate()-4}/${new Date().getMonth()+1}`,
    HVAC: 2000,
    Others: 9800,
    amt: 2290
  },
  {
    name: `${new Date().getDate()-3}/${new Date().getMonth()+1}`,
    HVAC: 2780,
    Others: 3908,
    amt: 2000
  },
  {
    name: `${new Date().getDate()-2}/${new Date().getMonth()+1}`,
    HVAC: 1890,
    Others: 4800,
    amt: 2181
  },
  {
    name: `${new Date().getDate()-1}/${new Date().getMonth()+1}`,
    HVAC: 2390,
    Others: 3800,
    amt: 2500
  },
  {
    name: `${new Date().getDate()}/${new Date().getMonth()+1}`,
    HVAC: 3490,
    Others: 4300,
    amt: 2100
  }
];

export default function App() {
  const [opacity, setOpacity] = useState({
    HVAC: 1,
    Others: 1
  });

  const handleMouseEnter = useCallback(
    (o) => {
      const { dataKey } = o;

      setOpacity({ ...opacity, [dataKey]: 0.5 });
    },
    [opacity, setOpacity]
  );

  const handleMouseLeave = useCallback(
    (o) => {
      const { dataKey } = o;
      setOpacity({ ...opacity, [dataKey]: 1 });
    },
    [opacity, setOpacity]
  );

  return (
    <div>
    <h4 style={{marginBottom:20}}>Graph</h4>
      <LineChart
        width={1100}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        />
        <Line
          type="monotone"
          dataKey="Others"
          strokeOpacity={opacity.Others}
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
        <Line
          type="monotone"
          dataKey="HVAC"
          strokeOpacity={opacity.HVAC}
          stroke="#82ca9d"
        />
      </LineChart>
    </div>
  );
}
