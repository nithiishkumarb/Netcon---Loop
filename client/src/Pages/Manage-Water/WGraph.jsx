import "./manage-water.css"
import {
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Brush,
    AreaChart,
    Area
  } from "recharts";
  
  const data = [
    {
      name: "25/01",
      uv: 4000,
      Water: 2400,
      amt: 2400
    },
    {
      name: "26/01",
      uv: 3000,
      Water: 1398,
      amt: 2210
    },
    {
      name: "27/01",
      uv: 2000,
      Water: 9800,
      amt: 2290
    },
    {
      name: "28/01",
      uv: 2780,
      Water: 3908,
      amt: 2000
    },
    {
      name: "29/01",
      uv: 1890,
      Water: 4800,
      amt: 2181
    },
    {
      name: "Yesterday",
      uv: 2390,
      Water: 3800,
      amt: 2500
    },
    {
      name: "today",
      uv: 3490,
      Water: 4300,
      amt: 2100
    }
  ];
const WGraph = () => {
    return (
        <div className='WGraph-container'>
            <h4>Graph</h4>
            {/* <div className="WGraph-Details">
                <span>From: <input type='date'/></span>
                <span>To: <input type='date'/></span>
                <button>Submit</button>
                <button>Download</button>
            </div> */}
            <div>
            <AreaChart
                width={700}
                height={250}
                data={data}
                syncId="anyId"
                margin={{
                top: 10,
                right: 30,
                left: 0,
                bottom: 0
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Area type="monotone" dataKey="Water" stroke="#82ca9d" fill="#3e6ccf" />
                <Brush />
            </AreaChart>
        </div>
    </div>
    )
}

export default WGraph