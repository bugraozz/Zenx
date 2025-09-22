


import Image from "next/image";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Instagram, Facebook, X, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative bg-black text-white overflow-hidden">
      <div className="relative z-10 py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="space-y-6">
            <Image
              src="/logo.png"
              alt="ZENX GYM Logo"
              width={120}
              height={40}
              className="h-10 w-auto brightness-0 invert"
            />
            <p className="text-sm text-gray-300 leading-relaxed font-[var(--font-manrope)]">
              Modern fitness anlayışı ile güçlü yaşamın başladığı yer. Profesyonel eğitmenlerimiz ve son teknoloji ekipmanlarımızla hedeflerinize ulaşın.
            </p>

            {/* Social Media Links */}
            <div className="flex space-x-4">
              <button className="w-10 h-10 bg-zinc-800/50 rounded-full flex items-center justify-center text-zinc-400 hover:bg-zinc-700 hover:text-white transition-all duration-300 hover:scale-110">
                <Instagram className="w-5 h-5" />
              </button>
              <button className="w-10 h-10 bg-zinc-800/50 rounded-full flex items-center justify-center text-zinc-400 hover:bg-zinc-700 hover:text-white transition-all duration-300 hover:scale-110">
                <Facebook className="w-5 h-5" />
              </button>
              <button className="w-10 h-10 bg-zinc-800/50 rounded-full flex items-center justify-center text-zinc-400 hover:bg-zinc-700 hover:text-white transition-all duration-300 hover:scale-110">
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-[var(--font-manrope)] mb-6 text-white">Hızlı Linkler</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#home" className="text-gray-300 hover:text-zinc-400 transition-colors duration-300 font-[var(--font-manrope)]">Ana Sayfa</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-zinc-400 transition-colors duration-300 font-[var(--font-manrope)]">Hakkımızda</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-zinc-400 transition-colors duration-300 font-[var(--font-manrope)]">Hizmetler</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-zinc-400 transition-colors duration-300 font-[var(--font-manrope)]">İletişim</a></li>
              <li><a href="#gallery" className="text-gray-300 hover:text-zinc-400 transition-colors duration-300 font-[var(--font-manrope)]">Galeri</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-[var(--font-manrope)] mb-6 text-white">İletişim</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-zinc-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-300 font-[var(--font-manrope)]">
                  Atatürk Mahallesi<br />
                  Fitness Sokak No:123<br />
                  Şişli, İstanbul
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-zinc-400 flex-shrink-0" />
                <span className="text-gray-300 font-[var(--font-manrope)]">+90 212 555 0123</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-zinc-400 flex-shrink-0" />
                <span className="text-gray-300 font-[var(--font-manrope)]">info@zenxgym.com</span>
              </li>
            </ul>
          </div>

          {/* Working Hours & Newsletter */}
          <div>
            <h4 className="text-lg font-[var(--font-manrope)] mb-6 text-white">Çalışma Saatleri</h4>
            <ul className="space-y-3 text-sm mb-8">
              <li className="text-gray-300 font-[var(--font-manrope)]">Pazartesi - Cuma: 06:00 - 24:00</li>
              <li className="text-gray-300 font-[var(--font-manrope)]">Cumartesi: 07:00 - 23:00</li>
              <li className="text-gray-300 font-[var(--font-manrope)]">Pazar: 08:00 - 22:00</li>
            </ul>

           
          </div>
        </div>

        {/* Bottom Section */}
        <div className="relative mt-16 pt-8 border-t border-zinc-800">
          {/* Gradient Lines */}
          <div className="absolute inset-x-0 top-0 flex justify-center">
            <div className="w-3/4 h-px bg-gradient-to-r from-transparent via-zinc-600 to-transparent"></div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-400 font-[var(--font-manrope)]">
              © 2024 ZENX GYM Life Club. Tüm hakları saklıdır.
            </p>

            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-zinc-400 transition-colors duration-300 font-[var(--font-manrope)]">
                Gizlilik Politikası
              </a>
              <a href="#" className="text-gray-400 hover:text-zinc-400 transition-colors duration-300 font-[var(--font-manrope)]">
                Kullanım Koşulları
              </a>
              <a href="#" className="text-gray-400 hover:text-zinc-400 transition-colors duration-300 font-[var(--font-manrope)]">
                Çerez Politikası
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
