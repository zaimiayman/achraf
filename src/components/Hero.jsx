import { useState, useCallback } from 'react';
import { FaChevronRight, FaPhoneAlt, FaStar, FaTimes } from 'react-icons/fa';

export default function HeroSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    device: '',
    problem: '',
    date: '',
  });

  const handleInputChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  }, []);

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    console.log('Données du formulaire:', formData);
    alert('Merci! Votre demande de rendez-vous a été enregistrée. Nous vous contacterons sous peu.');
    setIsModalOpen(false);
    setFormData({
      name: '',
      phone: '',
      email: '',
      device: '',
      problem: '',
      date: '',
    });
  }, [formData]);

  const toggleModal = useCallback(() => {
    setIsModalOpen(prev => !prev);
  }, []);

  return (
    <>
      <section className="bg-gradient-to-r md:h-screen from-blue-50 to-cyan-50 py-12 md:py-20">
        <a href="#hero"></a>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center">
          {/* Contenu texte */}
          <div className="md:w-1/2 mb-10 md:mb-0 md:pr-8">
            <h1 className="text-8xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Réparation professionnelle de vos appareils <br />
              <span className="text-blue-600">en moins de 24h</span>
            </h1>
            
            <p className="text-gray-600 text-5xl pt-10 pb-10 md:pt-0 md:pb-0 md:text-base  mb-8">
              Service rapide, fiable et économique pour tous vos appareils.
              Nos techniciens certifiés interviennent à domicile ou en atelier avec une garantie d'1 an.
            </p>
            
            {/* Boutons CTA */}
            <div className="flex flex-col sm:flex-row gap-6 sm:gap-4 mb-8">
  <button 
    onClick={toggleModal}
    className="bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-8 py-8 sm:py-3 rounded-full text-4xl md:text-base transition-all duration-300 flex items-center justify-center shadow-md hover:shadow-lg transform hover:-translate-y-1"
  >
    Prendre rendez-vous <FaChevronRight className="ml-2" />
  </button>
  <a 
    href="#contact"
    className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-6 sm:px-8  py-8 sm:py-3 rounded-full text-4xl md:text-base transition-colors duration-300 flex items-center justify-center"
  >
    <FaPhoneAlt className="mr-2" /> Support 24/7
  </a>
</div>
            
            {/* Avis clients */}
            <div className="flex items-center">
              <div className="flex -space-x-2">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="w-16 h-16 sm:w-10 sm:h-10 rounded-full bg-blue-100 border-2 border-white overflow-hidden">
                    <img 
                      src={`https://randomuser.me/api/portraits/${i % 2 === 0 ? 'men' : 'women'}/${i+10}.jpg`}
                      alt="Client satisfait"
                      className="w-full h-full object-cover"
                      loading="lazy"
                      width={40}
                      height={40}
                    />
                  </div>
                ))}
              </div>
              <div className="ml-3 sm:ml-4">
                <div className="flex items-center text-yellow-400">
                  {[...Array(4)].map((_, i) => (
                    <FaStar key={i} className="w-8 h-8 md:w-3 md:h-3" />
                  ))}
                </div>
                <p className="text-gray-600 text-base md:text-xs ">500+ clients satisfaits</p>
              </div>
            </div>
          </div>
          
          {/* Image */}
          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-full max-w md:max-w-md">
              <img 
                src="https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                alt="Technicien réparant un smartphone"
                className="rounded-lg shadow-xl w-full object-cover transition-transform duration-500 hover:scale-105"
                loading="lazy"
                width={600}
                height={400}
              />
              <div className="absolute -bottom-4 -right-4 bg-white px-4 py-2 rounded-lg shadow-md">
                <p className="text-blue-600 font-medium text-sm">Service rapide 24h/24</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modal de rendez-vous */}
      {isModalOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
          onClick={toggleModal}
        >
          <div 
            className="bg-white rounded-lg shadow-xl max-w-3xl h-[49%] md:h-auto md:max-w-md w-full p-6 relative"
            onClick={e => e.stopPropagation()}
          >
            <button 
              onClick={toggleModal}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-colors"
              aria-label="Fermer le modal"
            >
              <FaTimes className="w-6 h-6" />
            </button>
            
            <h2 className="text-4xl md:text-xl font-bold text-gray-800 mb-6">Demande de rendez-vous</h2>
            
            <form onSubmit={handleSubmit}>
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-xl md:text-sm font-medium text-gray-700 mb-1">
                    Nom complet 
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-xl md:text-sm font-medium text-gray-700 mb-1">
                    Téléphone 
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-xl md:text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
                  />
                </div>
                
                <div>
                  <label htmlFor="device" className="block text-xl md:text-sm font-medium text-gray-700 mb-1">
                    Appareil à réparer 
                  </label>
                  <select
                    id="device"
                    name="device"
                    value={formData.device}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors appearance-none bg-white bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZXZyb24tZG93biI+PHBhdGggZD0ibTYgOSA2IDYgNi02Ii8+PC9zdmc+')] bg-no-repeat bg-[center_right_1rem]"
                  >
                    <option value="">Sélectionnez un appareil</option>
                    <option value="Smartphone">Smartphone</option>
                    <option value="Tablette">Tablette</option>
                    <option value="Ordinateur portable">Ordinateur portable</option>
                    <option value="Ordinateur fixe">Ordinateur fixe</option>
                    <option value="Autre">Autre</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="problem" className="block text-xl md:text-sm font-medium text-gray-700 mb-1">
                    Description du problème 
                  </label>
                  <textarea
                    id="problem"
                    name="problem"
                    value={formData.problem}
                    onChange={handleInputChange}
                    required
                    rows="3"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
                  ></textarea>
                </div>
                
                <div>
                  <label htmlFor="date" className="block text-xl md:text-sm font-medium text-gray-700 mb-1">
                    Date souhaitée 
                  </label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    value={formData.date}
                    onChange={handleInputChange}
                    required
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
                  />
                </div>
              </div>
          
              <button
                type="submit"
                className="mt-6 w-full bg-blue-600 text-white text-xl  md:text-base py-6 md:py-3 px-4 rounded-md hover:bg-blue-700 transition-colors duration-300 font-medium"
              >
                Confirmer le rendez-vous
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}