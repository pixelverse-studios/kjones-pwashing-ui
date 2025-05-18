import Image from 'next/image'
import Link from 'next/link'
import { FaInstagram, FaFacebook } from 'react-icons/fa6'

import CtaModal from './cta/CtaModal'

const Footer = () => {
  return (
    <footer className="page bg-secondary text-white">
      <div className="max-w-custom mx-auto py-4">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
          <div>
            <Link href="/">
              <Image
                src="/logo-gray.png"
                alt="Jones Pressure Washing Logo"
                width={150}
                height={75}
                className="h-auto w-[20rem] p-4 mx-auto sm:mx-0"
              />
            </Link>
            <p className="text-white text-sm mt-4">
              Proudly serving Bergen & Essex County with reliable, detail-driven
              exterior cleaning.
            </p>
          </div>
          <div>
            <h3 className="">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-white hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-white hover:text-primary transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-white hover:text-primary transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/gallery"
                  className="text-white hover:text-primary transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link
                  href="/faqs"
                  className="text-white hover:text-primary transition-colors">
                  FAQs
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col align-start md:align-end md:text-right">
            <h3 className="">Contact Us</h3>
            <div className="flex items-center md:justify-end gap-2 mb-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-primary"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              <a
                href="tel:(555) 555-1234"
                className="text-white hover:text-primary transition-colors">
                (555) 555-1234
              </a>
            </div>
            <div className="flex items-center md:justify-end gap-2 mb-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-primary"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <a
                href="mailto:contact@jonespwash.com"
                className="text-white hover:text-primary transition-colors">
                contact@jonespwash.com
              </a>
            </div>
            <div>
              <h4 className="">Follow Us</h4>
              <div className="flex gap-3 md:justify-end mb-4">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-secondary p-2 rounded-full border border-primary hover:bg-primary transition-colors group">
                  <FaInstagram
                    size={18}
                    className="text-white group-hover:text-black"
                  />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-secondary p-2 rounded-full border border-primary hover:bg-primary transition-colors group">
                  <FaFacebook
                    size={18}
                    className="text-white group-hover:text-black"
                  />
                </a>
              </div>
              <CtaModal variant="default" label="Request a Quote" />
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="py-4 px-8 md:px-16 lg:px-24 border-t border-white/10 text-center">
        <div className="flex justify-between items-center">
          <p className="text-white/60 text-xs">
            © {new Date().getFullYear()} Jones Pressure Washing. All rights
            reserved. |{' '}
            <Link href="/privacy" className="hover:text-primary">
              Privacy Policy
            </Link>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
