import React from 'react';
import { ArrowRight, BarChart2, Target, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="pt-24 pb-16 bg-gradient-to-br from-purple-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
          <div className="mb-12 lg:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Transforme seu negócio com{' '}
              <span className="text-purple-600">Marketing Digital</span> estratégico
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Potencialize seus resultados com estratégias personalizadas de tráfego pago
              e marketing digital que realmente funcionam.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-purple-600 hover:bg-purple-700 transition-colors"
              >
                Comece Agora
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/cases"
                className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-base font-medium rounded-lg text-gray-700 bg-white hover:bg-gray-50 transition-colors"
              >
                Ver Cases de Sucesso
              </Link>
            </div>
          </div>
          
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              alt="Marketing Digital"
              className="rounded-xl shadow-2xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg">
              <div className="flex items-center space-x-2">
                <Target className="h-6 w-6 text-purple-600" />
                <span className="font-semibold">+200% ROI Médio</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}