

import { Clock, DollarSign, Smile, TrendingUp } from "lucide-react"
import SpinningGearIcon from "../../Icons/SpinnerGearIcon"
import { useRef } from "react";
import { motion, UseInViewOptions, useTransform, useInView } from "framer-motion";


const benefits = [
    {
        icon: <></>,
        title: <div className="flex justify-center items-center gap-4">
            <Clock className="h-12 w-12 text-blue-600" />
            <label className="text-md text-center">Economia de Tempo e de Dinheiro </label>
            <DollarSign className="h-12 w-12 text-green-600" />
        </div>,
        description:
            <p className="indent-8">Automatize processos, eliminando tarefas manuais e planilhas, para que sua equipe foque no que importa. Reduza custos, evite erros e fraudes no controle de ponto, e otimize a gestão de recursos humanos com mais eficiência.</p>,
    },
    {
        icon: <></>,
        title: <div className="flex items-center gap-4">
            <SpinningGearIcon size={48} color="#0d9488" speed="slow" />
            <label>Personalização e Flexibilidade</label>
        </div>,
        description:
            <div>
                <p className="indent-8">Adapte o sistema de ponto às necessidades da sua empresa, com regras de jornada flexíveis e personalizadas como por exemplo dizer se o usuario exige reconhecimento facial ou não em certos dias da semana.</p>
                <p className="indent-8 mt-2">Atenda às demandas de diferentes perfis de colaboradores, como equipes remotas, externas e em regime de home office.</p>
            </div>,
    },

    {
        icon: <Smile className="h-12 w-12 text-yellow-600" />,
        title: "Satisfação dos Funcionários",
        description:
            <p className="indent-8">Ofereça um sistema moderno e fácil de usar, melhorando a experiência dos colaboradores. Aumente a transparência e a confiança entre empresa e funcionários com registros precisos e acessíveis.</p>,
    },
    {
        icon: <TrendingUp className="h-12 w-12 text-purple-600" />,
        title: "Aumento da Produtividade",
        description:
            <p className="indent-8">Obtenha insights valiosos sobre a jornada de trabalho, identificando padrões e oportunidades de melhoria. Use dados precisos para otimizar processos e aumentar a eficiência operacional da sua empresa.</p>,
    },
]



export function BenefitsMobile() {
    const containerRef = useRef(null)

    // Variantes para animação
    const cardVariantLeft = {
        hidden: { x: "-100%", opacity: 0 },
        visible: { x: 0, opacity: 1 },
    };

    const cardVariantRight = {
        hidden: { x: "100%", opacity: 0 },
        visible: { x: 0, opacity: 1 },
    };

    // Ref para rastrear se os elementos estão visíveis na viewport
    const ref1 = useRef<HTMLDivElement | null>(null);
    const ref2 = useRef<HTMLDivElement | null>(null);
    const ref3 = useRef<HTMLDivElement | null>(null);
    const ref4 = useRef<HTMLDivElement | null>(null);

    const isInView1 = useInView(ref1, { triggerOnce: false, amount: 0.3, once: false } as UseInViewOptions);
    const isInView2 = useInView(ref2, { triggerOnce: false, amount: 0.3 } as UseInViewOptions);
    const isInView3 = useInView(ref3, { triggerOnce: false, amount: 0.3 } as UseInViewOptions);
    const isInView4 = useInView(ref3, { triggerOnce: false, amount: 0.3 } as UseInViewOptions);


    return (
        <>
            <div
                id="first-line"
                ref={ref1}
                className="flex flex-col w-full max-w-4xl justify-between items-center"
                style={{ overflow: 'hidden' }}
            >
                {/* CARD TEXT */}
                <motion.div
                    initial="hidden"
                    animate={isInView1 ? "visible" : "hidden"}
                    variants={cardVariantRight}
                    transition={{ duration: 1.5, delay: 0.2 }}
                    style={{ clipPath: 'inset(0 0 0 0)' }}
                >
                    <div className={`p-8 px-4 bg-white rounded-lg shadow-lg mx-8`}>
                        <div className="flex items-center justify-between mb-4">
                            {benefits[0].icon}
                            <h3 className="text-xl font-semibold">{benefits[0].title}</h3>
                        </div>
                        <p className="text-gray-600 text-lg">{benefits[0].description}</p>
                    </div>
                </motion.div>
            </div>
            <div
                id="first-line"
                ref={ref2}
                className="flex flex-col w-full max-w-4xl justify-between items-center"
                style={{ overflow: 'hidden' }}
            >
                {/* CARD TEXT */}
                <motion.div
                    initial="hidden"
                    animate={isInView2 ? "visible" : "hidden"}
                    variants={cardVariantLeft}
                    transition={{ duration: 1.5, delay: 0.2 }}
                    style={{ clipPath: 'inset(0 0 0 0)' }}
                >
                    <div className={`p-8 px-4 bg-white rounded-lg shadow-lg mx-8 mt-8`}>
                        <div className="flex items-center mb-4">
                            {benefits[1].icon}
                            <h3 className="text-xl font-semibold ml-4">{benefits[1].title}</h3>
                        </div>
                        <p className="text-gray-600 text-lg">{benefits[1].description}</p>
                    </div>
                </motion.div>

                <div
                    id="first-line"
                    ref={ref3}
                    style={{ overflow: 'hidden' }}
                    className="flex flex-col w-full max-w-4xl justify-between items-center"
                >
                    {/* CARD TEXT */}
                    <motion.div
                        initial="hidden"
                        animate={isInView3 ? "visible" : "hidden"}
                        variants={cardVariantRight}
                        transition={{ duration: 1.5, delay: 0.2 }}
                        style={{ clipPath: 'inset(0 0 0 0)' }}
                    >
                        <div className={`p-8 px-4 bg-white rounded-lg shadow-lg mx-8 mt-8`}>
                            <div className="flex items-center mb-4">
                                {benefits[2].icon}
                                <h3 className="text-xl font-semibold ml-4">{benefits[2].title}</h3>
                            </div>
                            <p className="text-gray-600 text-lg">{benefits[2].description}</p>
                        </div>
                    </motion.div>
                </div>

                <div
                    id="first-line"
                    ref={ref4}
                    className="flex flex-col w-full max-w-4xl justify-between items-center mb-8"
                    style={{ overflow: 'hidden' }}
                >
                    {/* CARD TEXT */}
                    <motion.div
                        initial="hidden"
                        animate={isInView4 ? "visible" : "hidden"}
                        variants={cardVariantLeft}
                        transition={{ duration: 1.5, delay: 0.2 }}
                        style={{ clipPath: 'inset(0 0 0 0)' }}
                    >
                        <div className={`p-8 px-4 bg-white rounded-lg shadow-lg mx-8 mt-8`}>
                            <div className="flex items-center mb-4">
                                {benefits[3].icon}
                                <h3 className="text-xl font-semibold ml-4">{benefits[3].title}</h3>
                            </div>
                            <p className="text-gray-600 text-lg">{benefits[3].description}</p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </>
    )
}
