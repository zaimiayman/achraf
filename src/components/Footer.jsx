import { FaTools, FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';
import { MdEmail, MdPhone, MdLocationOn } from 'react-icons/md';
import Img from '../assets/logo1.png';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Colonne 1 - Logo et description */}
          <div>
            <div className="flex items-center mb-6">
              <img src={Img} className="text-blue-500 h-9 w-10" />
              <span className="ml-2 text-2xl font-bold">ETCE INFO</span>
            </div>
            <div className="text-gray-400 mb-6 space-y-4">
            

           <p> ETCEINFO : Informatique, Réseaux, standard téléphonique, image et son . </p>

            <p>Digitalspring :  Logiciels de gestion et transformation digitale . </p>

            <p>Streetprint : Impression Grand format et visites virtuelles Street View. </p>

           
            </div>
           
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/etceinfo/?locale=fr_FR" className="text-gray-400 hover:text-blue-500 transition-colors">
                <FaFacebook className="h-6 w-6" />
              </a>
              
              <a href="https://www.instagram.com/etceinfo/" className="text-gray-400 hover:text-blue-500 transition-colors">
                <FaInstagram className="h-6 w-6" />
              </a>
              <a href="https://www.linkedin.com/company/etceinfo/" className="text-gray-400 hover:text-blue-500 transition-colors">
                <FaLinkedin className="h-6 w-6" />
              </a>
              <a href="https://www.youtube.com/@etceinfo7628" className="text-gray-400 hover:text-blue-500 transition-colors">
                <FaYoutube className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Colonne 2 - Liens rapides */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Liens rapides</h3>
            <ul className="space-y-3">
              <li>
                <a href="#services" className="text-gray-400 hover:text-blue-500 transition-colors">Nos services</a>
              </li>
              <li>
                <a href="#why" className="text-gray-400 hover:text-blue-500 transition-colors">Pourquoi nous choisir</a>
              </li>
              <li>
                <a href="#reviews" className="text-gray-400 hover:text-blue-500 transition-colors">Avis clients</a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-blue-500 transition-colors">Contact</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">Blog</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">FAQ</a>
              </li>
            </ul>
          </div>

          {/* Colonne 3 - Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Nos services</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">Réparation smartphone</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">Réparation ordinateur</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">Réparation tablette</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">Récupération de données</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">Réparation console de jeu</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">Dépannage à domicile</a>
              </li>
            </ul>
          </div>

          {/* Colonne 4 - Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contactez-nous</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MdLocationOn className="text-blue-500 text-5xl mr-4 mt-1" />
                <span className="text-gray-400">X5HF+7JF, Av. Mohamed Belhassan El Ouazzani,
                Rabat 10170, Maroc</span>
              </li>
              <li className="flex items-center">
                <MdPhone className="text-blue-500 text-xl mr-4" />
                <a href="tel:+33123456789" className="text-gray-400 hover:text-blue-500 transition-colors">
                0537 75 42 42
                </a>
              </li>
              <li className="flex items-center">
                <MdEmail className="text-blue-500 text-xl mr-4" />
                <a href="mailto:contact@techfixpro.fr" className="text-gray-400 hover:text-blue-500 transition-colors">
                etceinfo@etceinfo.ma
                </a>
              </li>
            </ul>

            <div className="mt-8">
              <h4 className="font-medium mb-3">Horaires d'ouverture</h4>
              <ul className="text-gray-400 space-y-2">
                <li className="flex justify-between">
                  <span>Lundi - Vendredi</span>
                  <span>8h - 20h</span>
                </li>
                <li className="flex justify-between">
                  <span>Samedi</span>
                  <span>9h - 18h</span>
                </li>
                <li className="flex justify-between">
                  <span>Dimanche</span>
                  <span>Urgences uniquement</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Copyright et mentions légales */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()}   ETCE INFO. Tous droits réservés.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-500 hover:text-blue-500 transition-colors text-sm">Mentions légales</a>
            <a href="#" className="text-gray-500 hover:text-blue-500 transition-colors text-sm">Politique de confidentialité</a>
            <a href="#" className="text-gray-500 hover:text-blue-500 transition-colors text-sm">Conditions générales</a>
            <a href="#" className="text-gray-500 hover:text-blue-500 transition-colors text-sm">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}