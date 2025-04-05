import { FaPhoneAlt, FaMapMarkerAlt, FaEnvelope, FaClock } from 'react-icons/fa';
import { useState } from 'react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = { ...errors };

    if (!formData.name.trim()) {
      newErrors.name = 'Le nom est requis';
      valid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = 'L\'email est requis';
      valid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Veuillez entrer un email valide';
      valid = false;
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Le téléphone est requis';
      valid = false;
    } else if (!/^[0-9\s\-\.]+$/.test(formData.phone)) {
      newErrors.phone = 'Veuillez entrer un numéro valide';
      valid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Le message est requis';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      // Ici vous pourriez envoyer les données à votre API
      console.log('Formulaire soumis:', formData);
      setIsSubmitted(true);
      // Réinitialiser le formulaire après soumission
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      });
    }
  };

  return (
    <section className="py-20 bg-gray-50" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* En-tête */}
        <div className="text-center mb-16">
          <span className="text-blue-600 text-4xl font-bold">CONTACT</span>
          <h2 className="text-3xl font-bold mt-2">Prenez rendez-vous facilement</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mt-4">
            Notre équipe est à votre disposition pour toute question ou demande de réparation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Formulaire de contact */}
          <div className="bg-white p-8 rounded-xl shadow-sm">
            <h3 className="text-xl font-semibold mb-6">Envoyez-nous un message</h3>
            
            {isSubmitted && (
              <div className="mb-6 p-4 bg-green-100 text-green-700 rounded-lg">
                Votre message a été envoyé avec succès !
              </div>
            )}
            
            <form className="space-y-6" onSubmit={handleSubmit} noValidate>
              <div>
                <label htmlFor="name" className="block text-gray-700 mb-2">Nom complet </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition`}
                  placeholder="Votre nom"
                />
                {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-700 mb-2">Email </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition`}
                  placeholder="votre@email.com"
                />
                {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
              </div>

              <div>
                <label htmlFor="phone" className="block text-gray-700 mb-2">Téléphone </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border ${errors.phone ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition`}
                  placeholder="06 12 34 56 78"
                />
                {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone}</p>}
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-700 mb-2">Message </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border ${errors.message ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition`}
                  placeholder="Décrivez votre problème ou demande..."
                ></textarea>
                {errors.message && <p className="mt-1 text-sm text-red-600">{errors.message}</p>}
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-4 px-6 rounded-lg hover:bg-blue-700 transition-colors font-medium shadow-md hover:shadow-lg"
              >
                Envoyer le message
              </button>
            </form>
          </div>

          {/* Informations de contact */}
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-6">Nos coordonnées</h3>
              
              <div className="space-y-6">
                {/* Adresse */}
                <div className="flex items-start">
                  <div className="text-blue-600 text-xl mr-4 mt-1">
                    <FaMapMarkerAlt />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Adresse</h4>
                    <p className="text-gray-600">
                    X5HF+7JF, Av. Mohamed Belhassan El Ouazzani,<br />
                    Rabat 10170, Maroc
                    </p>
                  </div>
                </div>

                {/* Téléphone */}
                <div className="flex items-start">
                  <div className="text-blue-600 text-xl mr-4 mt-1">
                    <FaPhoneAlt />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Téléphone</h4>
                    <p className="text-gray-600">
                      <a href="tel:0537 75 42 42" className="hover:text-blue-600 transition-colors">
                      0537 75 42 42
                      </a>
                    </p>
                    <p className="text-sm text-gray-500 mt-1">
                      (Service client 24/7)
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start">
                  <div className="text-blue-600 text-xl mr-4 mt-1">
                    <FaEnvelope />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Email</h4>
                    <p className="text-gray-600">
                      <a href="mailto:etceinfo@etceinfo.ma" className="hover:text-blue-600 transition-colors">
                      etceinfo@etceinfo.ma
                      </a>
                    </p>
                  </div>
                </div>

                {/* Horaires */}
                <div className="flex items-start">
                  <div className="text-blue-600 text-xl mr-4 mt-1">
                    <FaClock />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Horaires d'ouverture</h4>
                    <p className="text-gray-600">
                      <span className="font-medium">Lun-Ven:</span> 8h-20h<br />
                      <span className="font-medium">Sam:</span> 9h-18h<br />
                      <span className="font-medium">Dim:</span> Urgences seulement
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Carte Google Maps */}
            <div className="bg-white p-4 rounded-xl shadow-sm">
              <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13292.86908546403!2d-6.8328508!3d33.9715904!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda76b5b18bc5e4f%3A0x28ea6474d5f7fd23!2sEtceinfo!5e0!3m2!1sfr!2sma!4v1623258136846!5m2!1sfr!2sma"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="Localisation de notre atelier à Rabat"
              ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}