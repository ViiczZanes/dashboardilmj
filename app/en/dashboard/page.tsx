import { ColumnChart } from '@/components/_components/columnchart'
import { columnsMaturidadeMarca } from '@/components/_components/dataTable/columns/en/maturidadedamarca'
import { columnsMediaMaturidadeMarca } from '@/components/_components/dataTable/columns/en/mediamaturidademarca'
import { DataTable } from '@/components/_components/dataTable/datatable'
import Speedometer from '@/components/_components/speedometer'
import CardSmallChart from '@/components/dashboard/cardsmallchart'
import { CardSocial } from '@/components/dashboard/cardsocial'
import { Card } from '@/components/ui/card'
import { MainChartDataEn, buscadorEn, dataMaturidadeDosDadosEn, dataMediaMaturidadeMarcaEn, enpsEn, evpEn, facebookEn, glassdorEn, indeedEn, instagramEn, linkedinEn, lpEn, siteCarreirasEn, socialDataEn, youtubeEn } from '@/fetch'
import React from 'react'

const DashboardPage = () => {

    return (
        <div className="flex flex-col gap-5 p-10 pb-0 pt-0 justify-center items-center">
            {/* Cabeçalho */}
            <Card className='p-2 w-full flex justify-around items-center'>
                <h2 className='font-bold text-2xl'>EMPLOYER BRAND PERFORMANCE</h2>
            </Card>
            {/* Cabeçalho */}

            <div className='w-full h-full min-h-[542px]'  >

                <div className="w-full flex flex-col gap-4 justify-center ">
                    {/* primeira seção */}
                    <div className="min-w-[542px]">
                        <div className="flex flex-col lg:flex-row gap-3">
                            <div className="w-full lg:w-3/5">
                                <Card className='p-4 min-w-[250px] min-h-[250px] h-[250px] md:h-[350px] lg:h-[450px] flex flex-col justify-center items-center'>
                                    <h2 className='font-semibold text-xl'>ANNUAL SCORE</h2>
                                    <ColumnChart data={MainChartDataEn} />
                                </Card>
                            </div>
                            <div className="w-full lg:w-2/5">
                                <Card className='p-4 min-w-[250px] min-h-[250px] flex flex-col justify-center items-center'>
                                    <h2 className='font-semibold text-xl text-center'>CURRENT EMPLOYER BRAND MATURITY</h2>
                                    <Speedometer value={550} language="en" />
                                </Card>
                            </div>
                        </div>
                    </div>

                    {/* primeira seção */}

                    {/* segunda seção */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">

                        {socialDataEn.map((data) => (
                            <CardSocial key={data.platform.name} {...data} language="en" />
                        ))}

                    </div>
                    {/* segunda seção */}


                    <Card className='p-4 min-w-[250px] min-h-[250px] flex flex-col justify-center items-center'>
                        <h2 className='font-semibold text-xl'>MAPPED CHANNELS</h2>
                        <div className='flex-grow'>
                            <DataTable columns={columnsMediaMaturidadeMarca} data={dataMediaMaturidadeMarcaEn} filtro={"fonte"} filterType={"select"} />
                        </div>
                    </Card>
                    <div className='w-full flex flex-col gap-5'>
                        <Card className='p-5 flex flex-col justify-center items-center'>
                            <h2 className='font-semibold text-xl'>DETAILED ANALYSIS OF THE INDICATORS</h2>
                            <DataTable columns={columnsMaturidadeMarca} data={dataMaturidadeDosDadosEn} filtro={"plataforma"} filterType={"input"} />
                        </Card>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <CardSmallChart title='Linkedin' data={linkedinEn} />
                            <CardSmallChart title='Youtube' data={youtubeEn} />
                            <CardSmallChart title='Search Engine First Page' data={buscadorEn} />
                            <CardSmallChart title='EVP' data={evpEn} />
                            <CardSmallChart title='Site carreiras' data={siteCarreirasEn} />
                            <CardSmallChart title='Indeed' data={indeedEn} />
                            <CardSmallChart title='Facebook' data={facebookEn} />
                            <CardSmallChart title='Glassdor' data={glassdorEn} />
                            <CardSmallChart title='Instagram' data={instagramEn} />
                            <CardSmallChart title='book LP' data={lpEn} />
                            <CardSmallChart title='E-NPS' data={enpsEn} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DashboardPage