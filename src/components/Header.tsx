

import { Clock } from "lucide-react"
import { useMediaQuery } from "@/hooks/use-media-query"
import { useState } from "react";

export default function Header() {

  const isMobile = useMediaQuery('(max-width: 768px)')
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => setIsExpanded(prev => !prev);

  return (
    <header className="bg-white shadow-sm w-full z-10">
      {/* DESKTOP */}
      <div className={isMobile ? "hidden" : "block"}>
        <div className="container mx-auto px-4 py-4 flex justify-between items-center" >
          <div className="flex items-center space-x-2">
            <Clock className="h-8 w-8 text-teal-600" />
            <span className="text-xl font-bold text-gray-800">Controle de Ponto</span>
          </div>
          <nav >
            <ul className="flex space-x-4">
              <li>
                <a href="#recursos" className="text-gray-600 hover:text-teal-600 hover:border-b-2 hover:border-teal-600 hover:border-solid">
                  Recursos
                </a>
              </li>
              <li>
                <a href="#como-funciona" className="text-gray-600 hover:text-teal-600 hover:border-b-2 hover:border-teal-600 hover:border-solid">
                  Como Funciona
                </a>
              </li>
              <li>
                <a href="#beneficios" className="text-gray-600 hover:text-teal-600 hover:border-b-2 hover:border-teal-600 hover:border-solid">
                  Benefícios
                </a>
              </li>
            </ul>
          </nav>

          <nav className={isMobile ? "block mr-12" : "hidden"}>
            Menu
          </nav>


        </div>
      </div>

      {/* MOBILE */}
      <div className={isMobile ? "block" : "hidden"}>
        <div className="flex justify-between">
          <div className="flex gap-2 py-4 px-2">
            <Clock className="h-8 w-8 text-teal-600" />
            <span className="text-xl font-bold text-gray-800">Controle de Ponto</span>
          </div>

          <div className="py-4 px-2 flex flex-col">

            <button className="focus:outline-none" onClick={toggleExpand}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>

        </div>
        <div className={`mt-4 overflow-hidden ${isExpanded ? 'h-36 opacity-100' : 'h-0 opacity-0'} transition-all duration-500 ease-in-out`}>
          <div className="border-t-2 border-solid border-gray-500 h-full p-4 ">
            <ul className="flex space-x-4 flex-col justify-center items-center text-2xl gap-2">
              <li>
                <a href="#recursos" className="text-gray-600 hover:text-teal-600 hover:border-b-2 hover:border-teal-600 hover:border-solid">
                  Recursos
                </a>
              </li>
              <li>
                <a href="#como-funciona" className="text-gray-600 hover:text-teal-600 hover:border-b-2 hover:border-teal-600 hover:border-solid">
                  Como Funciona
                </a>
              </li>
              <li>
                <a href="#beneficios" className="text-gray-600 hover:text-teal-600 hover:border-b-2 hover:border-teal-600 hover:border-solid">
                  Benefícios
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header >
  )
}

