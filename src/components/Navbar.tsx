import { useState } from 'react'
import { ChevronDown, Menu, X } from 'lucide-react'
import logo from "../assets/logo.png"

interface NavItemProps {
  text: string
  hasDropdown?: boolean
}

const NavItem = ({ text, hasDropdown = false }: NavItemProps) => (
  <div className="flex items-center gap-1 cursor-pointer text-white/70 hover:text-white">
    <span className="text-sm">{text}</span>
    {hasDropdown && <ChevronDown className="w-4 h-4" />}
  </div>
)

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Left Nav Items */}
          <div className="flex items-center gap-4">
            <img
              src={logo} // Replace with your image URL or path
              alt="Your Logo"
              width={50}
              height={50}
              className="rounded-full" // Add this if you want a circular image
            />
            <div className="hidden md:flex items-center gap-4">
              <NavItem text="About Me" hasDropdown />
              <NavItem text="Projects" hasDropdown />
              <NavItem text="Research" hasDropdown />
              <NavItem text="Open Source" hasDropdown />
              <NavItem text="Contact" />
            </div>
          </div>

          {/* Search and Right Nav Items */}
          <div className="hidden md:flex items-center gap-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search here..."
                className="w-64 px-3 py-1.5 bg-white/10 rounded-md text-sm text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/20"
              />
            </div>
            <button className="text-white/70 hover:text-white text-sm">Sign in</button>
            <button className="px-3 py-1.5 text-sm border border-white/30 rounded-md text-white hover:border-white/50">
              Sign up
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white/70 hover:text-white"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#0d1117] border-t border-white/10">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <NavItem text="Product" hasDropdown />
            <NavItem text="Solutions" hasDropdown />
            <NavItem text="Resources" hasDropdown />
            <NavItem text="Open Source" hasDropdown />
            <NavItem text="Pricing" />
            <div className="pt-4">
              <button className="w-full px-3 py-2 text-sm text-white/70 hover:text-white">
                Sign in
              </button>
              <button className="mt-2 w-full px-3 py-2 text-sm border border-white/30 rounded-md text-white hover:border-white/50">
                Sign up
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

