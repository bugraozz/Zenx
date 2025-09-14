"use client"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="absolute top-0 w-full bg-transparent backdrop-blur-sm  z-50 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
            <Image
    src="/logo.png" // public klasörüne logo.png koyman lazım
    alt="Zenx Gym Logo"
    width={120}
    height={100}
    className="rounded-md"
  />

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink href="#home">Ana Sayfa</NavLink>
            <NavLink href="#about">Hakkımızda</NavLink>
            <NavLink href="#services">Hizmetler</NavLink>
            <NavLink href="/gallery">Galeri</NavLink>
            <NavLink href="#contact">İletişim</NavLink>
          </div>

          {/* Mobile Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-white focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-transparent backdrop-blur-xl  shadow-sm">
          <div className="px-4 py-4 space-y-4 flex flex-col items-start">
            <NavLink href="#home" onClick={() => setIsOpen(false)}>Ana Sayfa</NavLink>
            <NavLink href="#about" onClick={() => setIsOpen(false)}>Hakkımızda</NavLink>
            <NavLink href="#services" onClick={() => setIsOpen(false)}>Hizmetler</NavLink>
            <NavLink href="/gallery" onClick={() => setIsOpen(false)}>Galeri</NavLink>
            <NavLink href="#contact" onClick={() => setIsOpen(false)}>İletişim</NavLink>
          </div>
        </div>
      )}
    </nav>
  )
}

function NavLink({ href, children, onClick }: { href: string; children: React.ReactNode; onClick?: () => void }) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="text-white hover:text-white transition-all duration-300 font-medium relative group"
    >
      {children}
      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
    </Link>
  )
}




