
import React from 'react';
import { Menu, X, Phone, Mail, MapPin, ChevronRight, GraduationCap, Users, Award, BookOpen } from 'lucide-react';
import { useState } from 'react';

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                <GraduationCap className="w-7 h-7 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-blue-900">GAUSS</h1>
                <p className="text-sm text-gray-600">Saco Oliveros</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#inicio" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Inicio</a>
              <a href="#nosotros" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Nosotros</a>
              <a href="#servicios" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Servicios</a>
              <a href="#admision" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Admisión</a>
              <a href="#contacto" className="bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600 transition-colors">Contacto</a>
            </nav>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t">
              <nav className="flex flex-col space-y-4">
                <a href="#inicio" className="text-gray-700 hover:text-blue-600 font-medium">Inicio</a>
                <a href="#nosotros" className="text-gray-700 hover:text-blue-600 font-medium">Nosotros</a>
                <a href="#servicios" className="text-gray-700 hover:text-blue-600 font-medium">Servicios</a>
                <a href="#admision" className="text-gray-700 hover:text-blue-600 font-medium">Admisión</a>
                <a href="#contacto" className="text-gray-700 hover:text-blue-600 font-medium">Contacto</a>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section id="inicio" className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-5xl md:text-6xl font-bold leading-tight">
                Formamos 
                <span className="block text-orange-400">Líderes del Futuro</span>
              </h2>
              <p className="text-xl text-blue-100 leading-relaxed">
                Una educación de excelencia que prepara a nuestros estudiantes para destacar en el mundo académico y profesional.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-orange-500 text-white px-8 py-4 rounded-full font-semibold hover:bg-orange-600 transition-all transform hover:scale-105 flex items-center justify-center">
                  Proceso de Admisión
                  <ChevronRight className="w-5 h-5 ml-2" />
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-blue-900 transition-all">
                  Conoce Más
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-orange-400">25+</div>
                    <div className="text-sm text-blue-100">Años de Experiencia</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-orange-400">5000+</div>
                    <div className="text-sm text-blue-100">Estudiantes</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-orange-400">98%</div>
                    <div className="text-sm text-blue-100">Éxito Académico</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-orange-400">15</div>
                    <div className="text-sm text-blue-100">Sedes</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicios" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">Nuestros Servicios Educativos</h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ofrecemos una educación integral con metodologías innovadoras y tecnología de vanguardia
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all group hover:-translate-y-2">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
                <BookOpen className="w-8 h-8 text-blue-600 group-hover:text-white" />
              </div>
              <h4 className="text-2xl font-bold text-gray-900 mb-4">Educación Primaria</h4>
              <p className="text-gray-600 mb-6">
                Formación integral con énfasis en el desarrollo de habilidades fundamentales y valores sólidos.
              </p>
              <a href="#" className="text-blue-600 font-semibold flex items-center hover:text-blue-800">
                Más información <ChevronRight className="w-4 h-4 ml-1" />
              </a>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all group hover:-translate-y-2">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-orange-500 transition-colors">
                <Users className="w-8 h-8 text-orange-500 group-hover:text-white" />
              </div>
              <h4 className="text-2xl font-bold text-gray-900 mb-4">Educación Secundaria</h4>
              <p className="text-gray-600 mb-6">
                Preparación académica de excelencia para el ingreso a las mejores universidades del país.
              </p>
              <a href="#" className="text-blue-600 font-semibold flex items-center hover:text-blue-800">
                Más información <ChevronRight className="w-4 h-4 ml-1" />
              </a>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all group hover:-translate-y-2">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-green-600 transition-colors">
                <Award className="w-8 h-8 text-green-600 group-hover:text-white" />
              </div>
              <h4 className="text-2xl font-bold text-gray-900 mb-4">Pre Universitario</h4>
              <p className="text-gray-600 mb-6">
                Academia preuniversitaria con los mejores docentes y metodología comprobada.
              </p>
              <a href="#" className="text-blue-600 font-semibold flex items-center hover:text-blue-800">
                Más información <ChevronRight className="w-4 h-4 ml-1" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="nosotros" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h3 className="text-4xl font-bold text-gray-900 mb-6">
                Más de 25 años formando <span className="text-blue-600">líderes</span>
              </h3>
              <p className="text-lg text-gray-600 mb-6">
                Somos una institución educativa comprometida con la excelencia académica y la formación integral de nuestros estudiantes.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Metodología Innovadora</h4>
                    <p className="text-gray-600">Aplicamos las mejores prácticas pedagógicas modernas</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Docentes Calificados</h4>
                    <p className="text-gray-600">Profesores con amplia experiencia y especialización</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Infraestructura Moderna</h4>
                    <p className="text-gray-600">Instalaciones equipadas con la mejor tecnología</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-8 text-white">
                <div className="mb-8">
                  <h4 className="text-2xl font-bold mb-4">Resultados que nos avalan</h4>
                  <p className="text-blue-100">Miles de estudiantes han logrado ingresar a las mejores universidades</p>
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <div className="text-3xl font-bold text-orange-400">2,500+</div>
                    <div className="text-sm text-blue-100">Ingresantes UNMSM</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-orange-400">1,800+</div>
                    <div className="text-sm text-blue-100">Ingresantes UNI</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-orange-400">3,200+</div>
                    <div className="text-sm text-blue-100">Otras Universidades</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-orange-400">95%</div>
                    <div className="text-sm text-blue-100">Satisfacción</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-orange-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-4xl font-bold mb-6">¿Listo para ser parte de nuestra familia educativa?</h3>
          <p className="text-xl mb-8 text-orange-100 max-w-2xl mx-auto">
            Únete a miles de estudiantes que han logrado sus sueños académicos con nosotros
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-orange-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all transform hover:scale-105">
              Solicitar Información
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-orange-600 transition-all">
              Llamar Ahora
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-bold">GAUSS</h4>
                  <p className="text-sm text-gray-400">Saco Oliveros</p>
                </div>
              </div>
              <p className="text-gray-400 mb-4">
                Formando líderes del futuro con excelencia académica y valores sólidos.
              </p>
            </div>

            <div>
              <h5 className="text-lg font-semibold mb-4">Servicios</h5>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Educación Primaria</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Educación Secundaria</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pre Universitario</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Talleres</a></li>
              </ul>
            </div>

            <div>
              <h5 className="text-lg font-semibold mb-4">Enlaces</h5>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Nosotros</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Admisión</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Noticias</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contacto</a></li>
              </ul>
            </div>

            <div>
              <h5 className="text-lg font-semibold mb-4">Contacto</h5>
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-gray-400">
                  <Phone className="w-5 h-5" />
                  <span>(01) 123-4567</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-400">
                  <Mail className="w-5 h-5" />
                  <span>info@gauss.edu.pe</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-400">
                  <MapPin className="w-5 h-5" />
                  <span>Lima, Perú</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 GAUSS Saco Oliveros. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
