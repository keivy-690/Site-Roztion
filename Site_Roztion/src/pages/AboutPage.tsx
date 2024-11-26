import React from 'react';
import { Users, Award, Target, TrendingUp } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="pt-20">
      <section className="py-20 bg-gradient-to-br from-purple-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Sobre a <span className="text-purple-600">Roztion</span>
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                Somos uma agência especializada em marketing digital e tráfego pago,
                comprometida em entregar resultados excepcionais para nossos clientes.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-purple-600">500+</div>
                  <div className="text-gray-600">Clientes Atendidos</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-purple-600">98%</div>
                  <div className="text-gray-600">Satisfação</div>
                </div>
              </div>
            </div>
            <div className="mt-12 lg:mt-0">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Team meeting"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nossos Valores
            </h2>
            <p className="text-lg text-gray-600">
              Princípios que guiam nossa atuação no mercado
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Target className="h-8 w-8" />,
                title: 'Foco em Resultados',
                description: 'Comprometimento com métricas e objetivos claros'
              },
              {
                icon: <Users className="h-8 w-8" />,
                title: 'Cliente no Centro',
                description: 'Atendimento personalizado e dedicado'
              },
              {
                icon: <Award className="h-8 w-8" />,
                title: 'Excelência',
                description: 'Busca constante pela qualidade superior'
              },
              {
                icon: <TrendingUp className="h-8 w-8" />,
                title: 'Inovação',
                description: 'Sempre à frente das tendências digitais'
              }
            ].map((value, index) => (
              <div
                key={index}
                className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
              >
                <div className="text-purple-600 mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}