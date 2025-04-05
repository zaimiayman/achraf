import { FaStar } from 'react-icons/fa';
import { useState } from 'react';

export default function TestimonialsSection() {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    profession: '',
    rating: 5,
    comment: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    // Clear error when typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };

  const handleRatingChange = (rating) => {
    setFormData({
      ...formData,
      rating
    });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Le nom est requis';
    if (!formData.comment.trim()) newErrors.comment = 'Le commentaire est requis';
    if (formData.comment.length < 10) newErrors.comment = 'Le commentaire doit contenir au moins 10 caractères';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Ici vous pourriez envoyer les données à votre API
      console.log('Avis soumis:', formData);
      setSubmitted(true);
      setShowForm(false);
      // Réinitialiser après soumission
      setTimeout(() => {
        setFormData({
          name: '',
          profession: '',
          rating: 5,
          comment: ''
        });
        setSubmitted(false);
      }, 3000);
    }
  };

  return (
    <section className="py-20 bg-white" id="reviews">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* En-tête */}
        <div className="text-center mb-16">
          <span className="text-blue-600 text-4xl font-bold">AVIS CLIENTS</span>
          <h2 className="text-3xl font-bold mt-2">Ce que nos clients disent</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mt-4">
            La satisfaction de nos clients est notre meilleure récompense.
          </p>
        </div>

        {/* Grille des avis */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Avis 1 */}
          <div className="p-8 border rounded-lg hover:shadow-md transition-all bg-gray-50">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-blue-100 rounded-full mr-4 flex items-center justify-center text-blue-600 font-bold">
                J
              </div>
              <div>
                <h4 className="font-semibold">Jean Dupont</h4>
                <p className="text-gray-600 text-sm">Entrepreneur</p>
              </div>
            </div>
            <p className="text-gray-600 mb-6 italic">
              "Mon ordinateur portable est revenu comme neuf en moins de 24h. Service exceptionnel et prix très correct."
            </p>
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className="w-5 h-5" />
              ))}
            </div>
          </div>

          {/* Avis 2 */}
          <div className="p-8 border rounded-lg hover:shadow-md transition-all bg-gray-50">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-blue-100 rounded-full mr-4 flex items-center justify-center text-blue-600 font-bold">
                M
              </div>
              <div>
                <h4 className="font-semibold">Marie Lambert</h4>
                <p className="text-gray-600 text-sm">Photographe</p>
              </div>
            </div>
            <p className="text-gray-600 mb-6 italic">
              "Ils ont sauvé toutes mes photos d'un disque dur endommagé. Professionnalisme et empathie remarquables."
            </p>
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className="w-5 h-5" />
              ))}
            </div>
          </div>

          {/* Avis 3 */}
          <div className="p-8 border rounded-lg hover:shadow-md transition-all bg-gray-50">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-blue-100 rounded-full mr-4 flex items-center justify-center text-blue-600 font-bold">
                T
              </div>
              <div>
                <h4 className="font-semibold">Thomas Martin</h4>
                <p className="text-gray-600 text-sm">Étudiant</p>
              </div>
            </div>
            <p className="text-gray-600 mb-6 italic">
              "Réparation de mon smartphone en 30 minutes chrono. Prix imbattable et écran de qualité originale."
            </p>
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className="w-5 h-5" />
              ))}
            </div>
          </div>

          {/* Avis 4 */}
          <div className="p-8 border rounded-lg hover:shadow-md transition-all bg-gray-50">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-blue-100 rounded-full mr-4 flex items-center justify-center text-blue-600 font-bold">
                S
              </div>
              <div>
                <h4 className="font-semibold">Sophie Garnier</h4>
                <p className="text-gray-600 text-sm">Graphiste</p>
              </div>
            </div>
            <p className="text-gray-600 mb-6 italic">
              "Mon MacBook Pro est reparti comme neuf. Techniciens compétents qui expliquent clairement les interventions."
            </p>
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className="w-5 h-5" />
              ))}
            </div>
          </div>

          {/* Avis 5 */}
          <div className="p-8 border rounded-lg hover:shadow-md transition-all bg-gray-50">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-blue-100 rounded-full mr-4 flex items-center justify-center text-blue-600 font-bold">
                A
              </div>
              <div>
                <h4 className="font-semibold">Alexandre Petit</h4>
                <p className="text-gray-600 text-sm">Gamer</p>
              </div>
            </div>
            <p className="text-gray-600 mb-6 italic">
              "Ma PS5 réparée en urgence avant un tournoi. Service rapide et garantie qui donne confiance."
            </p>
            <div className="flex text-yellow-400">
              {[...Array(4)].map((_, i) => (
                <FaStar key={i} className="w-5 h-5" />
              ))}
              <FaStar className="w-5 h-5 text-gray-300" />
            </div>
          </div>

          {/* Avis 6 */}
          <div className="p-8 border rounded-lg hover:shadow-md transition-all bg-gray-50">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-blue-100 rounded-full mr-4 flex items-center justify-center text-blue-600 font-bold">
                L
              </div>
              <div>
                <h4 className="font-semibold">Lucie Bernard</h4>
                <p className="text-gray-600 text-sm">Professeure</p>
              </div>
            </div>
            <p className="text-gray-600 mb-6 italic">
              "Tablette réparée pour mes cours à distance. Accueil chaleureux et tarif étudiant appréciable."
            </p>
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className="w-5 h-5" />
              ))}
            </div>
          </div>

          {/* Carte pour ajouter un nouvel avis */}
          <div 
            className="p-8 border-2 border-dashed border-blue-300 rounded-lg hover:shadow-md transition-all bg-blue-50 cursor-pointer flex flex-col items-center justify-center min-h-[300px]"
            onClick={() => setShowForm(true)}
          >
            {!showForm ? (
              <>
                <div className="w-12 h-12 bg-blue-100 rounded-full mb-4 flex items-center justify-center text-blue-600">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-blue-700 mb-2">Ajouter votre avis</h3>
                <p className="text-blue-600 text-center">Partagez votre expérience avec notre service</p>
              </>
            ) : (
              <form onSubmit={handleSubmit} className="w-full">
                <h3 className="text-lg font-semibold mb-4 text-center">Votre avis compte</h3>
                
                <div className="mb-4">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Votre nom *"
                    className={`w-full px-4 py-2 border ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded-lg mb-2`}
                    required
                  />
                  {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                  <input
                    type="text"
                    name="profession"
                    value={formData.profession}
                    onChange={handleChange}
                    placeholder="Votre profession"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                  />
                </div>
                
                <div className="flex justify-center mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <FaStar
                      key={star}
                      className={`w-6 h-6 cursor-pointer ${star <= formData.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                      onClick={() => handleRatingChange(star)}
                    />
                  ))}
                </div>
                
                <textarea
                  name="comment"
                  value={formData.comment}
                  onChange={handleChange}
                  placeholder="Votre expérience avec notre service... *"
                  className={`w-full px-4 py-2 border ${errors.comment ? 'border-red-500' : 'border-gray-300'} rounded-lg mb-4`}
                  rows="3"
                  required
                ></textarea>
                {errors.comment && <p className="text-red-500 text-sm mt-1">{errors.comment}</p>}
                
                <div className="flex gap-3">
                  <button
                    type="button"
                    onClick={() => setShowForm(false)}
                    className="flex-1 bg-gray-200 text-gray-800 py-2 px-4 rounded-lg hover:bg-gray-300 transition-colors"
                  >
                    Annuler
                  </button>
                  <button
                    type="submit"
                    className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Envoyer
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>

        {/* Note globale */}
        <div className="mt-16 text-center bg-blue-50 p-8 rounded-xl max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold mb-4">Note moyenne de 4.9/5</h3>
          <div className="flex justify-center text-yellow-400 mb-4">
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} className="w-8 h-8" />
            ))}
          </div>
          <p className="text-gray-600">
            Basée sur 287 avis vérifiés - <span className="text-blue-600 font-medium">Service noté Excellent sur TrustPilot</span>
          </p>
        </div>

        {/* Message de confirmation */}
        {submitted && (
          <div className="fixed bottom-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg animate-fade-in">
            Merci pour votre avis ! Il sera publié après modération.
          </div>
        )}
      </div>
    </section>
  );
}