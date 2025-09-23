
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
      details: ["Eğri Köprü Mahallesi", "Yüksel Yancı Caddesi 16A", "Sivas"]
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "E-posta",
      details: ["zenxgyminfo@gmail.com"]
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Çalışma Saatleri",
      details: ["Pazartesi - Cuma: 06:00 - 24:00", "Cumartesi - Pazar: 08:00 - 22:00"]
    }
  ];

  return (
    <div className="relative min-h-screen bg-black text-white pt-60 ">  

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
      <section className="py-20 px-4 scroll-mt-20" id="contact"> 
        <BackgroundText text="ZENX" size="text-[35rem]" className="top-0/2" />
        <BackgroundText text="GYM" size="text-[35rem]" className="top-1/2" />
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[var(--font-lora)] mb-6">
            BİZİMLE İLETİŞİME GEÇİN
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-[var(--font-manrope)]">
            Sorularınız için bizimle iletişime geçin. Size en iyi hizmeti sunmak için buradayız.
          </p>
        </div>
      </section>

      {/* İletişim Bilgileri */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
            {contactInfo.map((info, index) => (
              <div key={index} className="outer relative flex flex-col items-center">
                <div className="dot"></div>
                <div className="card relative flex flex-col items-center justify-center text-white p-6">
                  <div className="ray"></div>
                  <div className="text text-2xl font-bold">{info.title}</div>
                  <div className="mt-2 space-y-1">
                    {info.details.map((detail, dIndex) => (
                      <p key={dIndex} className="text-gray-300 text-sm">{detail}</p>
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
              <h2 className="text-3xl font-[var(--font-manrope)] text-white mb-8">Bize Yazın</h2>
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
            <Card className="bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 overflow-hidden">
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
              <Button className="button">
                Mesaj Gönder
              </Button>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
