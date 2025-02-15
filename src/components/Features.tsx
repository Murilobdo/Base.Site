

import { useMediaQuery } from "@/hooks/use-media-query"
import { Brain, MapPin, Shield } from "lucide-react"

const features = [
  {
    icon: <Brain className="h-8 w-8 text-teal-600" />,
    title: "Inteligência Artificial",
    description: "Validação avançada de registros usando IA",
  },
  {
    icon: <MapPin className="h-8 w-8 text-teal-600" />,
    title: "Geolocalização",
    description: "Confirme a localização do funcionário conforme a localização da empresa",
  },
  {
    icon: <Shield className="h-8 w-8 text-teal-600" />,
    title: "Segurança",
    description: "Dados criptografados e conformidade com LGPD",
  },
]

export default function Features() {
  const isMobile = useMediaQuery('(max-width: 768px)');

  return (
    <section id="recursos" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className={`text-teal-600 font-bold text-center mb-12 text-3xl`}>Recursos Principais</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center p-6 bg-white rounded-lg shadow-md transition-all duration-300 ease-in-out hover:shadow-xl hover:-translate-y-2"
            >
              <div className="flex justify-center mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

