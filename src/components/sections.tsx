import {
    CircleCheck,
    CircleX,
    DollarSign,
    FileChartLine,
    LayoutDashboard,
    Sprout,
    TrendingUp,
    Users,
    Cpu,
    Target,
    Eye,
    Zap
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Link } from "react-router-dom";

import { motion } from "framer-motion";

// Variantes de animação
const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" as const }
    }
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.12,
            delayChildren: 0.1
        }
    }
};

const cardHover = {
    rest: { scale: 1 },
    hover: {
        scale: 1.03,
        transition: { duration: 0.3 }
    }
};

export function Sections() {
    return (
        <main className="w-full p-6 md:p-10">

            {/* Estatísticas */}
            <section className="mt-16 md:mt-6 mb-10">
                <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={staggerContainer}
                >
                    <motion.div className="bg-white shadow-sm border rounded-2xl p-6" variants={fadeInUp}>
                        <h3 className="text-3xl md:text-4xl font-bold text-green-600">100+</h3>
                        <p className="text-gray-600 mt-2 text-sm md:text-base">Produtores</p>
                    </motion.div>

                    <motion.div className="bg-white shadow-sm border rounded-2xl p-6" variants={fadeInUp}>
                        <h3 className="text-3xl md:text-4xl font-bold text-green-600">50+</h3>
                        <p className="text-gray-600 mt-2 text-sm md:text-base">Investidores</p>
                    </motion.div>

                    <motion.div className="bg-white shadow-sm border rounded-2xl p-6" variants={fadeInUp}>
                        <h3 className="text-3xl md:text-4xl font-bold text-green-600">200+</h3>
                        <p className="text-gray-600 mt-2 text-sm md:text-base">Talhões Monitorados</p>
                    </motion.div>

                    <motion.div className="bg-white shadow-sm border rounded-2xl p-6" variants={fadeInUp}>
                        <h3 className="text-3xl md:text-4xl font-bold text-green-600">10+</h3>
                        <p className="text-gray-600 mt-2 text-sm md:text-base">Regiões</p>
                    </motion.div>
                </motion.div>
            </section>

            {/* Do Desafio à Solução */}
            <motion.div
                className="mb-12 md:mb-20"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
            >
                <h1 className="text-center text-3xl md:text-5xl font-bold">Do Desafio{" "}
                    <span className="text-green-600">à Solução</span>
                </h1>
                <p className="text-center text-base md:text-xl text-gray-500 mt-3">Transformando obstáculos em oportunidades</p>
            </motion.div>

            <div className="flex flex-col md:flex-row gap-10 px-0 md:px-10">
                {/* Desafios Actuais */}
                <motion.div
                    className="flex-1 bg-red-50 border border-red-100 rounded-2xl p-6 md:p-8"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                >
                    <h2 className="text-2xl md:text-3xl font-bold text-red-700 mb-6">Desafios Actuais</h2>
                    <motion.div
                        className="flex flex-col gap-4"
                        variants={staggerContainer}
                    >
                        <motion.div className="bg-white rounded-xl p-4 border border-red-100 shadow-sm flex gap-2" variants={fadeInUp}>
                            <CircleX className="w-8 h-8 md:w-10 md:h-10 text-red-600 shrink-0" />
                            <div>
                                <h3 className="font-semibold text-red-600 mb-1">Falta de organização</h3>
                                <p className="text-gray-600 text-sm">Dados dispersos e processos manuais comprometem a eficiência.</p>
                            </div>
                        </motion.div>
                        <motion.div className="bg-white rounded-xl p-4 border border-red-100 shadow-sm flex gap-2" variants={fadeInUp}>
                            <CircleX className="w-8 h-8 md:w-10 md:h-10 text-red-600 shrink-0" />
                            <div>
                                <h3 className="font-semibold text-red-600 mb-1">Acesso limitado a dados</h3>
                                <p className="text-gray-600 text-sm">Produtores sem informação suficiente para tomar boas decisões.</p>
                            </div>
                        </motion.div>
                        <motion.div className="bg-white rounded-xl p-4 border border-red-100 shadow-sm flex gap-2" variants={fadeInUp}>
                            <CircleX className="w-8 h-8 md:w-10 md:h-10 text-red-600 shrink-0" />
                            <div>
                                <h3 className="font-semibold text-red-600 mb-1">Gestão difícil</h3>
                                <p className="text-gray-600 text-sm">Dificuldades em acompanhar e planear a produção agrícola.</p>
                            </div>
                        </motion.div>
                    </motion.div>
                </motion.div>

                {/* Soluções AgroZimbu */}
                <motion.div
                    className="flex-1 bg-green-50 border border-green-100 rounded-2xl p-6 md:p-8"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                >
                    <h2 className="text-2xl md:text-3xl font-bold text-green-700 mb-6">Soluções AgroZimbu</h2>
                    <motion.div
                        className="flex flex-col gap-4"
                        variants={staggerContainer}
                    >
                        <motion.div className="bg-white rounded-xl p-4 border border-green-100 shadow-sm flex gap-2" variants={fadeInUp}>
                            <CircleCheck className="w-8 h-8 md:w-10 md:h-10 text-green-600 shrink-0" />
                            <div>
                                <h3 className="font-semibold text-green-700 mb-1">Gestão centralizada</h3>
                                <p className="text-gray-600 text-sm">Toda a informação da produção num só lugar, organizada e acessível.</p>
                            </div>
                        </motion.div>
                        <motion.div className="bg-white rounded-xl p-4 border border-green-100 shadow-sm flex gap-2" variants={fadeInUp}>
                            <CircleCheck className="w-8 h-8 md:w-10 md:h-10 text-green-600 shrink-0" />
                            <div>
                                <h3 className="font-semibold text-green-700 mb-1">Dados em tempo real</h3>
                                <p className="text-gray-600 text-sm">Acompanha a tua produção com dados actualizados para decisões mais inteligentes.</p>
                            </div>
                        </motion.div>
                        <motion.div className="bg-white rounded-xl p-4 border border-green-100 shadow-sm flex gap-2" variants={fadeInUp}>
                            <CircleCheck className="w-8 h-8 md:w-10 md:h-10 text-green-600 shrink-0" />
                            <div>
                                <h3 className="font-semibold text-green-700 mb-1">Planeamento inteligente</h3>
                                <p className="text-gray-600 text-sm">Ferramentas que te ajudam a planear colheitas e maximizar resultados.</p>
                            </div>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>

            {/* O Nosso Produto */}
            <section className="mt-16 md:mt-20">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                >
                    <h1 className="text-3xl md:text-5xl text-center font-bold">O Nosso{" "}
                        <span className="text-green-600">Produto</span>
                    </h1>
                    <p className="text-center text-base md:text-xl text-gray-500 mt-3">Ferramentas digitais completas para transformar a sua agricultura</p>
                </motion.div>

                <motion.div
                    className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={staggerContainer}
                >
                    <motion.div variants={fadeInUp}>
                        <motion.div whileHover="hover" initial="rest" variants={cardHover}>
                            <Card>
                                <CardHeader>
                                    <FileChartLine className="w-10 h-10 text-green-600" />
                                    <CardTitle className="text-xl md:text-2xl">Monitoramento em tempo real</CardTitle>
                                </CardHeader>
                                <CardContent className="text-gray-600">
                                    Acompanhe todos os dados da sua produção em tempo real através da nossa plataforma digital.
                                </CardContent>
                            </Card>
                        </motion.div>
                    </motion.div>

                    <motion.div variants={fadeInUp}>
                        <motion.div whileHover="hover" initial="rest" variants={cardHover}>
                            <Card>
                                <CardHeader>
                                    <Sprout className="w-10 h-10 text-green-600" />
                                    <CardTitle className="text-xl md:text-2xl">Planeamento de Colheitas</CardTitle>
                                </CardHeader>
                                <CardContent className="text-gray-600">
                                    Organize e planeie as suas colheitas com ferramentas inteligentes e previsões baseadas em dados.
                                </CardContent>
                            </Card>
                        </motion.div>
                    </motion.div>

                    <motion.div variants={fadeInUp}>
                        <motion.div whileHover="hover" initial="rest" variants={cardHover}>
                            <Card>
                                <CardHeader>
                                    <LayoutDashboard className="w-10 h-10 text-green-600" />
                                    <CardTitle className="text-xl md:text-2xl">Controlo de Produção</CardTitle>
                                </CardHeader>
                                <CardContent className="text-gray-600">
                                    Gerencie todo o ciclo produtivo com dashboards intuitivos e relatórios detalhados.
                                </CardContent>
                            </Card>
                        </motion.div>
                    </motion.div>

                    <motion.div variants={fadeInUp}>
                        <motion.div whileHover="hover" initial="rest" variants={cardHover}>
                            <Card>
                                <CardHeader>
                                    <DollarSign className="w-10 h-10 text-green-600" />
                                    <CardTitle className="text-xl md:text-2xl">Financiamento Agrícola</CardTitle>
                                </CardHeader>
                                <CardContent className="text-gray-600">
                                    Acesso facilitado a oportunidades de financiamento para expandir o seu negócio agrícola.
                                </CardContent>
                            </Card>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </section>

            {/* Missão / Visão / Propósito */}
            <section className="mt-16 md:mt-24">
                <motion.div
                    className="mb-10 md:mb-12"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                >
                    <h1 className="text-center text-3xl md:text-5xl font-bold">O Nosso{" "}
                        <span className="text-green-600">Propósito</span>
                    </h1>
                    <p className="text-center text-base md:text-xl text-gray-500 mt-3">Os valores que guiam cada decisão que tomamos</p>
                </motion.div>

                <div className="flex flex-col md:flex-row gap-6 px-0 md:px-10">
                    <motion.div
                        className="flex-1 bg-green-50 border border-green-100 rounded-2xl p-6 md:p-8 text-center"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        whileHover={{ y: -8 }}
                    >
                        <Target className="w-12 h-12 text-green-600 mx-auto mb-4" />
                        <h3 className="text-xl md:text-2xl font-bold text-green-800 mb-3">Missão</h3>
                        <p className="text-gray-600">Promover a modernização da agricultura em Angola, através de soluções tecnológicas que aumentem a produtividade e melhorem a gestão agrícola.</p>
                    </motion.div>

                    <motion.div
                        className="flex-1 bg-green-700 rounded-2xl p-6 md:p-8 text-center"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        whileHover={{ y: -8 }}
                    >
                        <Eye className="w-12 h-12 text-white mx-auto mb-4" />
                        <h3 className="text-xl md:text-2xl font-bold text-white mb-3">Visão</h3>
                        <p className="text-green-100">Ser uma referência na transformação digital do sector agrícola em África, contribuindo para uma agricultura mais inteligente, sustentável e inclusiva.</p>
                    </motion.div>

                    <motion.div
                        className="flex-1 bg-green-50 border border-green-100 rounded-2xl p-6 md:p-8 text-center"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        whileHover={{ y: -8 }}
                    >
                        <Zap className="w-12 h-12 text-green-600 mx-auto mb-4" />
                        <h3 className="text-xl md:text-2xl font-bold text-green-800 mb-3">Propósito</h3>
                        <p className="text-gray-600">Capacitar produtores, fortalecer o sector agrícola e criar pontes entre o campo e novas oportunidades, usando a tecnologia como motor de desenvolvimento.</p>
                    </motion.div>
                </div>
            </section>

            {/* Impacto */}
            <section className="mt-16 md:mt-24">
                <motion.div
                    className="mb-10 md:mb-12"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                >
                    <h1 className="text-center text-3xl md:text-5xl font-bold">Como Geramos{" "}
                        <span className="text-green-600">Impacto</span>
                    </h1>
                    <p className="text-center text-base md:text-xl text-gray-500 mt-3">Mudança real no campo, na sociedade e na tecnologia</p>
                </motion.div>

                <div className="flex flex-col md:flex-row gap-6 px-0 md:px-10">
                    <motion.div
                        className="flex-1 bg-white border border-gray-100 rounded-2xl p-6 md:p-8 shadow-sm"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        whileHover={{ y: -6 }}
                    >
                        <TrendingUp className="w-12 h-12 text-green-600 mb-4" />
                        <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">Impacto Económico</h3>
                        <div className="flex flex-col gap-3">
                            <motion.div className="flex gap-2 items-start" variants={fadeInUp}>
                                <CircleCheck className="w-5 h-5 text-green-600 mt-0.5 shrink-0" />
                                <p className="text-gray-600 text-sm">Aumento da produtividade agrícola</p>
                            </motion.div>
                            <motion.div className="flex gap-2 items-start" variants={fadeInUp}>
                                <CircleCheck className="w-5 h-5 text-green-600 mt-0.5 shrink-0" />
                                <p className="text-gray-600 text-sm">Melhoria na gestão e rentabilidade das explorações</p>
                            </motion.div>
                            <motion.div className="flex gap-2 items-start" variants={fadeInUp}>
                                <CircleCheck className="w-5 h-5 text-green-600 mt-0.5 shrink-0" />
                                <p className="text-gray-600 text-sm">Facilitação do acesso ao financiamento e investimento</p>
                            </motion.div>
                        </div>
                    </motion.div>

                    <motion.div
                        className="flex-1 bg-white border border-gray-100 rounded-2xl p-6 md:p-8 shadow-sm"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        whileHover={{ y: -6 }}
                    >
                        <Users className="w-12 h-12 text-green-600 mb-4" />
                        <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">Impacto Social</h3>
                        <div className="flex flex-col gap-3">
                            <motion.div className="flex gap-2 items-start" variants={fadeInUp}>
                                <CircleCheck className="w-5 h-5 text-green-600 mt-0.5 shrink-0" />
                                <p className="text-gray-600 text-sm">Inclusão de pequenos e médios produtores</p>
                            </motion.div>
                            <motion.div className="flex gap-2 items-start" variants={fadeInUp}>
                                <CircleCheck className="w-5 h-5 text-green-600 mt-0.5 shrink-0" />
                                <p className="text-gray-600 text-sm">Capacitação e apoio à tomada de decisão</p>
                            </motion.div>
                            <motion.div className="flex gap-2 items-start" variants={fadeInUp}>
                                <CircleCheck className="w-5 h-5 text-green-600 mt-0.5 shrink-0" />
                                <p className="text-gray-600 text-sm">Fortalecimento das comunidades rurais</p>
                            </motion.div>
                        </div>
                    </motion.div>

                    <motion.div
                        className="flex-1 bg-white border border-gray-100 rounded-2xl p-6 md:p-8 shadow-sm"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        whileHover={{ y: -6 }}
                    >
                        <Cpu className="w-12 h-12 text-green-600 mb-4" />
                        <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">Impacto Tecnológico</h3>
                        <div className="flex flex-col gap-3">
                            <motion.div className="flex gap-2 items-start" variants={fadeInUp}>
                                <CircleCheck className="w-5 h-5 text-green-600 mt-0.5 shrink-0" />
                                <p className="text-gray-600 text-sm">Introdução da digitalização no campo</p>
                            </motion.div>
                            <motion.div className="flex gap-2 items-start" variants={fadeInUp}>
                                <CircleCheck className="w-5 h-5 text-green-600 mt-0.5 shrink-0" />
                                <p className="text-gray-600 text-sm">Utilização de dados para melhorar a produção</p>
                            </motion.div>
                            <motion.div className="flex gap-2 items-start" variants={fadeInUp}>
                                <CircleCheck className="w-5 h-5 text-green-600 mt-0.5 shrink-0" />
                                <p className="text-gray-600 text-sm">Modernização dos processos agrícolas</p>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Testemunhos */}
            <section className="mt-16 md:mt-24">
                <motion.div
                    className="mb-10 text-center"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                >
                    <h1 className="text-3xl md:text-5xl font-bold">
                        O que dizem os{" "}
                        <span className="text-green-600">Utilizadores</span>
                    </h1>
                    <p className="text-gray-500 mt-3 text-sm md:text-lg">
                        Experiências reais de quem já usa a plataforma
                    </p>
                </motion.div>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-3 gap-6 px-0 md:px-10"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={staggerContainer}
                >
                    <motion.div className="bg-white border rounded-2xl p-6 shadow-sm" variants={fadeInUp}>
                        <p className="text-gray-600 italic mb-4">
                            “Com a AgroZimbu consegui organizar melhor a minha produção e tomar decisões mais seguras.”
                        </p>
                        <h4 className="font-semibold text-green-700">Produtor Local</h4>
                    </motion.div>

                    <motion.div className="bg-white border rounded-2xl p-6 shadow-sm" variants={fadeInUp}>
                        <p className="text-gray-600 italic mb-4">
                            “A plataforma ajudou-me a acompanhar dados em tempo real e melhorar os resultados.”
                        </p>
                        <h4 className="font-semibold text-green-700">Gestor Agrícola</h4>
                    </motion.div>

                    <motion.div className="bg-white border rounded-2xl p-6 shadow-sm" variants={fadeInUp}>
                        <p className="text-gray-600 italic mb-4">
                            “Excelente solução para conectar produtores e investidores de forma digital.”
                        </p>
                        <h4 className="font-semibold text-green-700">Investidor</h4>
                    </motion.div>
                </motion.div>
            </section>

            {/* Junta-te a Nós */}
            <section className="mt-16 md:mt-24 mb-10">
                <motion.div
                    className="bg-green-700 rounded-3xl p-10 md:p-16 text-center"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                >
                    <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">Junta-te a <span className="text-green-300">Nós</span></h1>
                    <p className="text-green-100 text-base md:text-xl max-w-2xl mx-auto mb-10">
                        Estamos a construir o futuro da agricultura em Angola. Se és produtor, investidor ou simplesmente acreditas no potencial do sector agrícola, a AgroZimbu é o teu parceiro nesta transformação.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
                            <Link to="" className="bg-white text-green-700 font-semibold px-8 py-4 rounded-full hover:bg-green-50 transition-colors duration-200 inline-block">
                                Sou Produtor
                            </Link>
                        </motion.div>
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
                            <Link to="" className="border-2 border-white text-white font-semibold px-8 py-4 rounded-full hover:bg-green-600 transition-colors duration-200 inline-block">
                                Sou Investidor
                            </Link>
                        </motion.div>
                    </div>
                </motion.div>
            </section>

        </main>
    )
}