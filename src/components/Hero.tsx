import { Button } from "@/components/ui/button"
import Personas from "./Personas"

export default function Hero() {
  return (
    <section className="bg-teal-600 text-white py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Controle de Ponto Inteligente</h1>
            <p className="text-xl mb-8">Precisão e confiabilidade com IA e geolocalização</p>

            <Button className="bg-white text-teal-600 hover:bg-teal-100" >
              <a href="#contact-form">
                Comece agora
              </a>
            </Button>

          </div>
          <div className="w-5/6  md:w-1/2">
            <Personas />
          </div>
        </div>
      </div>
    </section >
  )
}

