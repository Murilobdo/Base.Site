

import { useMediaQuery } from "@/hooks/use-media-query"
import { HowItWorksMobile } from "./HotItWorksMobile"
import { HowItWorksDesktop } from "./HowItWorksDesktop"


export default function HowItWorks() {
  const isMobile = useMediaQuery('(max-width: 768px)')

  return (
    <div>
      <div className="row text-center text-2xl">
        <h2 className={`text-teal-600 font-bold text-center mb-12 text-3xl`}>Como Funciona ?</h2>
      </div>
      {isMobile ? <HowItWorksMobile /> : <HowItWorksDesktop />}
    </div >
  )
}
