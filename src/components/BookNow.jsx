import { useState } from 'react';
import { FaCalendarAlt, FaClock, FaUser, FaPhone, FaEnvelope, FaTools, FaChevronLeft, FaCheck } from 'react-icons/fa';

export default function BookNowPage() {
  // États du formulaire
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    device: '',
    problem: '',
    date: '',
    time: '',
    location: 'atelier'
  });

  // États de l'interface
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Gestion des changements de formulaire
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Soumission du formulaire
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Simulation d'appel API
      await new Promise(resolve => setTimeout(resolve, 1500));
      setIsSuccess(true);
      setCurrentStep(4);
    } catch (error) {
      console.error("Erreur lors de la réservation:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Navigation entre les étapes
  const nextStep = () => setCurrentStep(prev => prev + 1);
  const prevStep = () => setCurrentStep(prev => prev - 1);

  // Styles réutilisables
  const inputStyle = "w-full md:p-3 p-6 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent";
  const buttonStyle = "md:px-6 md:py-3 p-6 px-12 rounded-full font-medium transition-colors duration-300";

  return (
    <div  className="min-h-screen  bg-gray-50 flex flex-col" id='Book'>
     

      {/* Contenu principal */}
      <main className="flex-grow py-40  md:py-12 px-4">
        <div className="md:max-w-md max-w-2xl  mx-auto bg-white shadow-xl rounded-lg overflow-hidden">
          {/* Barre de progression */}
          <div className="px-6 pt-6">
            <div className="flex justify-between mb-4">
              {[1, 2, 3].map((step) => (
                <div key={step} className="flex flex-col items-center">
                  <div className={`w-16 md:w-10 md:h-10 h-16 rounded-full flex items-center justify-center 
                    ${currentStep >= step ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-600'}`}>
                    {currentStep > step ? <FaCheck /> : step}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Formulaire de réservation */}
          <form onSubmit={handleSubmit} className="p-6">
            {/* Étape 1 - Informations personnelles */}
            {currentStep === 1 && (
              <div className="space-y-6">
                <h1 className="text-4xl md:text-2xl font-bold text-gray-800">Prendre rendez-vous</h1>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-xl md:text-base text-gray-700 mb-2">Nom complet </label>
                    <div className="flex items-center border rounded-lg overflow-hidden">
                      <FaUser className="ml-3 text-xl text-gray-400" />
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className={`${inputStyle} border-none`}
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xl md:text-base text-gray-700 mb-2">Téléphone </label>
                    <div className="flex items-center border rounded-lg overflow-hidden">
                      <FaPhone className="ml-3 text-xl text-gray-400" />
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className={`${inputStyle} border-none`}
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xl md:text-base text-gray-700 mb-2">Email</label>
                    <div className="flex items-center border rounded-lg overflow-hidden">
                      <FaEnvelope className="ml-3 text-xl text-gray-400" />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className={`${inputStyle} border-none`}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xl md:text-base text-gray-700 mb-2">Appareil à réparer </label>
                    <div className="flex items-center border rounded-lg overflow-hidden">
                      <FaTools className="ml-3 text-xl text-gray-400" />
                      <select
                        name="device"
                        value={formData.device}
                        onChange={handleInputChange}
                        className={`${inputStyle} border-none appearance-none`}
                        required
                      >
                        <option value="" className='text-2xl'>Sélectionnez un appareil</option>
                        <option value="Smartphone">Smartphone</option>
                        <option value="Tablette">Tablette</option>
                        <option value="Ordinateur portable">Ordinateur portable</option>
                        <option value="Ordinateur fixe">Ordinateur fixe</option>
                        <option value="Autre">Autre</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xl md:text-base text-gray-700 mb-2">Description du problème </label>
                    <textarea
                      name="problem"
                      value={formData.problem}
                      onChange={handleInputChange}
                      rows="3"
                      className={inputStyle}
                      required
                    ></textarea>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={nextStep}
                  className={`${buttonStyle} bg-blue-600 text-white hover:bg-blue-700 w-full`}
                >
                  Continuer
                </button>
              </div>
            )}

            {/* Étape 2 - Disponibilité */}
            {currentStep === 2 && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-800">Quand souhaitez-vous venir ?</h2>
                
                <div className="space-y-6">
                  <div>
                    <label className="block text-gray-700 mb-2">Type de service </label>
                    <div className="grid grid-cols-2 gap-3">
                      <button
                        type="button"
                        className={`p-4 border rounded-lg text-left ${formData.location === 'atelier' ? 'border-blue-600 bg-blue-50 text-blue-600' : 'border-gray-300'}`}
                        onClick={() => setFormData({...formData, location: 'atelier'})}
                      >
                        <h3 className="font-medium">En atelier</h3>
                        <p className="text-sm text-gray-500 mt-1">Dépôt en atelier</p>
                      </button>
                      <button
                        type="button"
                        className={`p-4 border rounded-lg text-left ${formData.location === 'domicile' ? 'border-blue-600 bg-blue-50 text-blue-600' : 'border-gray-300'}`}
                        onClick={() => setFormData({...formData, location: 'domicile'})}
                      >
                        <h3 className="font-medium">À domicile</h3>
                        <p className="text-sm text-gray-500 mt-1">Service mobile (+20€)</p>
                      </button>
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-700 mb-2">Date *</label>
                    <div className="flex items-center border rounded-lg overflow-hidden">
                      <FaCalendarAlt className="ml-3 text-gray-400" />
                      <input
                        type="date"
                        name="date"
                        value={formData.date}
                        onChange={handleInputChange}
                        min={new Date().toISOString().split('T')[0]}
                        className={`${inputStyle} border-none`}
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-700 mb-2">Créneau horaire *</label>
                    <div className="flex items-center border rounded-lg overflow-hidden">
                      <FaClock className="ml-3 text-gray-400" />
                      <select
                        name="time"
                        value={formData.time}
                        onChange={handleInputChange}
                        className={`${inputStyle} border-none`}
                        required
                      >
                        <option value="">Sélectionnez un créneau</option>
                        <option value="09:00-11:00">Matin (09:00 - 11:00)</option>
                        <option value="11:00-13:00">Midi (11:00 - 13:00)</option>
                        <option value="14:00-16:00">Après-midi (14:00 - 16:00)</option>
                        <option value="16:00-18:00">Soir (16:00 - 18:00)</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="flex justify-between gap-4 mt-6">
  <button
    type="button"
    onClick={prevStep}
    className="py-3 px-6 border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-50 transition-colors flex items-center justify-center gap-2"
  >
    <FaChevronLeft /> Retour
  </button>
  <button
    type="button"
    onClick={nextStep}
    className="py-3 px-6 bg-blue-600 rounded-lg text-white hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
  >
    Continuer
  </button>
</div>
              </div>
            )}

            {/* Étape 3 - Confirmation */}
            {currentStep === 3 && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-800">Vérifiez vos informations</h2>
                
                <div className="bg-gray-50 p-4 rounded-lg space-y-3">
                  <div className="flex justify-between py-2 border-b border-gray-200">
                    <span className="text-gray-600">Nom:</span>
                    <span className="font-medium">{formData.name}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-gray-200">
                    <span className="text-gray-600">Téléphone:</span>
                    <span className="font-medium">{formData.phone}</span>
                  </div>
                  {formData.email && (
                    <div className="flex justify-between py-2 border-b border-gray-200">
                      <span className="text-gray-600">Email:</span>
                      <span className="font-medium">{formData.email}</span>
                    </div>
                  )}
                  <div className="flex justify-between py-2 border-b border-gray-200">
                    <span className="text-gray-600">Appareil:</span>
                    <span className="font-medium">{formData.device}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-gray-200">
                    <span className="text-gray-600">Problème:</span>
                    <span className="font-medium text-right max-w-xs">{formData.problem}</span>
                  </div>
                  <div className="pt-2 space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Service:</span>
                      <span className="font-medium">
                        {formData.location === 'atelier' ? 'En atelier' : 'À domicile (+20€)'}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Date:</span>
                      <span className="font-medium">
                        {formData.date && new Date(formData.date).toLocaleDateString('fr-FR', { weekday: 'long', day: 'numeric', month: 'long' })}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Horaire:</span>
                      <span className="font-medium">{formData.time}</span>
                    </div>
                  </div>
                </div>

                <div className="flex justify-between gap-4 mt-6">
  <button
    type="button"
    onClick={prevStep}
    className="py-3 px-6 border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-50 transition-colors flex items-center justify-center gap-2"
  >
    <FaChevronLeft /> Retour
  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`${buttonStyle} py-3 px-6 bg-blue-600 rounded-lg text-white hover:bg-blue-700 transition-colors flex items-center justify-center gap-2`}
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        En cours...
                      </>
                    ) : (
                      'Confirmer le rendez-vous'
                    )}
                  </button>
                </div>
              </div>
            )}

            {/* Étape 4 - Confirmation finale */}
            {currentStep === 4 && (
              <div className="text-center py-8 px-4">
                <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100 mb-4">
                  <FaCheck className="h-8 w-8 text-green-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-800 mb-2">Rendez-vous confirmé !</h2>
                <p className="text-gray-600 mb-6">
                  Votre demande a bien été enregistrée pour le {formData.date && new Date(formData.date).toLocaleDateString('fr-FR', { weekday: 'long', day: 'numeric', month: 'long' })} entre {formData.time}.
                </p>
                <p className="text-gray-600 mb-8">
                  {formData.email ? (
                    <>Un email de confirmation a été envoyé à <span className="font-medium">{formData.email}</span>.</>
                  ) : (
                    <>Nous vous contacterons au <span className="font-medium">{formData.phone}</span> pour confirmation.</>
                  )}
                </p>
                <a
                href='/'
                  id="hero"
                  className={`${buttonStyle} bg-blue-600 text-white hover:bg-blue-700 inline-block`}
                >
                  Retour à l'accueil
                </a>
              </div>
            )}
          </form>
        </div>
      </main>

    
    </div>
  );
}