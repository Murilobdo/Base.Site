

import { useMediaQuery } from "@mui/material"
import { BenefitsMobile } from "./BenefitsMobile"
import { BenefitsDesktop } from "./BenefitsDesktop"




export default function Benefits() {
  const isMobile = useMediaQuery('(max-width: 768px)')

  return (
    <div>
      <div className="row text-center text-2xl mt-12">
        <h2 className={`text-teal-600 font-bold text-center mb-12 ${isMobile ? "text-2xl" : "text-3xl "}`}>Benefícios do Controle {isMobile && <br></br>} de Ponto</h2>
      </div>
      {isMobile ? <BenefitsMobile /> : <BenefitsDesktop />}
    </div >
  )
}

