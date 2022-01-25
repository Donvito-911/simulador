import { useEffect } from 'react/cjs/react.development';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
const lines = [];
for (let i = 1; i < 149; i++) {
    lines.push(<Line type="monotone" dataKey={String(i)} stroke="#255583" key={i} dot={false} name={`Zona destino ${i}`} />)
}
console.log("LINES GENERATED");
const Chart = (props) => {

    return (
        <LineChart
            width={700}
            height={400}
            data={props.data}
            margin={{
                top: 10,
                bottom: 10,
                right: 5,
                left: 5
            }}
            style={{ backgroundColor: 'white', padding: "2rem", borderRadius: ".5rem" }}
        >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="time" />
            <YAxis />
            {lines}
            {/* <Tooltip/> */}
        </LineChart>
    );
};

export default Chart;