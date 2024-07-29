import { ColumnChart } from '@/components/_components/columnchart'
import { columnsAtributosDetalhada } from '@/components/_components/dataTable/columns/atributodetalhada'
import { columnsAtributosGeral } from '@/components/_components/dataTable/columns/atributogeral'
import { columnsMaturidadeMarca } from '@/components/_components/dataTable/columns/maturidadedamarca'
import { columnsMediaMaturidadeMarca } from '@/components/_components/dataTable/columns/mediamaturidademarca'
import { DataTable } from '@/components/_components/dataTable/datatable'
import Speedometer from '@/components/_components/speedometer'
import CardMeta from '@/components/atributos/cardmeta'
import CardSmallChart from '@/components/dashboard/cardsmallchart'
import { CardSocial } from '@/components/dashboard/cardsocial'
import { Card } from '@/components/ui/card'
import { MainChartData, MainChartDataAtributos, TabelaAtributosGeral, TableAtributosDetalhada, dataMaturidadeDosDados, dataMediaMaturidadeMarca, socialData } from '@/fetch'
import { TabletSmartphone } from 'lucide-react'
import React from 'react'

const AtributosPage = () => {




    return (
        <div className="flex flex-col gap-5 p-10 pb-0 pt-0 justify-center items-center">
            {/* Cabeçalho */}
            <Card className='p-2 w-full flex justify-around items-center'>
                <h2 className='font-bold text-2xl'>ATRIBUTOS DO EVP</h2>
            </Card>
            {/* Cabeçalho */}

            <div className='w-full h-full min-h-[542px]'  >

                <div className="w-full flex flex-col gap-4 justify-center ">
                    {/* primeira seção    */}
                    <div className='flex gap-5'>
                    <CardMeta nota={8.8} porcentagem={-12.3} title={"ANNUAL AVERAGE"} language='pt'/>
                        <CardMeta nota={7.8} porcentagem={-22.0} title={"LAST MONTH'S AVERAGE"} language='pt' />
                    </div>
                 
                    {/* primeira seção */}

                    {/* segunda seção */}
                    <div className="min-w-[542px]">
                        <div className="flex flex-col lg:flex-row gap-3">
                            <div className="w-full ">
                                <Card className='p-4 min-w-[250px] min-h-[250px] h-[250px] md:h-[350px] lg:h-[450px] flex flex-col justify-center items-center'>
                                    <h2 className='font-semibold text-xl text-center'>PRESENÇA DO POSICIONAMENTO DE MARCA EMPREGADORA - INDICADOR GERAL</h2>
                                    <ColumnChart data={MainChartDataAtributos} />
                                </Card>
                            </div>
                            <div className="w-full lg:w-2/6">
                                <Card className='p-4 min-w-[250px] min-h-[250px] flex flex-col justify-center items-center'>
                                    <h2 className='font-semibold text-xl text-center'> PRESENÇA DOS ATRIBUTOS DE MARCA EMPREGADORA</h2>
                                    <div className='flex-grow'>
                                        <DataTable columns={columnsAtributosGeral} data={TabelaAtributosGeral} filtro={"atributosEVP"} filterType={"input"} />
                                    </div>
                                </Card>
                            </div>
                        </div>
                    </div>
                    {/* segunda seção */}
                    <div className='w-full flex flex-col gap-5'>
                        <Card className='p-5 flex flex-col justify-center items-center'>
                            <h2 className='font-semibold text-xl'>ATRIBUTOS X INDICADORES ANALISADOS </h2>
                            <DataTable columns={columnsAtributosDetalhada} data={TableAtributosDetalhada} filtro={"atributos"} filterType={"input"} />
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AtributosPage