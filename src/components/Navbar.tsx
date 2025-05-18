'use client'

import Link from 'next/link'
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

const navLinks = [
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'FAQs', href: '/faqs' }
]

const Navbar = () => {
  const [open, setOpen] = useState(false)

  return (
    <header className="bg-transparent text-white w-full font-inter z-50 fixed top-0">
      <div className="bg-nav flex items-center justify-between side-padding">
        <Link href="/" className="flex items-center">
          <Image
            src="/logo-gray.png"
            alt="Jones Pressure Washing"
            width={120}
            height={60}
            className="h-auto w-auto p-4"
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
                      <NavigationMenuTrigger className="transition-all duration-200 ease-in-out text-white hover:text-primary px-2 py-1 rounded-md bg-transparent hover:bg-white/10 focus:bg-white/10 font-normal">
                        Services
                      </NavigationMenuTrigger>
                      <NavigationMenuContent className="bg-secondary-black text-white rounded-lg mt-2 p-2 min-w-[200px] shadow-md border border-white/10">
                        <ul className="flex flex-col gap-2">
                          <li>
                            <Link
                              href="/services/pressure-washing"
                              className="block px-4 py-2 rounded-md hover:bg-white/10 transition-all duration-200 ease-in-out">
                              Pressure Washing
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/services/soft-washing"
                              className="block px-4 py-2 rounded-md hover:bg-white/10 transition-all duration-200 ease-in-out">
                              Soft Washing
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
                      <NavigationMenuLink className="transition-all duration-200 ease-in-out text-white hover:text-primary px-2 py-1 rounded-md">
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
              className="bg-black text-white p-6 w-[260px]">
              <div className="flex flex-col gap-6 mt-10">
                {navLinks.map(link => {
                  if (link.label === 'Services') {
                    return (
                      <div className="mt-4 space-y-2" key="mobile-service-item">
                        <Link
                          href="/services"
                          onClick={() => setOpen(false)}
                          className="text-white hover:text-primary font-inter text-lg transition-all">
                          Services
                        </Link>
                        <div className="flex flex-col gap-3 ml-2">
                          <Link
                            href="/services/pressure-washing"
                            onClick={() => setOpen(false)}
                            className="text-white hover:text-primary font-inter text-lg transition-all">
                            Pressure Washing
                          </Link>
                          <Link
                            href="/services/soft-washing"
                            onClick={() => setOpen(false)}
                            className="text-white hover:text-primary font-inter text-lg transition-all">
                            Soft Washing
                          </Link>
                          <Link
                            href="/services/additional"
                            onClick={() => setOpen(false)}
                            className="text-white hover:text-primary font-inter text-lg transition-all">
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
                      className="text-white hover:text-primary font-inter text-lg transition-all">
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
