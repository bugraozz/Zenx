"use client"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full bg-black/25 backdrop-blur-md z-50 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Image
            src="/logo.png"
            alt="Zenx Gym Logo"
            width={200}
            height={150}
            className="rounded-md invert"
          />

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8 text-lg">
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
        <div className="md:hidden bg-black/30 backdrop-blur-xl border-t border-white/10">
          <div className="px-4 py-6 space-y-4 flex flex-col items-start">
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
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (href.startsWith('#')) {
      e.preventDefault()
      const targetId = href.substring(1)
      
      // Handle home navigation - scroll to top
      if (targetId === 'home') {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        })
      } else {
        // Handle other section navigation
        const targetElement = document.getElementById(targetId)
        
        if (targetElement) {
          const navbarHeight = 80
          const offsetPosition = targetElement.offsetTop - navbarHeight
          
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          })
        }
      }
    }

    onClick?.()
  }

  return (
    <Link
      href={href}
      onClick={handleClick}
      className="text-white hover:text-white transition-all duration-300 font-medium relative group"
    >
      {children}
      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
    </Link>
  )
}



