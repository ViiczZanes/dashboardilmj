'use client'
import React from 'react';
import ReactSpeedometer, { CustomSegmentLabelPosition } from 'react-d3-speedometer';

const Speedometer = ({ value, language }: { value: number, language: string }) => {

    const [maturidade, setMaturidade] = React.useState('Inicial');

    const valueAjust = value / 100;

    React.useEffect(() => {
        if (valueAjust >= 0 && valueAjust <= 4.9) {
            setMaturidade(language === 'pt' ? 'Inicial' : 'Initial');
        } else if (valueAjust >= 5 && valueAjust <= 7.4) {
            setMaturidade(language === 'pt' ? 'Reativo' : 'Reactive');
        } else if (valueAjust >= 7.5 && valueAjust <= 9.5) {
            setMaturidade(language === 'pt' ? 'Maduro' : 'Mature');
        } else if (valueAjust > 9.5) {
            setMaturidade(language === 'pt' ? 'Avançado' : 'Advanced');
        }
    }, []);


    return (
        <div className='flex flex-col justify-center items-center h-[180]'>
            <ReactSpeedometer
                width={350}
                height={225}
                value={value}
                segments={20}

                customSegmentLabels={[
                    {
                        text: "",
                        position: 'INSIDE' as CustomSegmentLabelPosition,
                        color: "#555",
                    },
                    {
                        text: "",
                        position: 'INSIDE' as CustomSegmentLabelPosition,
                        color: "#555",
                    },
                    {
                        text: "",
                        position: 'INSIDE ' as CustomSegmentLabelPosition,
                        color: "#555",
                    },

                    {
                        text: "",
                        position: 'INSIDE' as CustomSegmentLabelPosition,
                        color: "#555",
                    },
                    {
                        text: "",
                        position: 'INSIDE' as CustomSegmentLabelPosition,
                        color: "#555",
                    },
                    {
                        text: "",
                        position: 'INSIDE' as CustomSegmentLabelPosition,
                        color: "#555",
                    },
                    {
                        text: "",
                        position: 'INSIDE' as CustomSegmentLabelPosition,
                        color: "#555",
                    },
                    {
                        text: "",
                        position: 'INSIDE ' as CustomSegmentLabelPosition,
                        color: "#555",
                    },

                    {
                        text: "",
                        position: 'INSIDE' as CustomSegmentLabelPosition,
                        color: "#555",
                    },
                    {
                        text: "",
                        position: 'INSIDE' as CustomSegmentLabelPosition,
                        color: "#555",
                    },
                    {
                        text: "",
                        position: 'INSIDE' as CustomSegmentLabelPosition,
                        color: "#555",
                    },
                    {
                        text: "",
                        position: 'INSIDE' as CustomSegmentLabelPosition,
                        color: "#555",
                    },
                    {
                        text: "",
                        position: 'INSIDE ' as CustomSegmentLabelPosition,
                        color: "#555",
                    },

                    {
                        text: "",
                        position: 'INSIDE' as CustomSegmentLabelPosition,
                        color: "#555",
                    },
                    {
                        text: "",
                        position: 'INSIDE' as CustomSegmentLabelPosition,
                        color: "#555",
                    },
                    {
                        text: "",
                        position: 'INSIDE' as CustomSegmentLabelPosition,
                        color: "#555",
                    },
                    {
                        text: "",
                        position: 'INSIDE' as CustomSegmentLabelPosition,
                        color: "#555",
                    },
                    {
                        text: "",
                        position: 'INSIDE ' as CustomSegmentLabelPosition,
                        color: "#555",
                    },

                    {
                        text: "",
                        position: 'INSIDE' as CustomSegmentLabelPosition,
                        color: "#555",
                    },
                    {
                        text: "",
                        position: 'INSIDE' as CustomSegmentLabelPosition,
                        color: "#555",
                    },

                ]}
            />
            <h2 className='font-bold text-2xl'>{valueAjust}</h2>
            <h2 className='font-bold text-2xl'>{maturidade}</h2>
        </div>
    );
}

export default Speedometer;
