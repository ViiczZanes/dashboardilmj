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
    "siteDeCarreirasProprio": "Sim",
    "siteDeCarreirasVisitantesUltimos30Dias": "249",
    "siteDeCarreirasSN": "",
    "numeroDeVagasAbertasNoATS": "?",
    "linkedInSeguidores": "Não",
    "numeroDeFuncionariosNoLinkedIn": "Não",
    "linkedInInteracoes": "Não",
    "linkedInNumeroDePostsMes": "Não",
    "linkedInAbaDiaADia": "Não",
    "linkedInPostsColaboradoresEmAlta": "Não",
    "linkedInCapaMarcaEmpregadora": "Não",
    "instagramSeguidores": "7k",
    "instagramEngajamento": "8,41%",
    "instagramPostMes": "3",
    "glassdoorTotalDeAvaliacoes": "5200",
    "glassdoorNota": "8,2",
    "glassdoorTaxaDeRecomendacao": "84%",
    "youtubeSN": "Sim",
    "youtubeInscritos": "5,78k",
    "youtubeVisualizacoes": "75m",
    "blog": "Sim",
    "ceo": "Não",
    "buscadorPrimeiraPagina": "Sim",
    "evp": "Sim"
  }

  const empresas: Empresa[] = [
    {
      "empresa": "Grupo Boticário",
      "siteDeCarreirasProprio": "Não",
      "siteDeCarreirasVisitantesUltimos30Dias": "",
      "siteDeCarreirasSN": "Sim",
      "numeroDeVagasAbertasNoATS": "200",
      "linkedInSeguidores": "2.000.000",
      "numeroDeFuncionariosNoLinkedIn": "46000",
      "linkedInInteracoes": "5,87",
      "linkedInNumeroDePostsMes": "11",
      "linkedInAbaDiaADia": "Sim",
      "linkedInPostsColaboradoresEmAlta": "Sim",
      "linkedInCapaMarcaEmpregadora": "Sim",
      "instagramSeguidores": "Não possui",
      "instagramEngajamento": "Não possui",
      "instagramPostMes": "Não possui",
      "glassdoorTotalDeAvaliacoes": "5200",
      "glassdoorNota": "4,5",
      "glassdoorTaxaDeRecomendacao": "91%",
      "youtubeSN": "Sim",
      "youtubeInscritos": "9850",
      "youtubeVisualizacoes": "15.667.244",
      "blog": "Não",
      "ceo": "Sim",
      "buscadorPrimeiraPagina": "Sim",
      "evp": "Sim"
    },
    {
      "empresa": "Nubank",
      "siteDeCarreirasProprio": "Sim",
      "siteDeCarreirasVisitantesUltimos30Dias": "313.4K",
      "siteDeCarreirasSN": "Sim",
      "numeroDeVagasAbertasNoATS": "28",
      "linkedInSeguidores": "5.478.838",
      "numeroDeFuncionariosNoLinkedIn": "9382",
      "linkedInInteracoes": "2,82",
      "linkedInNumeroDePostsMes": "9",
      "linkedInAbaDiaADia": "Sim",
      "linkedInPostsColaboradoresEmAlta": "Sim",
      "linkedInCapaMarcaEmpregadora": "Sim",
      "instagramSeguidores": "Não possui",
      "instagramEngajamento": "Não possui",
      "instagramPostMes": "Não possui",
      "glassdoorTotalDeAvaliacoes": "2900",
      "glassdoorNota": "4,3",
      "glassdoorTaxaDeRecomendacao": "88%",
      "youtubeSN": "Sim",
      "youtubeInscritos": "1,86M",
      "youtubeVisualizacoes": "580.231.826",
      "blog": "Sim",
      "ceo": "Sim",
      "buscadorPrimeiraPagina": "Sim",
      "evp": "Sim"
    },
    {
      "empresa": "Google",
      "siteDeCarreirasProprio": "Não",
      "siteDeCarreirasVisitantesUltimos30Dias": "",
      "siteDeCarreirasSN": "Sim",
      "numeroDeVagasAbertasNoATS": "2425",
      "linkedInSeguidores": "33.412.543",
      "numeroDeFuncionariosNoLinkedIn": "287.800",
      "linkedInInteracoes": "",
      "linkedInNumeroDePostsMes": "22",
      "linkedInAbaDiaADia": "Sim",
      "linkedInPostsColaboradoresEmAlta": "Sim",
      "linkedInCapaMarcaEmpregadora": "Não",
      "instagramSeguidores": "800.000",
      "instagramEngajamento": "5,64%",
      "instagramPostMes": "12",
      "glassdoorTotalDeAvaliacoes": "55000",
      "glassdoorNota": "4,3",
      "glassdoorTaxaDeRecomendacao": "84%",
      "youtubeSN": "Sim",
      "youtubeInscritos": "12,1M",
      "youtubeVisualizacoes": "4.012.223.168",
      "blog": "Não",
      "ceo": "Sim",
      "buscadorPrimeiraPagina": "Sim",
      "evp": "Sim"
    }
  ];

  const empresaA = empresas[0];
  const [empresaB, setEmpresaB] = useState<Partial<Empresa>>({});

  return (
    <div className="bg-background text-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl font-bold mb-4">Comparativo de empresas</h1>
          <p className="text-muted-foreground mb-8">
            Compare facilmente os recursos e ofertas de duas empresas líderes.
          </p>
        </div>
        <div className="bg-card rounded-lg shadow-lg overflow-hidden">
          <table className="w-full text-left">
            <thead className="bg-muted">
              <tr>
                <th className="px-4 py-2 font-medium w-1/3">Recurso</th>
                <th className="px-4 py-2 font-medium w-1/4">{minhaEmpresa.empresa}</th>
                <th className="px-4 py-2 font-medium w-1/4">
                  <Select onValueChange={(value) => setEmpresaB(empresas[parseInt(value)])}>
                    <SelectTrigger className="bg-card text-foreground border border-muted rounded px-2 py-1">
                      <SelectValue placeholder="Selecione uma empresa" />
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
                <td className="px-4 py-2">Site de Carreiras Próprio</td>
                <td className="px-4 py-2">{minhaEmpresa.siteDeCarreirasProprio}</td>
                <td className="px-4 py-2">{empresaB.siteDeCarreirasProprio}</td>
                {/* <td className="px-4 py-2">Empate</td> */}
              </tr>
              <tr className="border-b border-muted">
                <td className="px-4 py-2">Visitantes do Site de Carreiras (Últimos 30 Dias)</td>
                <td className="px-4 py-2">{minhaEmpresa.siteDeCarreirasVisitantesUltimos30Dias}</td>
                <td className="px-4 py-2">{empresaB.siteDeCarreirasVisitantesUltimos30Dias}</td>
                {/* <td className="px-4 py-2">✓</td> */}
              </tr>
              <tr className="border-b border-muted">
                <td className="px-4 py-2">Vagas Abertas no ATS</td>
                <td className="px-4 py-2">{minhaEmpresa.numeroDeVagasAbertasNoATS}</td>
                <td className="px-4 py-2">{empresaB.numeroDeVagasAbertasNoATS}</td>
                {/* <td className="px-4 py-2">✓</td> */}
              </tr>
              <tr className="border-b border-muted">
                <td className="px-4 py-2">Seguidores no LinkedIn</td>
                <td className="px-4 py-2">{minhaEmpresa.linkedInSeguidores}</td>
                <td className="px-4 py-2">{empresaB.linkedInSeguidores}</td>
                {/* <td className="px-4 py-2">✓</td> */}
              </tr>
              <tr className="border-b border-muted">
                <td className="px-4 py-2">Funcionários no LinkedIn</td>
                <td className="px-4 py-2">{minhaEmpresa.numeroDeFuncionariosNoLinkedIn}</td>
                <td className="px-4 py-2">{empresaB.numeroDeFuncionariosNoLinkedIn}</td>
                {/* <td className="px-4 py-2">✓</td> */}
              </tr>
              <tr className="border-b border-muted">
                <td className="px-4 py-2">Interações no LinkedIn</td>
                <td className="px-4 py-2">{minhaEmpresa.linkedInInteracoes}</td>
                <td className="px-4 py-2">{empresaB.linkedInInteracoes}</td>
                {/* <td className="px-4 py-2">✓</td> */}
              </tr>
              <tr className="border-b border-muted">
                <td className="px-4 py-2">Posts no LinkedIn por Mês</td>
                <td className="px-4 py-2">{minhaEmpresa.linkedInNumeroDePostsMes}</td>
                <td className="px-4 py-2">{empresaB.linkedInNumeroDePostsMes}</td>
                {/* <td className="px-4 py-2">✓</td> */}
              </tr>
              <tr className="border-b border-muted">
                <td className="px-4 py-2">LinkedIn Dia a Dia</td>
                <td className="px-4 py-2">{minhaEmpresa.linkedInAbaDiaADia}</td>
                <td className="px-4 py-2">{empresaB.linkedInAbaDiaADia}</td>
                {/* <td className="px-4 py-2">Empate</td> */}
              </tr>
              <tr className="border-b border-muted">
                <td className="px-4 py-2">Posts de Colaboradores em Alta no LinkedIn</td>
                <td className="px-4 py-2">{minhaEmpresa.linkedInPostsColaboradoresEmAlta}</td>
                <td className="px-4 py-2">{empresaB.linkedInPostsColaboradoresEmAlta}</td>
                {/* <td className="px-4 py-2">Empate</td> */}
              </tr>
              <tr className="border-b border-muted">
                <td className="px-4 py-2">Capa de Marca Empregadora no LinkedIn</td>
                <td className="px-4 py-2">{minhaEmpresa.linkedInCapaMarcaEmpregadora}</td>
                <td className="px-4 py-2">{empresaB.linkedInCapaMarcaEmpregadora}</td>
                {/* <td className="px-4 py-2">Empate</td> */}
              </tr>
              <tr className="border-b border-muted">
                <td className="px-4 py-2">Seguidores no Instagram</td>
                <td className="px-4 py-2">{minhaEmpresa.instagramSeguidores}</td>
                <td className="px-4 py-2">{empresaB.instagramSeguidores}</td>
                {/* <td className="px-4 py-2">✓</td> */}
              </tr>
              <tr className="border-b border-muted">
                <td className="px-4 py-2">Engajamento no Instagram</td>
                <td className="px-4 py-2">{minhaEmpresa.instagramEngajamento}</td>
                <td className="px-4 py-2">{empresaB.instagramEngajamento}</td>
                {/* <td className="px-4 py-2">✓</td> */}
              </tr>
              <tr className="border-b border-muted">
                <td className="px-4 py-2">Posts no Instagram por Mês</td>
                <td className="px-4 py-2">{minhaEmpresa.instagramPostMes}</td>
                <td className="px-4 py-2">{empresaB.instagramPostMes}</td>
                {/* <td className="px-4 py-2">✓</td> */}
              </tr>
              <tr className="border-b border-muted">
                <td className="px-4 py-2">Total de Avaliações no Glassdoor</td>
                <td className="px-4 py-2">{minhaEmpresa.glassdoorTotalDeAvaliacoes}</td>
                <td className="px-4 py-2">{empresaB.glassdoorTotalDeAvaliacoes}</td>
                {/* <td className="px-4 py-2">✓</td> */}
              </tr>
              <tr className="border-b border-muted">
                <td className="px-4 py-2">Nota no Glassdoor</td>
                <td className="px-4 py-2">{minhaEmpresa.glassdoorNota}</td>
                <td className="px-4 py-2">{empresaB.glassdoorNota}</td>
                {/* <td className="px-4 py-2">✓</td> */}
              </tr>
              <tr className="border-b border-muted">
                <td className="px-4 py-2">Taxa de Recomendação no Glassdoor</td>
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
                <td className="px-4 py-2">Inscritos no YouTube</td>
                <td className="px-4 py-2">{minhaEmpresa.youtubeInscritos}</td>
                <td className="px-4 py-2">{empresaB.youtubeInscritos}</td>
                {/* <td className="px-4 py-2">✓</td> */}
              </tr>
              <tr className="border-b border-muted">
                <td className="px-4 py-2">Visualizações no YouTube</td>
                <td className="px-4 py-2">{minhaEmpresa.youtubeVisualizacoes}</td>
                <td className="px-4 py-2">{empresaB.youtubeVisualizacoes}</td>
                {/* <td className="px-4 py-2">✓</td> */}
              </tr>
              <tr className="border-b border-muted">
                <td className="px-4 py-2">Blog / LP do Book</td>
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
                <td className="px-4 py-2">Ranking no Buscador Vagas e Como e trabalhar na</td>
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