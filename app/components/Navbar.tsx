'use client'
import Image from 'next/image'
import { useState } from 'react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="border-gray-700 bg-gray-800 fixed w-full shadow">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <Image
            src="/logo-henrich-esquadrias.jpg"
            className=""
            width={42}
            height={42}
            alt="Henrich Esquadrias Logo"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
            Henrich Esquadrias
          </span>
        </a>
        <button
          onClick={() => setIsOpen(!isOpen)}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-400 rounded-lg md:hidden hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded={isOpen}>
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14">
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div
          className={`${
            isOpen ? 'block transition-all duration-300' : 'hidden'
          } w-full md:block md:w-auto`}
          id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-700 rounded-lg bg-gray-900 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-gray-800">
            <li>
              <a
                href="#sobre"
                onClick={() => setIsOpen(false)} // Fecha o menu ao clicar
                className="block py-2 px-3 text-white rounded hover:bg-gray-700">
                Sobre nós
              </a>
            </li>
            <li>
              <a
                href="#servicos"
                onClick={() => setIsOpen(false)}
                className="block py-2 px-3 text-white rounded hover:bg-gray-700">
                Serviços
              </a>
            </li>
            <li>
              <a
                href="#quemsomos"
                onClick={() => setIsOpen(false)}
                className="block py-2 px-3 text-white rounded hover:bg-gray-700">
                Quem somos
              </a>
            </li>
            <li>
              <a
                href="#contatos"
                onClick={() => setIsOpen(false)}
                className="block py-2 px-3 text-white rounded hover:bg-gray-700">
                Contatos
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
