import { FaStethoscope, FaComments, FaFolderOpen, FaUserMd, FaFileMedical, FaBell } from 'react-icons/fa';

export default function HealthPartner() {
  const features = [
    {
      icon: <FaStethoscope className="w-8 h-8 text-blue-600" />,
      title: "Accédez aux soins plus facilement",
      text: "Réservez des consultations vidéo ou en présentiel, et recevez des rappels pour ne jamais les manquer.",
      badge: <FaBell className="absolute top-4 right-4 text-yellow-500 animate-pulse" />
    },
    {
      icon: <FaComments className="w-8 h-8 text-green-600" />,
      title: "Bénéficiez de soins personnalisés",
      text: "Échangez avec vos soignants par message, obtenez des conseils préventifs et recevez des soins quand vous en avez besoin.",
      gradient: "from-green-50 to-blue-50"
    },
    {
      icon: <FaFolderOpen className="w-8 h-8 text-purple-600" />,
      title: "Gérez votre santé",
      text: "Rassemblez facilement toutes vos informations de santé et celles de ceux qui comptent pour vous.",
      gradient: "from-purple-50 to-pink-50"
    }
  ];

  const stats = [
    { value: "1 millions", label: "personnes mieux soignées Ⓒ", icon: <FaUserMd className="w-8 h-8" /> },
    { value: "40 000", label: "soignants utilisant Doctoilb Ⓒ", icon: <FaFileMedical className="w-8 h-8" /> },
    { value: "30 000 K", label: "documents partagés chaque mois Ⓒ", icon: <FaFolderOpen className="w-8 h-8" /> }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-16 space-y-20">
      {/* En-tête */}
      <header className="text-center space-y-4 animate-fade-in-up">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
          Votre partenaire santé au quotidien
        </h1>
        <p className="text-xl text-gray-600 mt-2 max-w-3xl mx-auto">
          Une solution complète pour votre santé, accessible partout et à tout moment
        </p>
      </header>

      {/* Cartes de fonctionnalités */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
        {features.map((feature, index) => (
          <div 
            key={index}
            className={`relative group p-8 rounded-2xl bg-gradient-to-br ${feature.gradient || 'from-blue-50 to-indigo-50'} 
              transition-all duration-300 hover:shadow-xl hover:-translate-y-2`}
          >
            {feature.badge}
            <div className="space-y-6">
              <div className="flex justify-center">
                <div className="p-4 bg-white rounded-xl shadow-sm">
                  {feature.icon}
                </div>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 text-center">
                {feature.title}
              </h2>
              <p className="text-gray-600 text-center leading-relaxed">
                {feature.text}
              </p>
            </div>
          </div>
        ))}
      </section>

      {/* Statistiques */}
      <section className="bg-gradient-to-br from-blue-50 to-green-50 rounded-2xl p-8 lg:p-12 shadow-sm">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
          DOCNOW en chiffres
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex justify-center text-blue-600 mb-4">
                {stat.icon}
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-2">
                {stat.value}
              </div>
              <div className="text-gray-600 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}