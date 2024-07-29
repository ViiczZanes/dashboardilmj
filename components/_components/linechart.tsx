'use client'

import React from 'react';
import { ResponsiveContainer, ComposedChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar, Line, LineChart } from 'recharts';

type ChartProps = {
    name: string;
    meta: number;
    pontuacao: number;
};

const MiniLineChart: React.FC<{ data: ChartProps[] }> = ({ data }) => {
    return (
        <ResponsiveContainer width={"100%"} height={"100%"}>
            <LineChart
                width={100}
                height={300}
                data={data}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
            >
                <XAxis dataKey="name" axisLine={false} tickLine={false}/>
                <Tooltip/>
                <Line type="monotone" dataKey="pontuacao" stroke="#8884d8"  />
                <Line type="monotone" dataKey="meta" stroke="red" strokeDasharray="3 4 5 2" />
            </LineChart>
        </ResponsiveContainer>
    );
};

export default MiniLineChart;