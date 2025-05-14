import React from 'react';
import { HeartIcon, PhoneIcon, EnvelopeIcon, MapPinIcon } from '@heroicons/react/24/outline';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-12">
          
          {/* Colonne 1 - Logo et description */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">
              <span className="text-blue-400">Mon</span>Docteur
            </h2>
            <p className="text-gray-400 text-sm">
              Votre plateforme de santé connectée 24h/24 et 7j/7
            </p>
            <div className="flex items-center space-x-2">
              <HeartIcon className="h-6 w-6 text-red-400" />
              <span className="text-sm text-gray-400">Santé à cœur ouvert</span>
            </div>
          </div>

          {/* Colonne 2 - Liens rapides */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Accès rapide</h3>
            <ul className="space-y-2">
              <li><a href="/urgence" className="text-gray-400 hover:text-blue-400 transition">Urgences</a></li>
              <li><a href="/medecins" className="text-gray-400 hover:text-blue-400 transition">Médecins</a></li>
              <li><a href="/services" className="text-gray-400 hover:text-blue-400 transition">Services</a></li>
              <li><a href="/blog" className="text-gray-400 hover:text-blue-400 transition">Blog santé</a></li>
            </ul>
          </div>

          {/* Colonne 3 - Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <PhoneIcon className="h-5 w-5 mr-2 text-blue-400" />
                <span className="text-gray-400">24h/24 : 01 23 45 67 89</span>
              </div>
              <div className="flex items-center">
                <EnvelopeIcon className="h-5 w-5 mr-2 text-blue-400" />
                <a href="mailto:contact@mondocteur.fr" className="text-gray-400 hover:text-blue-400 transition">
                  contact@mondocteur.fr
                </a>
              </div>
              <div className="flex items-center">
                <MapPinIcon className="h-5 w-5 mr-2 text-blue-400" />
                <span className="text-gray-400">Rabat, Maroc</span>
              </div>
            </div>
          </div>

          {/* Colonne 4 - Légal */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Légal</h3>
            <ul className="space-y-2">
              <li><a href="/confidentialite" className="text-gray-400 hover:text-blue-400 transition">Confidentialité</a></li>
              <li><a href="/cgu" className="text-gray-400 hover:text-blue-400 transition">CGU</a></li>
              <li><a href="/mentions-legales" className="text-gray-400 hover:text-blue-400 transition">Mentions légales</a></li>
              <li><a href="/cookies" className="text-gray-400 hover:text-blue-400 transition">Cookies</a></li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 py-6">
          <div className="text-center text-sm text-gray-400">
            <p>
              © 2025 Mon Docteur - Tous droits réservés | 
              <a href="/politique" className="hover:text-blue-400 ml-2 transition">Politique de confidentialité</a>
            </p>
        
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;