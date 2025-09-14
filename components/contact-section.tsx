
import { SignupForm } from "./signup-form"
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";
import { Button } from "./ui/button"
import { TextHoverEffect } from "./ui/text-hover-effect";

import { MapPin, Phone, Mail, Instagram, Facebook, Twitter, X } from "lucide-react"

export function ContactSection() {

  const words = [
    { text: "BİZE" },
    { text: "ULAŞIN", className: "text-gray-900/70 dark:text-gray-900/70" },
  ];
  return (
    
    <section id="contact" className=" relative h-screen overflow-hidden bg-zinc-10 text-black">
      
        <div className="absolute inset-0 w-full h-full z-0">
       
       
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="text-center space-y-6 mb-8 relative">
  <h1 className="text-4xl md:text-5xl lg:text-6xl font-extralight">
    <TextHoverEffect text="BİZE ULAŞIN" />
  </h1>
</div>

        <div className="grid lg:grid-cols-2 gap-16">
          <div className="space-y-8">
            <div className="space-y-8">
              <div className="flex items-start space-x-6 group">
                <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <MapPin className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold font-sans mb-3">Adres</h3>
                  <p className="text-muted-foreground font-serif text-lg leading-relaxed">
                    Atatürk Mahallesi, Fitness Sokak No:123
                    <br />
                    34000 İstanbul, Türkiye
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-6 group">
                <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <Phone className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold font-sans mb-3">Telefon</h3>
                  <p className="text-muted-foreground font-serif text-lg">+90 212 555 0123</p>
                </div>
              </div>

              <div className="flex items-start space-x-6 group">
                <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <Mail className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold font-sans mb-3">E-posta</h3>
                  <p className="text-muted-foreground font-serif text-lg">info@zenxgym.com</p>
                </div>
              </div>
            </div>

            <div className="pt-8 ">
             
              <div className=" flex space-x-6">
                <Button
                  size="icon"
                  variant="outline"
                  className="w-12 h-12 hover:bg-primary hover:text-primary-foreground bg-transparent border-2 hover:border-primary transition-all duration-300 hover:scale-110"
                  asChild
                >
                  <a href="https://www.instagram.com/zenx.gym/" target="_blank" rel="noopener noreferrer">
                    <Instagram className="h-6 w-6" />
                  </a>
                </Button>
                <Button
                  size="icon"
                  variant="outline"
                  className="w-12 h-12 hover:bg-primary hover:text-primary-foreground bg-transparent border-2 hover:border-primary transition-all duration-300 hover:scale-110"
                >
                  <Facebook className="h-6 w-6" />
                </Button>
                <Button
                  size="icon"
                  variant="outline"
                  className="w-12 h-12 hover:bg-primary hover:text-primary-foreground bg-transparent border-2 hover:border-primary transition-all duration-300 hover:scale-110"
                >
                  <X className="h-6 w-6" />
                </Button>
              </div>
            </div>
          </div>
          <SignupForm />
        </div>
      </div>
    </section>
  )
}


