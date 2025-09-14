


import Image from "next/image"


export function Footer() {
  return (
    <footer className="relative bg-zinc-10 text-black overflow-hidden">
     
   
     
      <div className="relative z-10 py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-6">
            <Image
              src="/logo.png"
              alt="ZENX GYM Logo"
              width={120}
              height={40}
              className="h-10 w-auto"
            />
            <p className="text-sm font-serif text-primary-foreground/80 leading-relaxed">
              Modern fitness anlayışı ile güçlü yaşamın başladığı yer.
            </p>
          </div>

          <div>
            <h4 className="font-semibold font-sans mb-6 text-lg">Hızlı Linkler</h4>
            <ul className="space-y-3 text-sm font-serif">
              <li><a href="#home" className="hover:text-accent transition-colors duration-300">Ana Sayfa</a></li>
              <li><a href="#about" className="hover:text-accent transition-colors duration-300">Hakkımızda</a></li>
              <li><a href="#services" className="hover:text-accent transition-colors duration-300">Hizmetler</a></li>
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

        <div className="relative mt-10 pt-12 text-center">
  {/* Gradient çizgiler */}
  <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
  <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
  <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
  <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

  {/* Yazı */}
  <p className="text-sm font-sans-serif text-black">
    © 2024 ZENX GYM Life Club. Tüm hakları saklıdır.
  </p>
</div>

      </div>
    </footer>
  )
}
