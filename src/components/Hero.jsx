import React from 'react';

function Homepage() {
  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Image Section */}
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img
              src="https://i.pinimg.com/736x/ab/16/5a/ab165aab128f19ae9883e681dd0e3af0.jpg" // Replace with your image path or URL
              alt="Homepage Visual"
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Text Section */}
          <div>
           <h1 className="text-3xl font-bold text-gray-800 mb-4">
  Bienvenue sur Mon DOCNOW
</h1>

<p className="text-lg text-gray-700 leading-relaxed">
  Cet espace constitue le point d’entrée de mes recherches doctorales, axées sur [mentionnez brièvement votre domaine de recherche]. Vous y trouverez des mises à jour, des réflexions, ainsi que les résultats complets de mes travaux à mesure qu'ils progressent. Mon objectif est d’apporter une contribution significative au domaine de [mentionnez le champ plus large] grâce à une analyse rigoureuse et approfondie.
</p>

<p className="text-lg text-gray-700 leading-relaxed mt-4">
  N’hésitez pas à parcourir le site pour en savoir plus sur les objectifs, la méthodologie et l’évolution du projet. Votre intérêt et vos retours sont précieux tout au long de ce parcours de recherche.
</p>

            {/* You can add more elements here like buttons or links */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;