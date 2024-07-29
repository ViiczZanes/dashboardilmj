import React from 'react'
import { Card } from '../ui/card'
import { Separator } from '../ui/separator';


interface Platform {
    color: string;
    icon: React.ElementType; // Tipo para o ícone
    name: string;
}

// Definindo o tipo das propriedades do componente CardSocial
type CardProps = {
    platform: Platform; // Usando a interface Platform aqui
    metric: {
        type: string;
        count: string;
    };
    posts: number;
    language: string
};


export const CardSocial = ({ platform, metric, posts, language }: CardProps) => {

    let text = language === "pt" ? "Postagens" : "Posts"


    return (
        <Card className='min-w-[250px] min-h-[250px] flex flex-col justify-center items-center'>
            <div className='w-full h-[75%] flex justify-center items-center'>
                <div className='w-full h-full rounded-ss-lg rounded-se-lg flex items-center justify-center' style={{ backgroundColor: platform.color }}>
                    {React.createElement(platform.icon, { width: '4rem', height: '4rem', color: '#fff' })}
                </div>
            </div>
            <div className='flex gap-1 justify-around items-center mt-auto mb-auto w-full'>
                <div className="flex flex-col justify-center items-center w-1/2">
                    <span className="font-bold">{metric.count}</span>
                    <p className="text-xs">{metric.type}</p>
                </div>
                <Separator orientation="vertical" />
                <div className="flex flex-col justify-center items-center w-1/2">
                    <span className="font-bold">{posts}</span>
                    <p className="text-xs">{text}</p>
                </div>
            </div>
        </Card>
    )
}
