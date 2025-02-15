import { motion, useInView, UseInViewOptions } from "framer-motion";
import { DashboardWithPerson } from "../../Icons/DashboardWithPerson";
import { useRef } from "react";
import { BarChart, Check, Smartphone } from "lucide-react";
import { FcAndroidOs } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { PersonBehindPhone } from "../../Icons/PersonBehindPhone";
import { CloudInfraWithPerson } from "../../Icons/CloudInfraWithPerson";

export function HowItWorksMobile() {
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

    const isInView1 = useInView(ref1, { triggerOnce: false, amount: 0.3, once: false } as UseInViewOptions);
    const isInView2 = useInView(ref2, { triggerOnce: false, amount: 0.3 } as UseInViewOptions);
    const isInView3 = useInView(ref3, { triggerOnce: false, amount: 0.3 } as UseInViewOptions);


    return (
        <>
            {/* Primeiro par de cards */}
            <div
                id="first-line"
                ref={ref1}
                style={{ overflow: 'hidden' }}
                className="flex flex-col w-full max-w-4xl justify-between items-center"
            >
                {/* CARD TEXT */}
                <motion.div className="rounded-xl shadow-lg mx-8 "
                    initial="hidden"
                    animate={isInView1 ? "visible" : "hidden"}
                    variants={cardVariantLeft}
                    transition={{ duration: 1.5, delay: 0.2 }}
                    style={{ clipPath: 'inset(0 0 0 0)' }}
                >
                    <div className={`p-8 bg-white rounded-lg shadow-lg  w-full`}>
                        <div className="flex items-center mb-4">
                            <Smartphone className="h-12 w-12 text-teal-600" />
                            <h3 className="text-2xl font-semibold ml-4 text-teal-600 ">
                                Registro via App
                            </h3>
                        </div>
                        <p className="text-gray-600 text-lg indent-8">
                            Os usuários poderam acessar o controle de ponto pelo celular ou computador para fazer o registro de maneira facil e rapida.
                        </p>
                        <p className="flex justify-start items-center">
                            <FcAndroidOs className="text-6xl" />
                            <FaApple className="text-5xl ml-4 fill-gray-400" />
                        </p>
                    </div>
                </motion.div>

                {/* PERSON ANIMATE */}
                <motion.div
                    className="h-40 w-[45%] rounded-xl shadow-lg ml-12 my-4"
                    initial="hidden"
                    animate={isInView1 ? "visible" : "hidden"}
                    variants={cardVariantRight}
                    transition={{ duration: 1.5, delay: 0.2 }}
                    style={{ clipPath: 'inset(0 0 0 0)' }}
                >
                    <PersonBehindPhone width={150} />
                </motion.div>
            </div>

            {/* Segundo par de cards */}
            <div
                id="second-line"
                ref={ref2}
                style={{ overflow: 'hidden' }}
                className="flex flex-col w-full max-w-4xl justify-between items-center mt-20 "
            >
                {/* CARD TEXT */}
                <motion.div className="rounded-xl shadow-lg mx-8"
                    initial="hidden"
                    animate={isInView2 ? "visible" : "hidden"}
                    variants={cardVariantRight}
                    transition={{ duration: 1.5, delay: 0.2 }}
                    style={{ clipPath: 'inset(0 0 0 0)' }}
                >
                    <div className={`p-8 bg-white rounded-lg shadow-lg  w-full`}>
                        <div className="flex items-center mb-4">
                            <Check className="h-12 w-12 text-green-600" />
                            <h3 className="text-2xl font-semibold ml-4 text-teal-600 ">
                                Validação por IA
                            </h3>
                        </div>
                        <p className="text-gray-600 text-lg indent-8">
                            Nossa inteligência artificial verifica a autenticidade do registro, analisando com reconhecimento facial e localização para garantir a precisão contando com as tecnologias de gigantes do mercado.
                        </p>
                    </div>
                </motion.div>

                {/* PERSON ANIMATE */}
                <motion.div
                    className="h-40 w-[45%] rounded-xl shadow-lg mr-12 my-4"
                    initial="hidden"
                    animate={isInView2 ? "visible" : "hidden"}
                    variants={cardVariantLeft}
                    transition={{ duration: 1.5, delay: 0.2 }}
                    style={{ clipPath: 'inset(0 0 0 0)' }}
                >
                    <CloudInfraWithPerson width={200} />
                </motion.div>
            </div>

            {/* Terceiro par de cards */}
            <div
                id="second-line"
                ref={ref3}
                style={{ overflow: 'hidden' }}
                className="flex flex-col w-full max-w-4xl justify-between items-center mt-20"
            >
                {/* CARD TEXT */}
                <motion.div className="rounded-xl shadow-lg mx-8"
                    initial="hidden"
                    animate={isInView3 ? "visible" : "hidden"}
                    variants={cardVariantLeft}
                    transition={{ duration: 1.5, delay: 0.2 }}
                    style={{ clipPath: 'inset(0 0 0 0)' }}
                >
                    <div className={`p-8 bg-white rounded-lg shadow-lg  w-full`}>
                        <div className="flex items-center mb-4">
                            <BarChart className="h-12 w-12 text-teal-600" />
                            <h3 className="text-2xl font-semibold ml-4 text-teal-600 ">
                                Relatórios Detalhados
                            </h3>
                        </div>
                        <p className="text-gray-600 text-lg indent-8">
                            Gestores podem acessar os dados e análises em tempo real, obtendo insights valiosos sobre a jornada de trabalho e produtividade da equipe.
                        </p>
                    </div>
                </motion.div>

                {/* PERSON ANIMATE */}
                <motion.div
                    className="h-40 w-[45%] rounded-xl shadow-lg ml-20 my-4"
                    initial="hidden"
                    animate={isInView3 ? "visible" : "hidden"}
                    variants={cardVariantRight}
                    transition={{ duration: 1.5, delay: 0.2 }}
                    style={{ clipPath: 'inset(0 0 0 0)' }}
                >
                    <DashboardWithPerson width={200} />
                </motion.div>
            </div>
        </>
    );
}