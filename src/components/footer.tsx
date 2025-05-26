import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTelegramPlane,
  FaTiktok,
} from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="rounded-lg mb-5 bg-gradient-to-r from-pink-100 to-blue-100 text-black text-sm px-10 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-6">
        {/* Hujjatlar */}
        <div>
          <h4 className="font-bold mb-2">Hujjatlar</h4>
          <ul className="space-y-1">
            <li>Umumiy shartlar</li>
            <li>Ofertalar arxivi</li>
            <li>Nizom</li>
            <li>Guvohnoma</li>
          </ul>
        </div>

        {/* Servis */}
        <div>
          <h4 className="font-bold mb-2">Servis</h4>
          <ul className="space-y-1">
            <li>Do‘konlar</li>
            <li>Biz haqimizda</li>
            <li>Hamkorlik uchun</li>
            <li>Qaytarish</li>
            <li>Promokodlar</li>
          </ul>
        </div>

        {/* Mahsulotlar katalogi */}
        <div>
          <h4 className="font-bold mb-2">Mahsulotlar katalogi</h4>
          <ul className="space-y-1">
            <li>Katalog 1</li>
            <li>Katalog 1</li>
            <li>Katalog 2</li>
            <li>Katalog 2</li>
            <li>Katalog 3</li>
          </ul>
        </div>

        {/* Axborot xizmati */}
        <div>
          <h4 className="font-bold mb-2">Axborot xizmati</h4>
          <ul className="space-y-1">
            <li>contact@nextstore.uz</li>
            <li>+998 97 792 96 96</li>
            <li>+998 95 503 09 09</li>
            <li>Sag‘bon 186, Olmazor tumani, Toshkent, O‘zbekiston</li>
          </ul>
          <div className="flex space-x-4 mt-4 text-xl">
            <FaFacebookF className="cursor-pointer hover:text-blue-700" />
            <FaInstagram className="cursor-pointer hover:text-pink-500" />
            <FaTelegramPlane className="cursor-pointer hover:text-blue-500" />
            <FaTiktok className="cursor-pointer hover:text-black" />
          </div>
        </div>
      </div>

      {/* Bottom section */}
      <div className="border-t border-gray-300 pt-4 flex flex-col sm:flex-row justify-between items-center text-xs">
        <p>2022 Nextstore.com</p>
        <p>Powered by</p>
      </div>
    </footer>
  );
};
