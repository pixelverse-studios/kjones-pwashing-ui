'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import { Menu } from 'lucide-react'
import { useState } from 'react'

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuLink,
  NavigationMenuContent,
  NavigationMenuTrigger
} from '@/components/ui/navigation-menu'
import { Sheet, SheetTrigger, SheetContent } from '@/components/ui/sheet'
import CtaModal from './cta/CtaModal'
import { DialogTitle } from './ui/dialog'

const navLinks = [
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'FAQs', href: '/faqs' }
]

const Navbar = () => {
  const pathname = usePathname()

  const [open, setOpen] = useState(false)

  return (
    <header className="bg-nav text-white w-full font-inter z-50 fixed top-0">
      <div className="flex items-center justify-between side-padding max-w-custom mx-auto py-4 px-6">
        <Link href="/" className="flex items-center">
          <Image
            src="/logo-gray.png"
            alt="Jones Pressure Washing"
            width={120}
            height={60}
            className="h-auto w-auto"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <NavigationMenu>
            <NavigationMenuList className="flex gap-6">
              {navLinks.map(link => {
                if (link.label === 'Services') {
                  return (
                    <NavigationMenuItem key={link.label}>
                      <NavigationMenuTrigger
                        className={`text-md transition-all duration-200 ease-in-out hover:text-primary p-3 rounded-md bg-transparent hover:bg-accent font-normal ${pathname.includes('/services') ? 'text-primary' : 'text-white'}`}>
                        Services
                      </NavigationMenuTrigger>
                      <NavigationMenuContent className="bg-secondary-black text-white rounded-lg mt-2 p-2 pb-4  min-w-[200px] shadow-md">
                        <ul className="flex flex-col gap-2">
                          <li>
                            <Link
                              href="/services/pressure-washing"
                              className={`block px-4 py-2 rounded-md hover:bg-white hover:text-primary transition-all duration-200 ease-in-out ${pathname === '/services/pressure-washing' ? 'text-primary' : 'text-white'}`}>
                              Pressure Washing
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/services/soft-washing"
                              className={`block px-4 py-2 rounded-md hover:bg-white hover:text-primary transition-all duration-200 ease-in-out ${
                                pathname === '/services/soft-washing'
                                  ? 'text-primary'
                                  : 'text-white'
                              }`}>
                              Soft Washing
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/services/additional"
                              className={`block px-4 py-2 rounded-md hover:bg-white hover:text-primary transition-all duration-200 ease-in-out ${
                                pathname === '/services/additional'
                                  ? 'text-primary'
                                  : 'text-white'
                              }`}>
                              Additional Services
                            </Link>
                          </li>
                        </ul>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                  )
                }

                return (
                  <NavigationMenuItem key={link.href}>
                    <Link href={link.href} legacyBehavior passHref>
                      <NavigationMenuLink
                        className={`transition-all duration-200 ease-in-out hover:bg-accent hover:text-primary p-3 rounded-md ${pathname === link.href ? 'text-primary' : 'text-white'}`}>
                        {link.label}
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                )
              })}
            </NavigationMenuList>
          </NavigationMenu>
          <CtaModal
            label="Get a Quote"
            variant="default"
            buttonClass="rounded-full"
          />
        </nav>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger className="text-white">
              <Menu size={28} />
            </SheetTrigger>
            <SheetContent
              side="right"
              className="bg-black text-white p-6 w-full">
              <div className="flex flex-col gap-6">
                <DialogTitle>
                  <Link
                    href="/"
                    onClick={() => setOpen(false)}
                    className="flex items-center">
                    <Image
                      src="/logo-gray.png"
                      alt="Jones Pressure Washing"
                      width={120}
                      height={60}
                      className="h-auto w-auto"
                      priority
                    />
                  </Link>
                </DialogTitle>
                {navLinks.map(link => {
                  if (link.label === 'Services') {
                    return (
                      <div className="space-y-2" key="mobile-service-item">
                        <span
                          className={`${pathname.includes('/services') ? 'text-primary' : 'text-white'} font-inter text-lg transition-all`}>
                          Services
                        </span>
                        <div className="flex flex-col gap-3 ml-2">
                          <Link
                            href="/services/pressure-washing"
                            onClick={() => setOpen(false)}
                            className={`hover:text-primary font-inter text-lg transition-all ${pathname === '/services/pressure-washing' ? 'text-primary' : 'text-white'}`}>
                            Pressure Washing
                          </Link>
                          <Link
                            href="/services/soft-washing"
                            onClick={() => setOpen(false)}
                            className={`hover:text-primary font-inter text-lg transition-all ${pathname === '/services/soft-washing' ? 'text-primary' : 'text-white'}`}>
                            Soft Washing
                          </Link>
                          <Link
                            href="/services/additional"
                            onClick={() => setOpen(false)}
                            className={`hover:text-primary font-inter text-lg transition-all ${pathname === '/services/additional' ? 'text-primary' : 'text-white'}`}>
                            Additional Services
                          </Link>
                        </div>
                      </div>
                    )
                  }
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className={`${pathname === link.href ? 'text-primary' : 'text-white'} hover:text-primary font-inter text-lg transition-all`}>
                      {link.label}
                    </Link>
                  )
                })}
                <CtaModal
                  label="Get a Quote"
                  variant="default"
                  buttonClass="rounded-full"
                />
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}

export default Navbar
