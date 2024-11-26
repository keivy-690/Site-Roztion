import React from 'react';
import { Target, BarChart2, Users, MessageSquare, Instagram, Facebook } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: <Target className="h-8 w-8" />,
      title: 'Google Ads',
      description: 'Campanhas segmentadas que geram resultados imediatos e escaláveis para seu negócio.'
    },
    {
      icon: <Facebook className="h-8 w-8" />,
      title: 'Facebook Ads',
      description: 'Anúncios estratégicos que alcançam seu público-alvo com precisão.'
    },
    {
      icon: <Instagram className="h-8 w-8" />,
      title: 'Instagram Ads',
      description: 'Presença visual impactante para engajar seu público e converter seguidores em clientes.'
    },
    {
      icon: <BarChart2 className="h-8 w-8" />,
      title: 'Analytics e Dados',
      description: 'Análise profunda de métricas para otimização contínua de campanhas.'
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: 'Gestão de Leads',
      description: 'Qualificação e nutrição de leads para maximizar suas conversões.'
    },
    {
      icon: <MessageSquare className="h-8 w-8" />,
      title: 'Consultoria',
      description: 'Orientação estratégica personalizada para alavancar seus resultados digitais.'
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Nossos Serviços
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Soluções completas em marketing digital para impulsionar seu negócio
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
            >
              <div className="text-purple-600 mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}