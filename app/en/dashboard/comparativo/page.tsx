"use client"

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useState } from 'react';

interface Empresa {
  empresa: string;
  siteDeCarreirasProprio: string;
  siteDeCarreirasVisitantesUltimos30Dias: string;
  siteDeCarreirasSN: string;
  numeroDeVagasAbertasNoATS: string;
  linkedInSeguidores: string;
  numeroDeFuncionariosNoLinkedIn: string;
  linkedInInteracoes: string;
  linkedInNumeroDePostsMes: string;
  linkedInAbaDiaADia: string;
  linkedInPostsColaboradoresEmAlta: string;
  linkedInCapaMarcaEmpregadora: string;
  instagramSeguidores: string;
  instagramEngajamento: string;
  instagramPostMes: string;
  glassdoorTotalDeAvaliacoes: string;
  glassdoorNota: string;
  glassdoorTaxaDeRecomendacao: string;
  youtubeSN: string;
  youtubeInscritos: string;
  youtubeVisualizacoes: string;
  blog: string;
  ceo: string;
  buscadorPrimeiraPagina: string;
  evp: string;
}

export default function ComparativePage() {

  const minhaEmpresa: Empresa = {
    "empresa": "JTI",
    "siteDeCarreirasProprio": "Yes",
    "siteDeCarreirasVisitantesUltimos30Dias": "249",
    "siteDeCarreirasSN": "",
    "numeroDeVagasAbertasNoATS": "?",
    "linkedInSeguidores": "Not",
    "numeroDeFuncionariosNoLinkedIn": "Not",
    "linkedInInteracoes": "Not",
    "linkedInNumeroDePostsMes": "Not",
    "linkedInAbaDiaADia": "Not",
    "linkedInPostsColaboradoresEmAlta": "Not",
    "linkedInCapaMarcaEmpregadora": "Not",
    "instagramSeguidores": "7k",
    "instagramEngajamento": "8,41%",
    "instagramPostMes": "3",
    "glassdoorTotalDeAvaliacoes": "5200",
    "glassdoorNota": "8,2",
    "glassdoorTaxaDeRecomendacao": "84%",
    "youtubeSN": "Yes",
    "youtubeInscritos": "5,78k",
    "youtubeVisualizacoes": "75m",
    "blog": "Yes",
    "ceo": "Not",
    "buscadorPrimeiraPagina": "Yes",
    "evp": "Yes"
  }

  const empresas: Empresa[] = [
    {
      "empresa": "Grupo Boticário",
      "siteDeCarreirasProprio": "Not",
      "siteDeCarreirasVisitantesUltimos30Dias": "",
      "siteDeCarreirasSN": "Yes",
      "numeroDeVagasAbertasNoATS": "200",
      "linkedInSeguidores": "2.000.000",
      "numeroDeFuncionariosNoLinkedIn": "46000",
      "linkedInInteracoes": "5,87",
      "linkedInNumeroDePostsMes": "11",
      "linkedInAbaDiaADia": "Yes",
      "linkedInPostsColaboradoresEmAlta": "Yes",
      "linkedInCapaMarcaEmpregadora": "Yes",
      "instagramSeguidores": "Dont Have",
      "instagramEngajamento": "Dont Have",
      "instagramPostMes": "Dont Have",
      "glassdoorTotalDeAvaliacoes": "5200",
      "glassdoorNota": "4,5",
      "glassdoorTaxaDeRecomendacao": "91%",
      "youtubeSN": "Yes",
      "youtubeInscritos": "9850",
      "youtubeVisualizacoes": "15.667.244",
      "blog": "Not",
      "ceo": "Yes",
      "buscadorPrimeiraPagina": "Yes",
      "evp": "Yes"
    },
    {
      "empresa": "Nubank",
      "siteDeCarreirasProprio": "Yes",
      "siteDeCarreirasVisitantesUltimos30Dias": "313.4K",
      "siteDeCarreirasSN": "Yes",
      "numeroDeVagasAbertasNoATS": "28",
      "linkedInSeguidores": "5.478.838",
      "numeroDeFuncionariosNoLinkedIn": "9382",
      "linkedInInteracoes": "2,82",
      "linkedInNumeroDePostsMes": "9",
      "linkedInAbaDiaADia": "Yes",
      "linkedInPostsColaboradoresEmAlta": "Yes",
      "linkedInCapaMarcaEmpregadora": "Yes",
      "instagramSeguidores": "Dont Have",
      "instagramEngajamento": "Dont Have",
      "instagramPostMes": "Dont Have",
      "glassdoorTotalDeAvaliacoes": "2900",
      "glassdoorNota": "4,3",
      "glassdoorTaxaDeRecomendacao": "88%",
      "youtubeSN": "Yes",
      "youtubeInscritos": "1,86M",
      "youtubeVisualizacoes": "580.231.826",
      "blog": "Yes",
      "ceo": "Yes",
      "buscadorPrimeiraPagina": "Yes",
      "evp": "Yes"
    },
    {
      "empresa": "Google",
      "siteDeCarreirasProprio": "Not",
      "siteDeCarreirasVisitantesUltimos30Dias": "",
      "siteDeCarreirasSN": "Yes",
      "numeroDeVagasAbertasNoATS": "2425",
      "linkedInSeguidores": "33.412.543",
      "numeroDeFuncionariosNoLinkedIn": "287.800",
      "linkedInInteracoes": "",
      "linkedInNumeroDePostsMes": "22",
      "linkedInAbaDiaADia": "Yes",
      "linkedInPostsColaboradoresEmAlta": "Yes",
      "linkedInCapaMarcaEmpregadora": "Not",
      "instagramSeguidores": "800.000",
      "instagramEngajamento": "5,64%",
      "instagramPostMes": "12",
      "glassdoorTotalDeAvaliacoes": "55000",
      "glassdoorNota": "4,3",
      "glassdoorTaxaDeRecomendacao": "84%",
      "youtubeSN": "Yes",
      "youtubeInscritos": "12,1M",
      "youtubeVisualizacoes": "4.012.223.168",
      "blog": "Not",
      "ceo": "Yes",
      "buscadorPrimeiraPagina": "Yes",
      "evp": "Yes"
    }
  ];

  const empresaA = empresas[0];
  const [empresaB, setEmpresaB] = useState<Partial<Empresa>>({});

  return (
    <div className="bg-background text-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl font-bold mb-4">Company comparison</h1>
          <p className="text-muted-foreground mb-8">
            Easily compare the resources and offerings of two leading companies.
          </p>
        </div>
        <div className="bg-card rounded-lg shadow-lg overflow-hidden">
          <table className="w-full text-left">
            <thead className="bg-muted">
              <tr>
                <th className="px-4 py-2 font-medium w-1/3">Resource</th>
                <th className="px-4 py-2 font-medium w-1/4">{minhaEmpresa.empresa}</th>
                <th className="px-4 py-2 font-medium w-1/4">
                  <Select onValueChange={(value) => setEmpresaB(empresas[parseInt(value)])}>
                    <SelectTrigger className="bg-card text-foreground border border-muted rounded px-2 py-1">
                      <SelectValue placeholder="Choose a Company" />
                    </SelectTrigger>
                    <SelectContent>
                      {empresas.map((empresa, index) => (
                        <SelectItem key={index} value={index.toString()}>
                          {empresa.empresa}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </th>
                {/* <th className="px-4 py-2 font-medium w-1/4">Vencedor</th> */}
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-muted">
                <td className="px-4 py-2">Own careers website</td>
                <td className="px-4 py-2">{minhaEmpresa.siteDeCarreirasProprio}</td>
                <td className="px-4 py-2">{empresaB.siteDeCarreirasProprio}</td>
                {/* <td className="px-4 py-2">Empate</td> */}
              </tr>
              <tr className="border-b border-muted">
                <td className="px-4 py-2">Careers website visitors (last 30 days)</td>
                <td className="px-4 py-2">{minhaEmpresa.siteDeCarreirasVisitantesUltimos30Dias}</td>
                <td className="px-4 py-2">{empresaB.siteDeCarreirasVisitantesUltimos30Dias}</td>
                {/* <td className="px-4 py-2">✓</td> */}
              </tr>
              <tr className="border-b border-muted">
                <td className="px-4 py-2">Open job positions in the ATS</td>
                <td className="px-4 py-2">{minhaEmpresa.numeroDeVagasAbertasNoATS}</td>
                <td className="px-4 py-2">{empresaB.numeroDeVagasAbertasNoATS}</td>
                {/* <td className="px-4 py-2">✓</td> */}
              </tr>
              <tr className="border-b border-muted">
                <td className="px-4 py-2">LinkedIn Followers</td>
                <td className="px-4 py-2">{minhaEmpresa.linkedInSeguidores}</td>
                <td className="px-4 py-2">{empresaB.linkedInSeguidores}</td>
                {/* <td className="px-4 py-2">✓</td> */}
              </tr>
              <tr className="border-b border-muted">
                <td className="px-4 py-2">Employees on LinkedIn</td>
                <td className="px-4 py-2">{minhaEmpresa.numeroDeFuncionariosNoLinkedIn}</td>
                <td className="px-4 py-2">{empresaB.numeroDeFuncionariosNoLinkedIn}</td>
                {/* <td className="px-4 py-2">✓</td> */}
              </tr>
              <tr className="border-b border-muted">
                <td className="px-4 py-2">LinkedIn Interactions</td>
                <td className="px-4 py-2">{minhaEmpresa.linkedInInteracoes}</td>
                <td className="px-4 py-2">{empresaB.linkedInInteracoes}</td>
                {/* <td className="px-4 py-2">✓</td> */}
              </tr>
              <tr className="border-b border-muted">
                <td className="px-4 py-2">LinkedIn Posts per Month</td>
                <td className="px-4 py-2">{minhaEmpresa.linkedInNumeroDePostsMes}</td>
                <td className="px-4 py-2">{empresaB.linkedInNumeroDePostsMes}</td>
                {/* <td className="px-4 py-2">✓</td> */}
              </tr>
              <tr className="border-b border-muted">
                <td className="px-4 py-2">LinkedIn Life page</td>
                <td className="px-4 py-2">{minhaEmpresa.linkedInAbaDiaADia}</td>
                <td className="px-4 py-2">{empresaB.linkedInAbaDiaADia}</td>
                {/* <td className="px-4 py-2">Empate</td> */}
              </tr>
              <tr className="border-b border-muted">
                <td className="px-4 py-2">Trending employee posts on LinkedIn</td>
                <td className="px-4 py-2">{minhaEmpresa.linkedInPostsColaboradoresEmAlta}</td>
                <td className="px-4 py-2">{empresaB.linkedInPostsColaboradoresEmAlta}</td>
                {/* <td className="px-4 py-2">Empate</td> */}
              </tr>
              <tr className="border-b border-muted">
                <td className="px-4 py-2">Employer Brand Cover on LinkedIn</td>
                <td className="px-4 py-2">{minhaEmpresa.linkedInCapaMarcaEmpregadora}</td>
                <td className="px-4 py-2">{empresaB.linkedInCapaMarcaEmpregadora}</td>
                {/* <td className="px-4 py-2">Empate</td> */}
              </tr>
              <tr className="border-b border-muted">
                <td className="px-4 py-2">Instagram Followers</td>
                <td className="px-4 py-2">{minhaEmpresa.instagramSeguidores}</td>
                <td className="px-4 py-2">{empresaB.instagramSeguidores}</td>
                {/* <td className="px-4 py-2">✓</td> */}
              </tr>
              <tr className="border-b border-muted">
                <td className="px-4 py-2">Instagram Engagement</td>
                <td className="px-4 py-2">{minhaEmpresa.instagramEngajamento}</td>
                <td className="px-4 py-2">{empresaB.instagramEngajamento}</td>
                {/* <td className="px-4 py-2">✓</td> */}
              </tr>
              <tr className="border-b border-muted">
                <td className="px-4 py-2">Instagram Posts per Month</td>
                <td className="px-4 py-2">{minhaEmpresa.instagramPostMes}</td>
                <td className="px-4 py-2">{empresaB.instagramPostMes}</td>
                {/* <td className="px-4 py-2">✓</td> */}
              </tr>
              <tr className="border-b border-muted">
                <td className="px-4 py-2">Total number of reviews on Glassdoor</td>
                <td className="px-4 py-2">{minhaEmpresa.glassdoorTotalDeAvaliacoes}</td>
                <td className="px-4 py-2">{empresaB.glassdoorTotalDeAvaliacoes}</td>
                {/* <td className="px-4 py-2">✓</td> */}
              </tr>
              <tr className="border-b border-muted">
                <td className="px-4 py-2">Glassdoor Rating</td>
                <td className="px-4 py-2">{minhaEmpresa.glassdoorNota}</td>
                <td className="px-4 py-2">{empresaB.glassdoorNota}</td>
                {/* <td className="px-4 py-2">✓</td> */}
              </tr>
              <tr className="border-b border-muted">
                <td className="px-4 py-2">Employee Recommendation rate on Glassdoor</td>
                <td className="px-4 py-2">{minhaEmpresa.glassdoorTaxaDeRecomendacao}</td>
                <td className="px-4 py-2">{empresaB.glassdoorTaxaDeRecomendacao}</td>
                {/* <td className="px-4 py-2">✓</td> */}
              </tr>
              <tr className="border-b border-muted">
                <td className="px-4 py-2">YouTube</td>
                <td className="px-4 py-2">{minhaEmpresa.youtubeSN}</td>
                <td className="px-4 py-2">{empresaB.youtubeSN}</td>
                {/* <td className="px-4 py-2">Empate</td> */}
              </tr>
              <tr className="border-b border-muted">
                <td className="px-4 py-2">YouTube Subscribers</td>
                <td className="px-4 py-2">{minhaEmpresa.youtubeInscritos}</td>
                <td className="px-4 py-2">{empresaB.youtubeInscritos}</td>
                {/* <td className="px-4 py-2">✓</td> */}
              </tr>
              <tr className="border-b border-muted">
                <td className="px-4 py-2">YouTube Views</td>
                <td className="px-4 py-2">{minhaEmpresa.youtubeVisualizacoes}</td>
                <td className="px-4 py-2">{empresaB.youtubeVisualizacoes}</td>
                {/* <td className="px-4 py-2">✓</td> */}
              </tr>
              <tr className="border-b border-muted">
                <td className="px-4 py-2">Blog / Book LP</td>
                <td className="px-4 py-2">{minhaEmpresa.blog}</td>
                <td className="px-4 py-2">{empresaB.blog}</td>
                {/* <td className="px-4 py-2">Empate</td> */}
              </tr>
              <tr className="border-b border-muted">
                <td className="px-4 py-2">CEO</td>
                <td className="px-4 py-2">{minhaEmpresa.ceo}</td>
                <td className="px-4 py-2">{empresaB.ceo}</td>
                {/* <td className="px-4 py-2">✓</td> */}
              </tr>
              <tr className="border-b border-muted">
                <td className="px-4 py-2">Ranking on job search engines</td>
                <td className="px-4 py-2">{minhaEmpresa.buscadorPrimeiraPagina}</td>
                <td className="px-4 py-2">{empresaB.buscadorPrimeiraPagina}</td>
                {/* <td className="px-4 py-2">Empate</td> */}
              </tr>
              <tr className="border-b border-muted">
                <td className="px-4 py-2">EVP</td>
                <td className="px-4 py-2">{minhaEmpresa.evp}</td>
                <td className="px-4 py-2">{empresaB.evp}</td>
                {/* <td className="px-4 py-2">✓</td> */}
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}