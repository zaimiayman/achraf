import { FaLaptop, FaPhoneAlt, FaTabletAlt, FaGamepad } from 'react-icons/fa';
import { GiConsoleController } from 'react-icons/gi';
import { MdSecurity } from 'react-icons/md';

export default function ServicesSection() {
  return (
    <section className="py-20 bg-white" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* En-tête */}
        <div className="text-center mb-16">
          <span className="text-blue-600 text-4xl font-bold">NOS SERVICES</span>
          <h2 className="text-3xl font-bold mt-2">Ce que nous réparons pour vous</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mt-4">
            Nous intervenons sur toutes les marques avec des pièces de qualité et des techniciens experts.
          </p>
        </div>

        {/* Grille de services */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Carte Service 1 */}
          <div className="p-8 bg-gray-50 rounded-xl hover:shadow-lg transition-all duration-300 border border-gray-200 hover:border-blue-200">
            <div className="text-blue-600 text-4xl mb-4">
              <FaLaptop />
            </div>
            <h3 className="text-xl font-semibold mb-4">Réparation Ordinateurs</h3>
            <p className="text-gray-600 mb-6">Service complet pour tous types d'ordinateurs portables.</p>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-center">
                <svg className="w-4 h-4 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Écrans cassés
              </li>
              <li className="flex items-center">
                <svg className="w-4 h-4 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Claviers défectueux
              </li>
              <li className="flex items-center">
                <svg className="w-4 h-4 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Batteries
              </li>
              <li className="flex items-center">
                <svg className="w-4 h-4 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Virus et logiciels
              </li>
            </ul>
          </div>

          {/* Carte Service 2 */}
          <div className="p-8 bg-gray-50 rounded-xl hover:shadow-lg transition-all duration-300 border border-gray-200 hover:border-blue-200">
            <div className="text-blue-600 text-4xl mb-4">
              <FaPhoneAlt />
            </div>
            <h3 className="text-xl font-semibold mb-4">Réparation Smartphones</h3>
            <p className="text-gray-600 mb-6">Réparations rapides avec des pièces premium.</p>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-center">
                <svg className="w-4 h-4 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Écrans brisés
              </li>
              <li className="flex items-center">
                <svg className="w-4 h-4 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Batteries faibles
              </li>
              <li className="flex items-center">
                <svg className="w-4 h-4 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Dégâts des eaux
              </li>
              <li className="flex items-center">
                <svg className="w-4 h-4 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Ports de charge
              </li>
            </ul>
          </div>

          {/* Carte Service 3 */}
          <div className="p-8 bg-gray-50 rounded-xl hover:shadow-lg transition-all duration-300 border border-gray-200 hover:border-blue-200">
            <div className="text-blue-600 text-4xl mb-4">
              <FaTabletAlt />
            </div>
            <h3 className="text-xl font-semibold mb-4">Réparation Tablettes</h3>
            <p className="text-gray-600 mb-6">Expert en réparation iPad et Android.</p>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-center">
                <svg className="w-4 h-4 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Remplacement d'écran
              </li>
              <li className="flex items-center">
                <svg className="w-4 h-4 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Vitres tactiles
              </li>
              <li className="flex items-center">
                <svg className="w-4 h-4 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Problèmes logiciels
              </li>
              <li className="flex items-center">
                <svg className="w-4 h-4 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Boutons défectueux
              </li>
            </ul>
          </div>

          {/* Carte Service 4 */}
          <div className="p-8 bg-gray-50 rounded-xl hover:shadow-lg transition-all duration-300 border border-gray-200 hover:border-blue-200">
            <div className="text-blue-600 text-4xl mb-4">
              <GiConsoleController />
            </div>
            <h3 className="text-xl font-semibold mb-4">Consoles de Jeu</h3>
            <p className="text-gray-600 mb-6">Réparations spécialisées pour toutes consoles.</p>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-center">
                <svg className="w-4 h-4 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Ports HDMI
              </li>
              <li className="flex items-center">
                <svg className="w-4 h-4 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Lecteurs Blu-ray
              </li>
              <li className="flex items-center">
                <svg className="w-4 h-4 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Surchauffe
              </li>
              <li className="flex items-center">
                <svg className="w-4 h-4 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Dépannage logiciel
              </li>
            </ul>
          </div>

          {/* Carte Service 5 */}
          <div className="p-8 bg-gray-50 rounded-xl hover:shadow-lg transition-all duration-300 border border-gray-200 hover:border-blue-200">
            <div className="text-blue-600 text-4xl mb-4">
              <FaGamepad />
            </div>
            <h3 className="text-xl font-semibold mb-4">Manettes</h3>
            <p className="text-gray-600 mb-6">Réparation de tous types de manettes.</p>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-center">
                <svg className="w-4 h-4 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Boutons défectueux
              </li>
              <li className="flex items-center">
                <svg className="w-4 h-4 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Joysticks
              </li>
              <li className="flex items-center">
                <svg className="w-4 h-4 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Connexion sans fil
              </li>
              <li className="flex items-center">
                <svg className="w-4 h-4 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Problèmes de batterie
              </li>
            </ul>
          </div>

          {/* Carte Service 6 */}
          <div className="p-8 bg-gray-50 rounded-xl hover:shadow-lg transition-all duration-300 border border-gray-200 hover:border-blue-200">
            <div className="text-blue-600 text-4xl mb-4">
              <MdSecurity />
            </div>
            <h3 className="text-xl font-semibold mb-4">Récupération de Données</h3>
            <p className="text-gray-600 mb-6">Sauvez vos fichiers importants.</p>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-center">
                <svg className="w-4 h-4 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Disques durs
              </li>
              <li className="flex items-center">
                <svg className="w-4 h-4 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                SSD endommagés
              </li>
              <li className="flex items-center">
                <svg className="w-4 h-4 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Appareils mouillés
              </li>
              <li className="flex items-center">
                <svg className="w-4 h-4 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Fichiers corrompus
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}