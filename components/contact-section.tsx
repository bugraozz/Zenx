import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Phone, Mail, Instagram, Facebook, Twitter, X } from "lucide-react"

export function ContactSection() {
  return (
    <section id="contact" className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-6 mb-16">
          <Badge variant="secondary" className="text-primary font-semibold px-6 py-3 bg-primary/10 border-primary/20">
            İletişim
          </Badge>
          <h2 className="text-4xl lg:text-6xl font-bold font-sans text-primary bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
            Bize Ulaşın
          </h2>
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

            <div className="pt-8">
              <h3 className="text-2xl font-semibold font-sans mb-6">Sosyal Medya</h3>
              <div className="flex space-x-4">
                <Button
                  size="icon"
                  variant="outline"
                  className="w-12 h-12 hover:bg-primary hover:text-primary-foreground bg-transparent border-2 hover:border-primary transition-all duration-300 hover:scale-110"
                >
                  <Instagram className="h-6 w-6" />
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

          <Card className="border-0 shadow-2xl bg-card/90 backdrop-blur-sm">
            <CardHeader className="pb-6">
              <CardTitle className="text-3xl font-sans">Mesaj Gönder</CardTitle>
              <CardDescription className="font-serif text-lg">
                Sorularınız için bize mesaj gönderin, en kısa sürede dönüş yapalım.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="text-sm font-medium font-sans mb-2 block">Ad</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-input border-2 border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300"
                    placeholder="Adınız"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium font-sans mb-2 block">Soyad</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-input border-2 border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300"
                    placeholder="Soyadınız"
                  />
                </div>
              </div>
              <div>
                <label className="text-sm font-medium font-sans mb-2 block">E-posta</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 bg-input border-2 border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300"
                  placeholder="E-posta adresiniz"
                />
              </div>
              <div>
                <label className="text-sm font-medium font-sans mb-2 block">Mesaj</label>
                <textarea
                  rows={5}
                  className="w-full px-4 py-3 bg-input border-2 border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary resize-none transition-all duration-300"
                  placeholder="Mesajınızı yazın..."
                ></textarea>
              </div>
              <Button className="w-full bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-primary-foreground font-semibold py-3 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                Mesaj Gönder
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
