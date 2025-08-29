import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Dumbbell, Users, Clock } from "lucide-react"

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-muted/20 to-muted/40 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-6 mb-16">
          <Badge variant="secondary" className="text-primary font-semibold px-6 py-3 bg-primary/10 border-primary/20">
            Hakkımızda
          </Badge>
          <h2 className="text-4xl lg:text-6xl font-bold font-sans text-primary bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
            Neden ZENX GYM?
          </h2>
          <p className="text-xl text-muted-foreground font-serif max-w-3xl mx-auto leading-relaxed">
            Modern fitness anlayışı ile geleneksel değerleri harmanlayarak, her seviyeden sporcuya uygun ortam
            sunuyoruz.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 bg-card/80 backdrop-blur-sm group hover:scale-105">
            <CardHeader className="text-center pb-4">
              <div className="w-20 h-20 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Dumbbell className="h-10 w-10 text-primary" />
              </div>
              <CardTitle className="text-2xl font-sans">Modern Ekipmanlar</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-center font-serif text-base leading-relaxed">
                Son teknoloji fitness ekipmanları ile güvenli ve etkili antrenman deneyimi yaşayın.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 bg-card/80 backdrop-blur-sm group hover:scale-105">
            <CardHeader className="text-center pb-4">
              <div className="w-20 h-20 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Users className="h-10 w-10 text-primary" />
              </div>
              <CardTitle className="text-2xl font-sans">Uzman Antrenörler</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-center font-serif text-base leading-relaxed">
                Sertifikalı ve deneyimli antrenörlerimiz ile kişisel hedeflerinize odaklanın.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 bg-card/80 backdrop-blur-sm group hover:scale-105">
            <CardHeader className="text-center pb-4">
              <div className="w-20 h-20 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Clock className="h-10 w-10 text-primary" />
              </div>
              <CardTitle className="text-2xl font-sans">Esnek Saatler</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-center font-serif text-base leading-relaxed">
                06:00-24:00 arası açık olan salonumuzda size uygun saatte antrenman yapın.
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
