import React from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { MoveDownLeft, Sparkles } from 'lucide-react'
import { Separator } from '@/components/ui/separator'
import MiniLineChart from '../_components/linechart'

type Data = {
    name: string,
    pontuacao: number,
    meta: number
}

interface CardProps {
    title: string,
    data: Data[],
}


const CardSmallChart = ({ title, data }: CardProps) => {

    return (
        <div className='w-full'>
            <Card x-chunk="dashboard-07-chunk-3">
                <CardContent className='pt-5 h-[200px]'>
                    <div className='flex items-center justify-center h-full'>
                        <div className='flex flex-col items-center justify-center w-2/5'>
                            <h2 className='p-5 font-bold'>{title}</h2>
                            <span className='flex items-center justify-center gap-2 text-xl'>
                                <Sparkles className='w-5 h-5 text-yellow-500' />
                                {(
                                    data.reduce((acc: number, curr: Data) => acc + curr.pontuacao, 0) / data.length
                                ).toFixed(2)}
                            </span>
                        </div>
                        <Separator orientation='vertical' className='h-full' />
                        <MiniLineChart key={1} data={data} />
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}

export default CardSmallChart