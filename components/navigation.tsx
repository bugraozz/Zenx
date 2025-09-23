
"use client"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full bg-black/25 backdrop-blur-md z-50 border-b border-white/10">
      
      {/* Logo tam sol kenarda */}
      <div className="absolute left-10 top-1/2 transform -translate-y-1/2 pl-4">
        <Image
          src="/logo.png"
          alt="Zenx Gym Logo"
          width={150}
          height={100}
          className="rounded-md invert"
        />
      </div>

      {/* Nav öğeleri container içinde, ortalı */}
      <div className="max-w-7xl mx-auto flex items-center justify-center h-20 space-x-6 text-lg">
        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-6">
          <NavLink href="/#home">Ana Sayfa</NavLink>
          <NavLink href="/#about">Hakkımızda</NavLink>
          <NavLink href="/#services">Hizmetler</NavLink>
          <NavLink href="/gallery">Galeri</NavLink>
          <NavLink href="/#contact">İletişim</NavLink>
        </div>

        {/* Mobile Button */}
        <div className="md:hidden absolute right-10 top-1/2 transform -translate-y-1/2">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white hover:text-white focus:outline-none"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      
{isOpen && (
  <div className="md:hidden absolute top-full left-0 w-full bg-black/40  border-t border-white/10 z-40">
    <div className="px-4 py-6 flex flex-col space-y-4 items-end">
      <NavLink href="/#home" onClick={() => setIsOpen(false)}>Ana Sayfa</NavLink>
      <NavLink href="/#about" onClick={() => setIsOpen(false)}>Hakkımızda</NavLink>
      <NavLink href="/#services" onClick={() => setIsOpen(false)}>Hizmetler</NavLink>
      <NavLink href="/gallery" onClick={() => setIsOpen(false)}>Galeri</NavLink>
      <NavLink href="/#contact" onClick={() => setIsOpen(false)}>İletişim</NavLink>
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

      
      if (targetId === 'home') {
        window.scrollTo({ top: 0, behavior: 'smooth' })
      } else {
        const targetElement = document.getElementById(targetId)
        if (targetElement) {
          const navbarHeight = 80
          const offsetPosition = targetElement.offsetTop - navbarHeight
          window.scrollTo({ top: offsetPosition, behavior: 'smooth' })
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
