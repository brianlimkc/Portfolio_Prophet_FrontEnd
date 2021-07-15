import React from 'react';
import {
    ComposedChart,
    Line,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Scatter,
    ResponsiveContainer,
} from 'recharts';

function Graph({data, min, max}) {


    return (
        <>
            {data.length > 0 ? <ResponsiveContainer width="100%" height={400}>
                    <ComposedChart
                        width={500}
                        height={400}
                        data={data}
                        margin={{
                            top: 0,
                            right: 0,
                            bottom: 0,
                            left: 0,
                        }}
                    >
                        <CartesianGrid stroke="#f5f5f5" />
                        <XAxis dataKey="date"/>
                        <YAxis domain={[min,max]} tickCount={20} />
                        <Tooltip />
                        <Area type="monotone" dataKey="yhat_range" fill="#8884d8" stroke="#8884d8" />
                        <Scatter dataKey="price" fill="#000000" />
                        <Line type="monotone" dataKey="yhat" stroke="#8884d8" dot={false}/>
                    </ComposedChart>
                </ResponsiveContainer>
                : "Loading"}
        </>
    );
}

export default Graph;