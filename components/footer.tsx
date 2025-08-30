import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-gradient-to-r from-primary to-primary/50 text-primary-foreground py-16 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-6">
            <Image
              src="/logo.png"
              alt="ZENX GYM Logo"
              width={120}
              height={40}
              className="h-10 w-auto  "
            />
            <p className="text-sm font-serif text-primary-foreground/80 leading-relaxed">
              Modern fitness anlayışı ile güçlü yaşamın başladığı yer.
            </p>
          </div>

          <div>
            <h4 className="font-semibold font-sans mb-6 text-lg">Hızlı Linkler</h4>
            <ul className="space-y-3 text-sm font-serif">
              <li>
                <a href="#home" className="hover:text-accent transition-colors duration-300">
                  Ana Sayfa
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-accent transition-colors duration-300">
                  Hakkımızda
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-accent transition-colors duration-300">
                  Hizmetler
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold font-sans mb-6 text-lg">Hizmetler</h4>
            <ul className="space-y-3 text-sm font-serif">
              <li>Kişisel Antrenman</li>
              <li>Grup Dersleri</li>
              <li>Beslenme Danışmanlığı</li>
              <li>Masaj Hizmeti</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold font-sans mb-6 text-lg">Çalışma Saatleri</h4>
            <ul className="space-y-3 text-sm font-serif">
              <li>Pazartesi - Cuma: 06:00 - 24:00</li>
              <li>Cumartesi: 07:00 - 23:00</li>
              <li>Pazar: 08:00 - 22:00</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-12 pt-8 text-center">
          <p className="text-sm font-serif text-primary-foreground/80">
            © 2024 ZENX GYM Life Club. Tüm hakları saklıdır.
          </p>
        </div>
      </div>
    </footer>
  )
}
