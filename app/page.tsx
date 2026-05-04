"use client";

import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { 
  ArrowRightIcon, 
  BookOpenIcon, 
  DatabaseIcon, 
  TrendingUpIcon, 
  LayersIcon, 
  HomeIcon, 
  CarIcon,
  GlobeIcon
} from 'lucide-react';

// --- DATASET DE LOS RANKINGS ---
const dataPequenos = [
  { name: 'MERCADOLIBRE S.R.L.', score: 13.22 },
  { name: 'TARJETA NARANJA S.A.', score: 7.70 },
  { name: 'NARANJA DIGITAL S.A.U.', score: 3.72 },
  { name: 'BANCO NACION', score: 3.55 },
  { name: 'BANCO MACRO S.A.', score: 3.35 },
  { name: 'BANCO BBVA ARGENTINA S.A.', score: 2.70 },
  { name: 'BANCO GALICIA', score: 2.41 },
  { name: 'BANCO PROVINCIA', score: 2.20 },
  { name: 'BANCO SANTANDER', score: 1.78 },
  { name: 'BANCO INDUSTRIAL S.A.', score: 1.62 },
].reverse();

const dataMedianos = [
  { name: 'BANCO GALICIA', score: 12.86 },
  { name: 'BANCO NACION', score: 10.80 },
  { name: 'BANCO SANTANDER', score: 10.57 },
  { name: 'BANCO BBVA ARGENTINA S.A.', score: 7.13 },
  { name: 'BANCO MACRO S.A.', score: 5.67 },
  { name: 'ICBC (ARGENTINA) S.A.U.', score: 4.36 },
  { name: 'BANCO CREDICOOP', score: 3.64 },
  { name: 'BANCO PROVINCIA', score: 3.60 },
  { name: 'BANCO SUPERVIELLE S.A.', score: 3.55 },
  { name: 'BANCO PATAGONIA S.A.', score: 2.59 },
].reverse();

const dataGrandes = [
  { name: 'BANCO NACION', score: 20.49 },
  { name: 'BANCO MACRO S.A.', score: 10.65 },
  { name: 'BANCO GALICIA', score: 9.34 },
  { name: 'BANCO PROVINCIA', score: 8.15 },
  { name: 'BANCO SANTANDER', score: 4.79 },
  { name: 'BANCO BBVA ARGENTINA S.A.', score: 4.00 },
  { name: 'PROVINCIA LEASING S.A.', score: 3.78 },
  { name: 'BANCO SUPERVIELLE S.A.', score: 3.30 },
  { name: 'BANCO CREDICOOP', score: 3.24 },
  { name: 'BANCO DEL SOL S.A.', score: 2.49 },
].reverse();

