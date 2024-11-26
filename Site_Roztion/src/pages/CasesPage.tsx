import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function CasesPage() {
  const cases = [
    {
      client: 'E-commerce Fashion',
      result: '300% ROI',
      metric: 'em 3 meses',
      description: 'Implementação de estratégia omnichannel com foco em remarketing e campanhas sazonais.',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
      client: 'SaaS B2B',
      result: '150+ Leads',
      metric: 'por mês',
      description: 'Otimização de funil de vendas com qualificação de leads através de campanhas segmentadas.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
      client: 'Clínica Estética',
      result: '200% Aumento',
      metric: 'em agendamentos',
      description: 'Estratégia local com Google Ads e Meta Ads focada em geração de agendamentos.',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
      client: 'Startup Fintech',
      result: '-40% CAC',
      metric: 'em 6 meses',
      description: 'Otimização de campanhas com foco em redução de custo de aquisição.',
      image: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    }
  ];

  return (
    <div className="pt-20">
      <section className="py-20 bg-gradient-to-br from-purple-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Cases de Sucesso
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Conheça algumas das histórias de transformação digital que ajudamos a construir
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {cases.map((case_, index) => (
              <div
                key={index}
                className="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all overflow-hidden"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={case_.image}
                    alt={case_.client}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-semibold mb-2">{case_.client}</h3>
                  <div className="flex items-center mb-4">
                    <span className="text-purple-600 text-3xl font-bold">
                      {case_.result}
                    </span>
                    <span className="ml-2 text-gray-600">{case_.metric}</span>
                  </div>
                  <p className="text-gray-600 mb-6">{case_.description}</p>
                  <div className="flex items-center text-purple-600 font-medium">
                    Ver detalhes
                    <ArrowUpRight className="ml-2 h-5 w-5" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}