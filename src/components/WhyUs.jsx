import { MdOutlineSupportAgent, MdSecurity, MdLocalShipping, MdPriceCheck } from 'react-icons/md';
import Img from "../assets/Technicien.jpg"

export default function WhyUsSection() {
  return (
    <section className="py-20 bg-gray-50" id="why">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Image avec badge */}
          <div className="order-2 md:order-1">
            <div className="relative">
              <img 
                src={Img}
                alt="Technicien qualifié travaillant sur un appareil"
                className="rounded-lg shadow-xl w-full"
                loading="lazy"
              />
              <div className="absolute -bottom-6 -right-4 bg-white p-6 rounded-lg shadow-lg max-w-xs">
                <div className="flex items-center">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <MdSecurity className="text-blue-600 text-xl" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl">5,000+</h3>
                    <p className="text-gray-600">Appareils réparés</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contenu texte */}
          <div className="order-1 md:order-2 ">

          <div className='text-center'>

            <span className="text-blue-600 text-5xl md:text-4xl font-bold ">POURQUOI NOUS CHOISIR</span>
            <h2 className="text-2xl font-bold mt-2 mb-8">Une expérience de réparation exceptionnelle</h2>
            
          </div>
            <div className="gap-4 grid grid-cols-2 md:grid-cols-1">
              {/* Point 1 */}
              <div className="flex items-start bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="text-blue-600 text-2xl mr-4 flex-shrink-0">
                  <MdOutlineSupportAgent />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Support 24/7</h3>
                  <p className="text-gray-600">
                    Assistance technique disponible à tout moment, même les week-ends et jours fériés.
                  </p>
                </div>
              </div>

              {/* Point 2 */}
              <div className="flex items-start bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="text-blue-600 text-2xl mr-4 flex-shrink-0">
                  <MdSecurity />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Garantie 1 an</h3>
                  <p className="text-gray-600">
                    Toutes nos réparations sont couvertes par une garantie complète d'un an.
                  </p>
                </div>
              </div>

              {/* Point 3 */}
              <div className="flex items-start bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="text-blue-600 text-2xl mr-4 flex-shrink-0">
                  <MdLocalShipping />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Service mobile gratuit</h3>
                  <p className="text-gray-600">
                    Nous nous déplaçons à votre domicile ou entreprise sans frais supplémentaires.
                  </p>
                </div>
              </div>

              {/* Point 4 */}
              <div className="flex items-start bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="text-blue-600 text-2xl mr-4 flex-shrink-0">
                  <MdPriceCheck />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Garantie de prix</h3>
                  <p className="text-gray-600">
                    Si vous trouvez moins cher ailleurs, nous égalons le prix plus 10% de réduction.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}