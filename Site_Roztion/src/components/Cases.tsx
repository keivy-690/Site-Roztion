import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function Cases() {
  const cases = [
    {
      client: 'E-commerce Fashion',
      result: '300% ROI',
      metric: 'em 3 meses',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
      client: 'SaaS B2B',
      result: '150+ Leads',
      metric: 'por mês',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
      client: 'Clínica Estética',
      result: '200% Aumento',
      metric: 'em agendamentos',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    }
  ];

  return (
    <section id="cases" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Cases de Sucesso
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Resultados reais que transformaram negócios
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cases.map((case_, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl bg-white shadow-lg hover:shadow-xl transition-all"
            >
              <img
                src={case_.image}
                alt={case_.client}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{case_.client}</h3>
                <p className="text-purple-600 text-2xl font-bold mb-1">
                  {case_.result}
                </p>
                <p className="text-gray-600">{case_.metric}</p>
                <ArrowUpRight className="absolute bottom-6 right-6 h-6 w-6 text-purple-600 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}