import { Clock, DollarSign, Smile, TrendingUp } from "lucide-react"
import SpinningGearIcon from "../../Icons/SpinnerGearIcon"
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { useInView } from "react-intersection-observer"

const benefits = [
    {
        icon: <></>,
        title: <div className="flex justify-center items-center gap-4">
            <Clock className="h-12 w-12 text-blue-600" />Economia de Tempo e de Dinheiro <DollarSign className="h-12 w-12 text-green-600" />
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


export function BenefitsDesktop() {

    const containerRef = useRef(null)
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    })

    const opacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0])

    return (
        <section id="beneficios" className="bg-white py-20" ref={containerRef}>
            <motion.div style={{ opacity }} className="container mx-auto px-4">
                <div className="space-y-16">
                    {benefits.map((benefit, index) => (
                        <Benefit key={index} benefit={benefit} index={index} />
                    ))}
                </div>
            </motion.div>
        </section>
    )
}

function Benefit({ benefit, index }: { benefit: (typeof benefits)[0]; index: number }) {
    const [ref, inView] = useInView({
        triggerOnce: false,
        threshold: 0.1,
    })

    const isEven = index % 2 === 0

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, x: isEven ? -50 : 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: isEven ? -50 : 50 }}
            transition={{ duration: 0.5 }}
            className={`flex items-center min-h-[20vh] ${isEven ? "justify-start" : "justify-end"}`}
        >
            <div className={`w-1/2 p-8 bg-white rounded-lg shadow-lg ${isEven ? "mr-auto" : "ml-auto"}`}>
                <div className="flex items-center mb-4">
                    {benefit.icon}
                    <h3 className="text-2xl font-semibold ml-4">{benefit.title}</h3>
                </div>
                <p className="text-gray-600 text-lg">{benefit.description}</p>
            </div>
        </motion.div>
    )
}
