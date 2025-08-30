import { Badge } from "@/components/ui/badge"
import { Dumbbell, Users, Star, CheckCircle } from "lucide-react"

export function ServicesSection() {
  return (
    <section id="services" className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-6 mb-16">
          <Badge variant="secondary" className="text-black-600 font-semibold px-6 py-3 bg-primary/10 border-primary/20">
            Hizmetlerimiz
          </Badge>
          <h2 className="text-4xl lg:text-6xl font-bold font-sans text-black-400 bg-black bg-clip-text text-transparent">
            Size Özel Çözümler
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-8">
              <div className="flex items-start space-x-6 group">
                <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <Dumbbell className="h-8 w-8 text-primary" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-semibold font-sans">Kişisel Antrenman</h3>
                  <p className="text-muted-foreground font-serif text-lg leading-relaxed">
                    Birebir antrenman seansları ile hedeflerinize hızla ulaşın.
                  </p>
                  <div className="flex items-center space-x-2 text-primary">
                    <CheckCircle className="h-4 w-4" />
                    <span className="text-sm font-medium">Kişiselleştirilmiş program</span>
                  </div>
                </div>
              </div>

              <div className="flex items-start space-x-6 group">
                <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-semibold font-sans">Grup Dersleri</h3>
                  <p className="text-muted-foreground font-serif text-lg leading-relaxed">
                    Yoga, Pilates, CrossFit ve daha fazlası için grup derslerimize katılın.
                  </p>
                  <div className="flex items-center space-x-2 text-primary">
                    <CheckCircle className="h-4 w-4" />
                    <span className="text-sm font-medium">15+ farklı ders türü</span>
                  </div>
                </div>
              </div>

              <div className="flex items-start space-x-6 group">
                <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <Star className="h-8 w-8 text-primary" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-semibold font-sans">Beslenme Danışmanlığı</h3>
                  <p className="text-muted-foreground font-serif text-lg leading-relaxed">
                    Uzman diyetisyenlerimizden kişisel beslenme planı alın.
                  </p>
                  <div className="flex items-center space-x-2 text-primary">
                    <CheckCircle className="h-4 w-4" />
                    <span className="text-sm font-medium">Kişiye özel diyet planı</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10 group">
              <img
                src="/people-exercising-fitness-gym.jpg"
                alt="Grup Dersleri"
                className="rounded-2xl shadow-2xl group-hover:shadow-3xl transition-all duration-500 transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
            <div className="absolute -top-4 -left-4 w-full h-full bg-gradient-to-br from-primary/30 to-primary/20 rounded-2xl -z-10 blur-sm"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
