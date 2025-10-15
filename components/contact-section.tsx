"use client";

import { useState } from "react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { BackgroundText } from "./BackgroundText";
import { MapPin, Mail, Clock, Instagram } from "lucide-react";
import * as emailjs from "@emailjs/browser";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const [notification, setNotification] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);

  const showNotification = (type: "success" | "error", message: string) => {
    setNotification({ type, message });
    setTimeout(() => setNotification(null), 4000); 
  };

  const handleOpenMap = () => {
    const lat = 39.724056;  
    const lng = 37.054528;  
    window.open(`https://www.google.com/maps?q=${lat},${lng}`, "_blank");
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs.send(
      "service_4xlchbo",   
      "template_yaqfjan",  
      {
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
      },
      "jAEiqF12srJ1_8ni3" 
    )
    .then(
      () => {
        showNotification("success", "Mesajınız başarıyla gönderildi!");
        setFormData({ name: "", email: "", subject: "", message: "" });
      },
      (error) => {
        showNotification("error", "Mesaj gönderilemedi: " + error.text);
      }
    );
  };

  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Adres",
      details: ["Eğri Köprü Mahallesi", "Yüksel Yancı Caddesi 16A", "Sivas Merkez" ]
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "E-posta,Telefon",
      details: [
        "zenxgyminfo@gmail.com",
        "+90 501 553 63 58"
      ]
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Genel Çalışma Saatleri",
      details: ["Pazartesi - Cumartesi: 07:00 - 23:00", "Pazar: 12:00 - 18:00"]
    },
      {
      icon: <Clock className="w-6 h-6" />,
      title: "Kadınlara Özel Çalışma Saatleri",
      details: ["Salı: 09:00 - 12:00","Perşembe: 09:00 - 12:00","Cumartesi: 09:00 - 12:00"]
    }
  ];

  return (
    <div className="relative min-h-screen bg-black text-white pt-60 ">  
      <BackgroundText text="ZENX" size="text-[45rem]" className="top-0/2"  />
      <BackgroundText text="GYM" size="text-[45rem]" className="top-1/2"  />
      {/* Toast Bildirim */}
      {notification && (
        <div
          className={`fixed top-5 right-5 z-50 px-6 py-4 rounded-lg shadow-lg font-[var(--font-manrope)] transition-all duration-300
            ${notification.type === "success" ? "bg-green-600 text-white" : "bg-red-600 text-white"}
          `}
        >
          {notification.message}
        </div>
      )}

      {/* Contact Başlık */}
      <section className="py-20 px-4"
       id="contact">
        <div className="container mx-auto max-w-9xl"> 
          <div className="text-center pt-4 pb-18 z-10">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-[var(--font-lora)] mb-6">
          İLETİŞİM
        </h1>
      </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-x-8 gap-y-12 justify-items-center">
            {contactInfo.map((info, index) => (
              <div 
                key={index} 
                className="outer relative flex flex-col items-center w-full max-w-sm"
              >
                <div className="dot"></div>
                <div 
                  className={`card relative flex flex-col items-center text-white p-6 w-full h-full ${
                    ['Adres', 'E-posta'].includes(info.title) ? '' : 'justify-center'
                  }`}
                >
                  <div className="ray"></div>
                  <div className="text text-2xl font-bold text-center">{info.title}</div>
                  <div className="mt-4 space-y-2 text-center">
                    {info.details.map((detail, dIndex) => (
                      info.title === 'E-posta' ? (
                        <a 
                          key={dIndex} 
                          href={`mailto:${detail}`} 
                          className="text-white font-medium text-base tracking-wider hover:text-gray-300 transition-colors"
                        >
                          {detail}
                        </a>
                      ) : (
                        <p key={dIndex} className="text-gray-200 font-medium text-base">
                          {detail}
                        </p>
                      )
                    ))}
                  </div>
                  <div className="line topl"></div>
                  <div className="line leftl"></div>
                  <div className="line bottoml"></div>
                  <div className="line rightl"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* İletişim Formu ve Harita */}
      <section className="py-20 px-4 bg-black">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Form */}
            <Card className="bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 p-8">
              <h2 className="text-3xl font-[var(--font-manrope)] text-white mb-8">Bizimle İletişime Geçin</h2>
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

                <Button type="submit" className="button">
                  Mesajı Gönder
                </Button>
              </form>
            </Card>

            {/* Harita */}
            <Card className="bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 p-8 pt-30">
              <div className="text-center">
                <MapPin className="w-16 h-16 text-white mx-auto mb-8" />
                <h3 className="text-2xl font-[var(--font-manrope)] mb-2 text-white">Lokasyonumuz</h3>
                <p className="text-white mb-6 font-[var(--font-manrope)]">
                  Ulaşımı kolay konumumuzda sizi bekliyoruz.
                </p>
                <Button className="button" onClick={handleOpenMap}>
                  Harita'da Görüntüle
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Social Media & Quick Actions */}
<section className="py-20 px-4">
  <div className="container mx-auto">
    <div className="max-w-lg mx-auto">
      <Card className="bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 text-center p-6 transition-all duration-300">
        <h3 className="font-[var(--font-manrope)] text-lg mb-3 text-white">WhatsApp</h3>
        <p className="text-sm text-white mb-4 font-[var(--font-manrope)]">
          Hızlı iletişim için WhatsApp'tan bize yazın.
        </p>

        <Button
          className="button"
          onClick={() => {
            const phone = "905015536358"; // <-- Kendi numaranı yaz (ülke kodu dahil, + veya 0 olmadan)
            const message = "Merhaba, web sitenizden ulaşıyorum!"; // <-- İstersen değiştir

            const encoded = encodeURIComponent(message);
            const isMobile = /Mobil|Android|iPhone|iPad/i.test(navigator.userAgent);

            // Mobil cihazlarda doğrudan WhatsApp uygulamasına, diğerlerinde WhatsApp Web'e yönlendirir
            const url = isMobile
              ? `whatsapp://send?phone=${phone}&text=${encoded}`
              : `https://wa.me/${phone}?text=${encoded}`;

            // Uygulamayı veya web'i yeni sekmede aç
            window.open(url, "_blank", "noopener,noreferrer");
          }}
        >
          Mesaj Gönder
        </Button>
      </Card>
    </div>
  </div>
</section>

    </div>
  );
}
