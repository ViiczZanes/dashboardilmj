import React from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { MoveDownLeft } from 'lucide-react'

type CardProps = {
    title: string,
    nota: number,
    porcentagem: number,
    language: string
}

const CardMeta = ({ title, nota, porcentagem, language }: CardProps) => {

    let text = language === "pt" ? "Em Relação a meta" : "In relation to the goal"


    return (
        <div className='w-full'>
            <Card x-chunk="dashboard-07-chunk-3">
                <CardContent className='pt-5'>
                    <div className='flex items-center justify-center w-full h-full gap-3'>
                        <div className='flex-shrink-0 w-10 h-10 flex justify-center items-center bg-purple-700 rounded-lg'>
                            <MoveDownLeft className='text-white' />
                        </div>
                        <div className='flex flex-1 gap-2'>
                            <div className='flex flex-col justify-center items-left flex-1'>
                                <p className='text-sm'>{title}</p>
                                <span className='font-bold'>{nota}</span>
                            </div>
                            <div className='flex flex-col justify-center items-center gap-2 flex-1'>
                                <span className='bg-red-400 p-1 text-xs max-w-fit text-white rounded-full '>{porcentagem}%</span>
                                <p className='text-xs'>{text}</p>
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}

export default CardMeta