export default function ThesisDashboard() {
  const [activeTab, setActiveTab] = useState('pequenos');

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900 font-sans">
      
      {/* 1. HERO SECTION - Abstract del Plan de Tesis */}
      <header className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 text-white pt-24 pb-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-blue-500/20 text-blue-300 px-4 py-1.5 rounded-full text-sm font-semibold mb-8 border border-blue-500/30">
            <GlobeIcon size={16} />
            <span>Tesis de Licenciatura en Ciencia de Datos</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-8">
            Caracterización de Entidades Financieras <br/>
            <span className="text-blue-400">según sus carteras de deudores</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-4xl leading-relaxed mb-10">
            Este estudio analiza la <strong>jerarquía de pagos</strong> en el sistema financiero argentino. 
            A través de un modelado de redes, determinamos qué entidades logran capturar la preferencia 
            de pago del deudor cuando este enfrenta restricciones presupuestarias extremas.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#rankings" className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-xl font-bold transition-all shadow-lg shadow-blue-900/20 flex items-center gap-2">
              Ver Rankings de Eficiencia <ArrowRightIcon size={20}/>
            </a>
          </div>
        </div>
      </header>

      {/* 2. MARCO TEÓRICO - Basado en Capítulo 6 */}
      <section className="py-24 px-6 -mt-16">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-slate-100">
            <div className="flex items-center gap-3 mb-8 text-blue-600">
              <BookOpenIcon size={32} />
              <h2 className="text-3xl font-bold">Marco Teórico: Cadenas de Markov</h2>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 text-slate-600 leading-relaxed text-lg">
                <p>
                  Utilizamos la <strong>Propiedad de Markov</strong> para modelar el comportamiento crediticio como un proceso estocástico. 
                  En este sistema, el estado de un deudor en el tiempo <em>t+1</em> depende únicamente de su estado en <em>t</em> y de su jerarquía de preferencias.
                </p>
                <div className="bg-slate-50 p-6 rounded-2xl border-l-4 border-blue-500 italic">
                  "El ranking se define a través del <strong>Vector Estacionario (&pi;)</strong>. Este representa la probabilidad de largo plazo de que un flujo de pago 'termine' en una entidad específica tras infinitas iteraciones de estrés financiero."
                </div>
                <p>
                  A diferencia de un ranking por volumen, el <strong>Score Markov</strong> mide el "poder de atracción". Si un cliente tiene deudas en dos bancos y elige pagarle al Banco A pero entra en mora con el Banco B, el Banco A recibe un "voto de confianza" matemático.
                </p>
              </div>
              
              <div className="bg-slate-900 rounded-2xl p-8 text-blue-400 font-mono text-sm shadow-inner">
                <p className="text-slate-500 mb-4">// Representación del Vector Estacionario &pi;</p>
                <div className="space-y-2">
                  <p className="text-white text-xl text-center font-bold my-8">
                    &pi; P = &pi;
                  </p>
                  <p className="text-slate-400 leading-relaxed">
                    Donde <strong>P</strong> es la matriz de transición de probabilidades de preferencia. El resultado final revela la jerarquía de supervivencia de las entidades en el ecosistema.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. DEFINICIÓN DE CLASES - Basado en Kwid y Depto */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Segmentación de Ligas</h2>
            <p className="text-slate-500 text-lg">Definimos los estratos utilizando activos reales de la economía argentina como puntos de corte.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Pequeños */}
            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition-all text-center">
              <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <CarIcon size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2">Pequeños Deudores</h3>
              <p className="text-3xl font-black text-slate-800 mb-4">Hasta $25.5M</p>
              <p className="text-slate-500 text-sm">
                Referencia: Valor de mercado de un <strong>Renault Kwid 0km</strong>. 
                Deudas vinculadas a consumo minorista y microcréditos.
              </p>
            </div>

            {/* Medianos */}
            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition-all text-center ring-2 ring-blue-500 ring-offset-4">
              <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <HomeIcon size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2">Medianos Deudores</h3>
              <p className="text-3xl font-black text-slate-800 mb-4">$25.5M a $150M</p>
              <p className="text-slate-500 text-sm">
                Referencia: Valor promedio de un <strong>Departamento 2 Ambientes</strong>. 
                Deudas de bienes durables y préstamos personales altos.
              </p>
            </div>

            {/* Grandes */}
            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition-all text-center">
              <div className="w-16 h-16 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <DatabaseIcon size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2">Grandes Deudores</h3>
              <p className="text-3xl font-black text-slate-800 mb-4">+ $150M</p>
              <p className="text-slate-500 text-sm">
                Deudas corporativas, comerciales y patrimoniales de gran escala 
                que superan el valor de la unidad habitacional base.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. DASHBOARD DE RANKINGS */}
      <section id="rankings" className="py-24 px-6 bg-slate-900 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <h2 className="text-4xl font-bold mb-4">Resultados de la Tesis</h2>
              <p className="text-slate-400 max-w-xl">
                Visualización de los resultados obtenidos tras procesar la base de deudores del BCRA 
                mediante el algoritmo de atracción de pagos.
              </p>
            </div>
            
            <div className="flex bg-slate-800 p-1.5 rounded-xl border border-slate-700">
              {['pequenos', 'medianos', 'grandes'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-2 rounded-lg text-sm font-bold transition-all ${activeTab === tab ? 'bg-blue-600 text-white shadow-lg' : 'text-slate-400 hover:text-white'}`}
                >
                  {tab.toUpperCase()}
                </button>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-3xl p-8 md:p-12 text-slate-900 shadow-2xl">
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <TrendingUpIcon className="text-blue-600" />
              Ranking Top 10: {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}
            </h3>
            
            <div className="h-[600px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={activeTab === 'pequenos' ? dataPequenos : activeTab === 'medianos' ? dataMedianos : dataGrandes}
                  layout="vertical"
                  margin={{ top: 5, right: 30, left: 40, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#f1f5f9" />
                  <XAxis type="number" domain={[0, 'dataMax + 2']} tickFormatter={(tick) => `${tick}%`} />
                  <YAxis dataKey="name" type="category" width={180} tick={{ fontSize: 11, fontWeight: 'bold' }} />
                  <Tooltip 
                    cursor={{fill: '#f8fafc'}}
                    contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                    formatter={(v) => [`${v}%`, 'Poder de Atracción (Score &pi;)']}
                  />
                  <Bar dataKey="score" radius={[0, 8, 8, 0]} barSize={32}>
                    {(activeTab === 'pequenos' ? dataPequenos : activeTab === 'medianos' ? dataMedianos : dataGrandes).map((entry, index) => (
                      <Cell 
                        key={`cell-${index}`} 
                        fill={index === 9 ? '#2563eb' : '#94a3b8'} 
                      />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER ACADÉMICO */}
      <footer className="py-12 border-t border-slate-200 bg-white text-center">
        <p className="text-slate-400 text-sm font-medium">
          © 2026 - Tesis de Licenciatura en Ciencia de Datos | Desarrollado para Vercel
        </p>
      </footer>
    </div>
  );
}
