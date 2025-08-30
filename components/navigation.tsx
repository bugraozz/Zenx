"use client"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-xl border-b border-border/50 z-50 shadow-lg">
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
              className="text-gray-800 hover:text-primary focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-xl border-t border-border/50 shadow-lg">
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
      className="text-foreground hover:text-primary transition-all duration-300 font-medium relative group"
    >
      {children}
      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
    </Link>
  )
}
