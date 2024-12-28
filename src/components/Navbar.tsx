import { useState } from 'react'
import { ChevronDown, Menu, X } from 'lucide-react'

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
            <svg height="32" aria-hidden="true" fill="currentColor" viewBox="0 0 16 16" className="text-white">
              <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"></path>
            </svg>
            <div className="hidden md:flex items-center gap-4">
              <NavItem text="Product" hasDropdown />
              <NavItem text="Solutions" hasDropdown />
              <NavItem text="Resources" hasDropdown />
              <NavItem text="Open Source" hasDropdown />
              <NavItem text="Pricing" />
            </div>
          </div>

          {/* Search and Right Nav Items */}
          <div className="hidden md:flex items-center gap-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search GitHub"
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

