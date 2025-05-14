import React from "react";

export default function TwoCardsSection() {
  return (
    <div className="flex flex-col gap-10 p-6 md:p-12">
      {/* 1ère carte : Vous êtes soignant ? */}
      <div className="bg-blue-900 text-white rounded-xl p-6 md:p-10 flex flex-col md:flex-row items-center gap-6">
        {/* Image + forme */}
        <div className="relative w-full md:w-6/12">
          <img
            src="https://i.pinimg.com/736x/42/8c/00/428c000d348fa78158f645bab54ffcb4.jpg"
            alt="Soignants"
            className="rounded-full object-cover w-64 h-64 mx-auto md:mx-14"
          />
          {/* Formes décoratives */}
          <div className="absolute top-0 left-0 w-16 h-16 bg-blue-500 rounded-full blur-xl opacity-70"></div>
          <div className="absolute bottom-0 right-0 w-24 h-24 bg-white/10 rounded-full blur-xl"></div>
        </div>

        {/* Texte */}
        <div className="w-full md:w-2/4">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">Vous êtes soignant ?</h2>
          <p className="font-semibold mb-4">Découvrez Doctolib pour les soignants et améliorez votre quotidien</p>
          <ul className="space-y-2 mb-6 text-sm">
            <li>➡️ Dispensez les meilleurs soins possibles à vos patients</li>
            <li>➡️ Profitez d’une meilleure qualité de vie au travail</li>
            <li>➡️ Augmentez les revenus de votre activité</li>
            <li>➡️ Adoptez les solutions utilisées par plus de 40 000 soignants en Europe</li>
          </ul>
          <button className="bg-white text-blue-900 font-bold px-6 py-3 rounded-md hover:bg-blue-100 transition">
            EN SAVOIR PLUS SUR NOS SOLUTIONS
          </button>
        </div>
      </div>

      {/* 2ème carte : Doctolib recrute */}
      <div className="bg-blue-50 text-blue-900 rounded-xl p-6 md:p-10 flex flex-col md:flex-row-reverse items-center gap-6">
        {/* Image + forme */}
        <div className="relative w-full md:w-1/3">
          <img
            src="https://i.pinimg.com/736x/24/fc/0a/24fc0a702d149c009b8f0abea1a93dc2.jpg"
            alt="Recrutement"
            className="rounded-full object-cover w-64 h-64 mx-auto md:mx-0"
          />
          <div className="absolute top-0 right-0 w-20 h-20 bg-pink-500 rounded-full blur-lg opacity-80"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-blue-400 rounded-full blur-lg opacity-60"></div>
        </div>

        {/* Texte */}
        <div className="w-full md:w-2/4 text-center md:text-left">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">Doctolib recrute</h2>
          <p className="mb-6">Ensemble, construisons la santé dont nous rêvons toutes et tous.</p>
          <button className="border border-blue-600 text-blue-600 font-bold px-6 py-3 rounded-md hover:bg-blue-100 transition">
            VOIR LES OFFRES D’EMPLOI
          </button>
        </div>
      </div>
    </div>
  );
}
