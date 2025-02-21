import { Clock } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <Clock className="h-6 w-6" />
            <span className="text-lg font-bold">Softwares Elitegate</span>
          </div>
        </div>
        <div className="mt-8 text-center text-sm text-gray-400">© 2025 EliteTimeGate IA. Todos os direitos reservados.</div>
      </div>
    </footer>
  )
}

