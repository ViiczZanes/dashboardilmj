import { ColumnChart } from '@/components/_components/columnchart'
import { columnsMaturidadeMarca } from '@/components/_components/dataTable/columns/maturidadedamarca'
import { columnsMediaMaturidadeMarca } from '@/components/_components/dataTable/columns/mediamaturidademarca'
import { DataTable } from '@/components/_components/dataTable/datatable'
import Speedometer from '@/components/_components/speedometer'
import CardSmallChart from '@/components/dashboard/cardsmallchart'
import { CardSocial } from '@/components/dashboard/cardsocial'
import { Card } from '@/components/ui/card'
import { MainChartData, buscador, dataMaturidadeDosDados, dataMediaMaturidadeMarca, enps, evp, facebook, glassdor, indeed, instagram, linkedin, lp, siteCarreiras, socialData, youtube } from '@/fetch'
import React from 'react'

const DashboardPage = () => {


    return (
        <div className="flex flex-col gap-5 p-10 pb-0 pt-0 justify-center items-center">
            {/* Cabeçalho */}
            <Card className='p-2 w-full flex justify-around items-center'>
                <h2 className='font-bold text-2xl'>PERFORMANCE DA MARCA EMPREGADORA</h2>
            </Card>
            {/* Cabeçalho */}

            <div className='w-full h-full min-h-[542px]'  >

                <div className="w-full flex flex-col gap-4 justify-center ">
                    {/* primeira seção */}
                    <div className="min-w-[542px]">
                        <div className="flex flex-col lg:flex-row gap-3">
                            <div className="w-full lg:w-3/5">
                                <Card className='p-4 min-w-[250px] min-h-[250px] h-[250px] md:h-[350px] lg:h-[450px] flex flex-col justify-center items-center'>
                                    <h2 className='font-semibold text-xl'>PONTUAÇAO ANUAL</h2>
                                    <ColumnChart data={MainChartData} />
                                </Card>
                            </div>
                            <div className="w-full lg:w-2/5">
                                <Card className='p-4 min-w-[250px] min-h-[250px] flex flex-col justify-center items-center'>
                                    <h2 className='font-semibold text-xl text-center'>MATURIDADE DA MARCA EMPREGADORA ATUAL</h2>
                                    <Speedometer value={580}  language="pt" />
                                </Card>
                            </div>
                        </div>
                    </div>

                    {/* primeira seção */}

                    {/* segunda seção */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">

                        {socialData.map((data) => (
                            <CardSocial key={data.platform.name} {...data} language='pt' />
                        ))}

                    </div>
                    {/* segunda seção */}


                    <Card className='p-4 min-w-[250px] min-h-[250px] flex flex-col justify-center items-center'>
                        <h2 className='font-semibold text-xl'>CANAIS MAPEADOS</h2>
                        <div className='flex-grow'>
                            <DataTable columns={columnsMediaMaturidadeMarca} data={dataMediaMaturidadeMarca} filtro={"fonte"} filterType={"select"} />
                        </div>
                    </Card>
                    <div className='w-full flex flex-col gap-5'>
                        <Card className='p-5 flex flex-col justify-center items-center'>
                            <h2 className='font-semibold text-xl'>DETALHAMENTO DOS INDICADORES ANALISADOS </h2>
                            <DataTable columns={columnsMaturidadeMarca} data={dataMaturidadeDosDados} filtro={"plataforma"} filterType={"input"} />
                        </Card>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <CardSmallChart title='Linkedin' data={linkedin} />
                            <CardSmallChart title='Youtube' data={youtube} />
                            <CardSmallChart title='Buscador primeira pagina' data={buscador} />
                            <CardSmallChart title='EVP' data={evp} />
                            <CardSmallChart title='Site carreiras' data={siteCarreiras} />
                            <CardSmallChart title='Indeed' data={indeed} />
                            <CardSmallChart title='Facebook' data={facebook} />
                            <CardSmallChart title='Glassdor' data={glassdor} />
                            <CardSmallChart title='Instagram' data={instagram} />
                            <CardSmallChart title='LP do book' data={lp} />
                            <CardSmallChart title='E-NPS' data={enps} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DashboardPage