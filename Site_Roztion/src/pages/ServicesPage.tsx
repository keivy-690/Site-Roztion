import React from 'react';
import { Target, BarChart2, Users, MessageSquare, Instagram, Facebook, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ServicesPage() {
  const services = [
    {
      icon: <Target className="h-12 w-12" />,
      title: 'Google Ads',
      description: 'Campanhas segmentadas que geram resultados imediatos e escaláveis para seu negócio.',
      features: ['Análise de palavras-chave', 'Otimização de campanhas', 'Remarketing estratégico', 'Relatórios detalhados']
    },
    {
      icon: <Facebook className="h-12 w-12" />,
      title: 'Facebook Ads',
      description: 'Anúncios estratégicos que alcançam seu público-alvo com precisão.',
      features: ['Segmentação avançada', 'Criativos otimizados', 'Gestão de orçamento', 'A/B testing']
    },
    {
      icon: <Instagram className="h-12 w-12" />,
      title: 'Instagram Ads',
      description: 'Presença visual impactante para engajar seu público e converter seguidores em clientes.',
      features: ['Stories Ads', 'Feed Ads', 'Reels Ads', 'Shopping Ads']
    },
    {
      icon: <BarChart2 className="h-12 w-12" />,
      title: 'Analytics e Dados',
      description: 'Análise profunda de métricas para otimização contínua de campanhas.',
      features: ['Dashboards personalizados', 'Análise de conversão', 'Tracking avançado', 'Insights acionáveis']
    },
    {
      icon: <Users className="h-12 w-12" />,
      title: 'Gestão de Leads',
      description: 'Qualificação e nutrição de leads para maximizar suas conversões.',
      features: ['Automação de marketing', 'Scoring de leads', 'Nutrição por email', 'CRM integration']
    },
    {
      icon: <MessageSquare className="h-12 w-12" />,
      title: 'Consultoria',
      description: 'Orientação estratégica personalizada para alavancar seus resultados digitais.',
      features: ['Planejamento estratégico', 'Análise competitiva', 'Workshops', 'Mentoria contínua']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#a10bfb] via-[#7706d4] to-[#8925d7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <Link to="/" className="inline-flex items-center text-white mb-12 hover:opacity-80 transition-opacity">
          <ArrowLeft className="h-6 w-6 mr-2" />
          Voltar para Home
        </Link>

        <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 text-center">
          Nossos Serviços
        </h1>
        <p className="text-xl text-white/90 text-center mb-16 max-w-3xl mx-auto">
          Soluções completas em marketing digital para impulsionar seu negócio ao próximo nível
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="text-[#8925d7] mb-6">{service.icon}</div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <ul className="space-y-3">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-700">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#a10bfb] mr-2"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a
            href="https://www.instagram.com/roztion_agency"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-medium rounded-lg text-[#7706d4] bg-white hover:bg-white/90 transition-colors shadow-lg"
          >
            <Instagram className="h-5 w-5 mr-2" />
            Fale com um Especialista
          </a>
        </div>
      </div>
    </div>
  );
}