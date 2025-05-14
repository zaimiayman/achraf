import React from "react";

export default function DataPrivacyCard() {
  return (
    <div className="bg-blue-50 rounded-xl p-6  md:p-10 flex flex-col md:flex-row items-center gap-8 max-w-6xl mx-auto shadow-md">
      
      {/* Image section */}
      <div className="relative w-full md:w-96 flex justify-center">
        <div className="relative w-60 h-60 rounded-xl overflow-hidden">
          <img
            src="https://i.pinimg.com/736x/e9/98/16/e998164a82e62f5815438a6851ebd03f.jpg" // Remplace par l'URL ou import de ton image
            alt="Homme avec un ordinateur"
            className="object-cover w-full h-full"
          />
        </div>

        {/* Decorative Shapes */}
        <div className="absolute top-0 left-0 w-24 h-24 bg-blue-700 rounded-full opacity-70 -translate-x-6 -translate-y-6 z-0" />
        <div className="absolute bottom-0 right-0 w-16 h-16 bg-blue-500 rounded-full opacity-80 translate-x-4 translate-y-4 z-0" />
      </div>

      {/* Text section */}
      <div className="text-center md:text-left md:w-1/2 z-10">
        <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-4">
          Votre santé. Vos données.
        </h2>
        <p className="text-blue-900 mb-6">
          La confidentialité de vos informations personnelles est une priorité
          absolue pour Doctolib et guide notre action au quotidien.
        </p>
        <button className="bg-blue-700 text-white font-semibold px-6 py-3 rounded-md hover:bg-blue-800 transition">
          DÉCOUVRIR NOS ENGAGEMENTS
        </button>
      </div>
    </div>
  );
}
