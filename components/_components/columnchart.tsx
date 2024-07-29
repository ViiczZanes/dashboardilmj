'use client'

import React from 'react';
import { ResponsiveContainer, ComposedChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar, Line } from 'recharts';

type ChartProps = {
    name: string;
    meta: number;
    pontuacao: number;
};

export const ColumnChart: React.FC<{ data: ChartProps[] }> = ({ data }) => {
    return (
        <ResponsiveContainer width={"100%"} height={"100%"}>
            <ComposedChart
                width={500}
                height={400}
                data={data}
                margin={{
                    top: 20,
                    right: 20,
                    bottom: 20,
                    left: 20,
                }}
            >
                <CartesianGrid stroke="#f5f5f5" />
                <XAxis dataKey="name" scale="auto" axisLine={false} allowDecimals={true} />
                <YAxis fontSize={10} axisLine={false} domain={['dataMin -0.3', 'dataMax + 0.10']} />
                <Tooltip />
                <Legend />
                <Bar dataKey="pontuacao" barSize={30} fill="#9333EA" radius={[10, 10, 0, 0]} />
                <Line type="monotone" dataKey="pontuacao" stroke="#9333EA" />
            </ComposedChart>
        </ResponsiveContainer>
    );
};
