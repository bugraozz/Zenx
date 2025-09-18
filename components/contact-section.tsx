"use client";

import { useState } from "react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, X } from "lucide-react";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log("Form submitted:", formData);
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Adres",
      details: ["Atatürk Mahallesi", "Fitness Sokak No:123", "Sivas"]
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Telefon",
      details: ["+90 212 555 0123", "+90 533 555 0123"]
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "E-posta",
      details: ["info@zenxgym.com", "membership@zenxgym.com"]
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Çalışma Saatleri",
      details: ["Pazartesi - Cuma: 06:00 - 24:00", "Cumartesi - Pazar: 08:00 - 22:00"]
    }
  ];

  return (
    <div className="min-h-screen bg-zinc-900 text-white pt-60">
      {/* Hero Section */}
      <section className="py-20 px-4"
        id="contact">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[var(--font-manrope)] mb-6">
            <span className="text-zinc-400">İletişim</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-[var(--font-manrope)]">
            Sorularınız için bizimle iletişime geçin. Size en iyi hizmeti sunmak için buradayız.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <Card key={index} className="bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 text-center p-6 hover:bg-zinc-800/70 transition-all duration-300 hover:scale-105">
                <div className="w-16 h-16 bg-zinc-700/20 rounded-xl flex items-center justify-center text-zinc-400 mx-auto mb-4">
                  {info.icon}
                </div>
                <h3 className="text-xl font-[var(--font-manrope)] mb-3 text-white">{info.title}</h3>
                <div className="space-y-1">
                  {info.details.map((detail, dIndex) => (
                    <p key={dIndex} className="text-gray-300 text-sm font-[var(--font-manrope)]">{detail}</p>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-20 px-4 bg-zinc-800/30">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 p-8">
              <h2 className="text-3xl font-[var(--font-manrope)] text-zinc-400 mb-8">Bize Yazın</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-[var(--font-manrope)] mb-2 text-gray-300">
                      Ad Soyad *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="bg-zinc-800 border-zinc-600 text-white focus:border-zinc-400 font-[var(--font-manrope)]"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-[var(--font-manrope)] mb-2 text-gray-300">
                      E-posta *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="bg-zinc-800 border-zinc-600 text-white focus:border-zinc-400 font-[var(--font-manrope)]"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-[var(--font-manrope)] mb-2 text-gray-300">
                    Konu
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="bg-zinc-800 border-zinc-600 text-white focus:border-zinc-400 font-[var(--font-manrope)]"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-[var(--font-manrope)] mb-2 text-gray-300">
                    Mesajınız *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={6}
                    required
                    className="bg-zinc-800 border-zinc-600 text-white focus:border-zinc-400 resize-none font-[var(--font-manrope)]"
                  />
                </div>

                <Button type="submit" className="bg-zinc-700 hover:bg-zinc-600 text-white w-full font-[var(--font-manrope)] py-3">
                  Mesajı Gönder
                </Button>
              </form>
            </Card>

            {/* Map Placeholder */}
            <Card className="bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 overflow-hidden">
              <div className="h-full min-h-[500px] bg-gradient-to-br from-zinc-800 to-zinc-900 flex items-center justify-center relative">
                <div className="text-center">
                  <MapPin className="w-16 h-16 text-zinc-400 mx-auto mb-4" />
                  <h3 className="text-2xl font-[var(--font-manrope)] mb-2 text-white">Lokasyonumuz</h3>
                  <p className="text-gray-300 mb-6 font-[var(--font-manrope)]">
                    Ulaşımı kolay konumumuzda sizi bekliyoruz.
                  </p>
                  <Button className="bg-zinc-700 hover:bg-zinc-600 text-white border-zinc-600 font-[var(--font-manrope)]">
                    Harita'da Görüntüle
                  </Button>
                </div>

                {/* Overlay for visual effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/20 to-transparent"></div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Social Media & Quick Actions */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-[var(--font-manrope)] text-zinc-400 mb-6">Bizi Takip Edin</h2>
            <p className="text-lg text-gray-300 font-[var(--font-manrope)]">
              Sosyal medya hesaplarımızdan güncel haberler ve motivasyon paylaşımlarımızı takip edin
            </p>
          </div>

          <div className="flex justify-center space-x-6 mb-12">
            {[
              { icon: <Instagram className="w-6 h-6" />, platform: "Instagram", href: "https://www.instagram.com/zenx.gym/" },
            ].map((social, index) => (
              <button
                onClick={() => window.open(social.href, "_blank")}
                key={index}
                className="w-14 h-14 bg-zinc-700/20 rounded-full flex items-center justify-center text-zinc-400 hover:bg-zinc-700 hover:text-white transition-all duration-300 hover:scale-110"
              >
                {social.icon}
              </button>
            ))}
          </div>

          {/* Quick Actions */}
          <div className="max-w-lg mx-auto">
            <Card className="bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 text-center p-6 hover:bg-zinc-800/70 transition-all duration-300 hover:scale-105">
              <h3 className="font-[var(--font-manrope)] text-lg mb-3 text-white">WhatsApp</h3>
              <p className="text-sm text-gray-300 mb-4 font-[var(--font-manrope)]">
                Hızlı iletişim için WhatsApp'tan bize yazın.
              </p>
              <Button className="bg-zinc-700 hover:bg-zinc-600 text-white border-zinc-600 w-full font-[var(--font-manrope)]">
                Mesaj Gönder
              </Button>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}

