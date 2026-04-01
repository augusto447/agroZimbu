import { CircleCheck, CircleX, DollarSign, FileChartLine, LayoutDashboard, Sprout, TrendingUp, Users, Cpu, Target, Eye, Zap } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

// Variantes reutilizáveis
const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i: number = 0) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
    }),
};

const fadeIn = {
    hidden: { opacity: 0 },
    visible: (i: number = 0) => ({
        opacity: 1,
        transition: { duration: 0.5, delay: i * 0.1 },
    }),
};

const scaleIn = {
    hidden: { opacity: 0, scale: 0.85 },
    visible: (i: number = 0) => ({
        opacity: 1,
        scale: 1,
        transition: { duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
    }),
};

const slideLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
};

const slideRight = {
    hidden: { opacity: 0, x: 50 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
};

const viewportOptions = { once: true, margin: "-80px" };

export function Sections() {
    return (
        <main className="w-full p-6 md:p-10">

            {/* Stats */}
            <section className="mt-16 md:mt-6 mb-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
                    {[
                        { value: "100+", label: "Produtores" },
                        { value: "50+", label: "Investidores" },
                        { value: "200+", label: "Talhões Monitorados" },
                        { value: "10+", label: "Regiões" },
                    ].map((stat, i) => (
                        <motion.div
                            key={stat.label}
                            className="bg-white shadow-sm border rounded-2xl p-6"
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={viewportOptions}
                            custom={i}
                            whileHover={{ y: -4, boxShadow: "0 8px 30px rgba(0,0,0,0.08)" }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            <h3 className="text-3xl md:text-4xl font-bold text-green-600">{stat.value}</h3>
                            <p className="text-gray-600 mt-2 text-sm md:text-base">{stat.label}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Do Desafio à Solução */}
            <motion.div
                className="mb-12 md:mb-20"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={viewportOptions}
            >
                <h1 className="text-center text-3xl md:text-5xl font-bold">Do Desafio{" "}
                    <span className="text-green-600">à Solução</span>
                </h1>
                <p className="text-center text-base md:text-xl text-gray-500 mt-3">Transformando obstáculos em oportunidades</p>
            </motion.div>

            <div className="flex flex-col md:flex-row gap-10 px-0 md:px-10">
                {/* Desafios */}
                <motion.div
                    className="flex-1 bg-red-50 border border-red-100 rounded-2xl p-6 md:p-8"
                    variants={slideLeft}
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewportOptions}
                >
                    <h2 className="text-2xl md:text-3xl font-bold text-red-700 mb-6">Desafios Actuais</h2>
                    <div className="flex flex-col gap-4">
                        {[
                            { title: "Falta de organização", desc: "Dados dispersos e processos manuais comprometem a eficiência." },
                            { title: "Acesso limitado a dados", desc: "Produtores sem informação suficiente para tomar boas decisões." },
                            { title: "Gestão difícil", desc: "Dificuldades em acompanhar e planear a produção agrícola." },
                        ].map((item, i) => (
                            <motion.div
                                key={item.title}
                                className="bg-white rounded-xl p-4 border border-red-100 shadow-sm flex gap-2"
                                variants={fadeUp}
                                initial="hidden"
                                whileInView="visible"
                                viewport={viewportOptions}
                                custom={i * 0.5}
                            >
                                <CircleX className="w-8 h-8 md:w-10 md:h-10 text-red-600 shrink-0" />
                                <div>
                                    <h3 className="font-semibold text-red-600 mb-1">{item.title}</h3>
                                    <p className="text-gray-600 text-sm">{item.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Soluções */}
                <motion.div
                    className="flex-1 bg-green-50 border border-green-100 rounded-2xl p-6 md:p-8"
                    variants={slideRight}
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewportOptions}
                >
                    <h2 className="text-2xl md:text-3xl font-bold text-green-700 mb-6">Soluções AgroZimbu</h2>
                    <div className="flex flex-col gap-4">
                        {[
                            { title: "Gestão centralizada", desc: "Toda a informação da produção num só lugar, organizada e acessível." },
                            { title: "Dados em tempo real", desc: "Acompanha a tua produção com dados actualizados para decisões mais inteligentes." },
                            { title: "Planeamento inteligente", desc: "Ferramentas que te ajudam a planear colheitas e maximizar resultados." },
                        ].map((item, i) => (
                            <motion.div
                                key={item.title}
                                className="bg-white rounded-xl p-4 border border-green-100 shadow-sm flex gap-2"
                                variants={fadeUp}
                                initial="hidden"
                                whileInView="visible"
                                viewport={viewportOptions}
                                custom={i * 0.5}
                            >
                                <CircleCheck className="w-8 h-8 md:w-10 md:h-10 text-green-600 shrink-0" />
                                <div>
                                    <h3 className="font-semibold text-green-700 mb-1">{item.title}</h3>
                                    <p className="text-gray-600 text-sm">{item.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>

            {/* O Nosso Produto */}
            <section className="mt-16 md:mt-20">
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewportOptions}
                >
                    <h1 className="text-3xl md:text-5xl text-center font-bold">O Nosso{" "}
                        <span className="text-green-600">Produto</span>
                    </h1>
                    <p className="text-center text-base md:text-xl text-gray-500 mt-3">Ferramentas digitais completas para transformar a sua agricultura</p>
                </motion.div>
                <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {[
                        { Icon: FileChartLine, title: "Monitoramento em tempo real", desc: "Acompanhe todos os dados da sua produção em tempo real através da nossa plataforma digital." },
                        { Icon: Sprout, title: "Planeamento de Colheitas", desc: "Organize e planeie as suas colheitas com ferramentas inteligentes e previsões baseadas em dados." },
                        { Icon: LayoutDashboard, title: "Controlo de Produção", desc: "Gerencie todo o ciclo produtivo com dashboards intuitivos e relatórios detalhados." },
                        { Icon: DollarSign, title: "Financiamento Agrícola", desc: "Acesso facilitado a oportunidades de financiamento para expandir o seu negócio agrícola." },
                    ].map(({ Icon, title, desc }, i) => (
                        <motion.div
                            key={title}
                            variants={scaleIn}
                            initial="hidden"
                            whileInView="visible"
                            viewport={viewportOptions}
                            custom={i}
                            whileHover={{ y: -6, boxShadow: "0 12px 40px rgba(0,0,0,0.10)" }}
                        >
                            <Card>
                                <CardHeader>
                                    <motion.div
                                        initial={{ rotate: -10, scale: 0.8, opacity: 0 }}
                                        whileInView={{ rotate: 0, scale: 1, opacity: 1 }}
                                        viewport={viewportOptions}
                                        transition={{ delay: i * 0.1 + 0.3, duration: 0.4 }}
                                    >
                                        <Icon className="w-10 h-10 text-green-600" />
                                    </motion.div>
                                    <CardTitle className="text-xl md:text-2xl">{title}</CardTitle>
                                </CardHeader>
                                <CardContent className="text-gray-600">{desc}</CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Missão / Visão / Propósito */}
            <section className="mt-16 md:mt-24">
                <motion.div
                    className="mb-10 md:mb-12"
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewportOptions}
                >
                    <h1 className="text-center text-3xl md:text-5xl font-bold">O Nosso{" "}
                        <span className="text-green-600">Propósito</span>
                    </h1>
                    <p className="text-center text-base md:text-xl text-gray-500 mt-3">Os valores que guiam cada decisão que tomamos</p>
                </motion.div>
                <div className="flex flex-col md:flex-row gap-6 px-0 md:px-10">
                    {[
                        {
                            Icon: Target, bg: "bg-green-50 border border-green-100", iconColor: "text-green-600",
                            titleColor: "text-green-800", textColor: "text-gray-600",
                            title: "Missão",
                            text: "Promover a modernização da agricultura em Angola, através de soluções tecnológicas que aumentem a produtividade e melhorem a gestão agrícola.",
                        },
                        {
                            Icon: Eye, bg: "bg-green-700", iconColor: "text-white",
                            titleColor: "text-white", textColor: "text-green-100",
                            title: "Visão",
                            text: "Ser uma referência na transformação digital do sector agrícola em África, contribuindo para uma agricultura mais inteligente, sustentável e inclusiva.",
                        },
                        {
                            Icon: Zap, bg: "bg-green-50 border border-green-100", iconColor: "text-green-600",
                            titleColor: "text-green-800", textColor: "text-gray-600",
                            title: "Propósito",
                            text: "Capacitar produtores, fortalecer o sector agrícola e criar pontes entre o campo e novas oportunidades, usando a tecnologia como motor de desenvolvimento.",
                        },
                    ].map(({ Icon, bg, iconColor, titleColor, textColor, title, text }, i) => (
                        <motion.div
                            key={title}
                            className={`flex-1 ${bg} rounded-2xl p-6 md:p-8 text-center`}
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={viewportOptions}
                            custom={i}
                            whileHover={{ scale: 1.03 }}
                            transition={{ type: "spring", stiffness: 250 }}
                        >
                            <motion.div
                                initial={{ scale: 0, opacity: 0 }}
                                whileInView={{ scale: 1, opacity: 1 }}
                                viewport={viewportOptions}
                                transition={{ delay: i * 0.15 + 0.2, type: "spring", stiffness: 200 }}
                            >
                                <Icon className={`w-12 h-12 ${iconColor} mx-auto mb-4`} />
                            </motion.div>
                            <h3 className={`text-xl md:text-2xl font-bold ${titleColor} mb-3`}>{title}</h3>
                            <p className={textColor}>{text}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Impacto */}
            <section className="mt-16 md:mt-24">
                <motion.div
                    className="mb-10 md:mb-12"
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewportOptions}
                >
                    <h1 className="text-center text-3xl md:text-5xl font-bold">Como Geramos{" "}
                        <span className="text-green-600">Impacto</span>
                    </h1>
                    <p className="text-center text-base md:text-xl text-gray-500 mt-3">Mudança real no campo, na sociedade e na tecnologia</p>
                </motion.div>
                <div className="flex flex-col md:flex-row gap-6 px-0 md:px-10">
                    {[
                        {
                            Icon: TrendingUp, title: "Impacto Económico",
                            items: [
                                "Aumento da produtividade agrícola",
                                "Melhoria na gestão e rentabilidade das explorações",
                                "Facilitação do acesso ao financiamento e investimento",
                            ],
                        },
                        {
                            Icon: Users, title: "Impacto Social",
                            items: [
                                "Inclusão de pequenos e médios produtores",
                                "Capacitação e apoio à tomada de decisão",
                                "Fortalecimento das comunidades rurais",
                            ],
                        },
                        {
                            Icon: Cpu, title: "Impacto Tecnológico",
                            items: [
                                "Introdução da digitalização no campo",
                                "Utilização de dados para melhorar a produção",
                                "Modernização dos processos agrícolas",
                            ],
                        },
                    ].map(({ Icon, title, items }, i) => (
                        <motion.div
                            key={title}
                            className="flex-1 bg-white border border-gray-100 rounded-2xl p-6 md:p-8 shadow-sm"
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={viewportOptions}
                            custom={i}
                            whileHover={{ y: -5, boxShadow: "0 12px 40px rgba(0,0,0,0.09)" }}
                        >
                            <motion.div
                                initial={{ x: -20, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                viewport={viewportOptions}
                                transition={{ delay: i * 0.1 + 0.2, duration: 0.4 }}
                            >
                                <Icon className="w-12 h-12 text-green-600 mb-4" />
                            </motion.div>
                            <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">{title}</h3>
                            <div className="flex flex-col gap-3">
                                {items.map((text, j) => (
                                    <motion.div
                                        key={text}
                                        className="flex gap-2 items-start"
                                        variants={fadeIn}
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={viewportOptions}
                                        custom={i * 0.2 + j * 0.15}
                                    >
                                        <CircleCheck className="w-5 h-5 text-green-600 mt-0.5 shrink-0" />
                                        <p className="text-gray-600 text-sm">{text}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Testemunhos */}
            <section className="mt-16 md:mt-24">
                <motion.div
                    className="mb-10 text-center"
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewportOptions}
                >
                    <h1 className="text-3xl md:text-5xl font-bold">
                        O que dizem os{" "}
                        <span className="text-green-600">Utilizadores</span>
                    </h1>
                    <p className="text-gray-500 mt-3 text-sm md:text-lg">
                        Experiências reais de quem já usa a plataforma
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-0 md:px-10">
                    {[
                        { quote: "Com a AgroZimbu consegui organizar melhor a minha produção e tomar decisões mais seguras.", author: "Produtor Local" },
                        { quote: "A plataforma ajudou-me a acompanhar dados em tempo real e melhorar os resultados.", author: "Gestor Agrícola" },
                        { quote: "Excelente solução para conectar produtores e investidores de forma digital.", author: "Investidor" },
                    ].map(({ quote, author }, i) => (
                        <motion.div
                            key={author}
                            className="bg-white border rounded-2xl p-6 shadow-sm"
                            variants={scaleIn}
                            initial="hidden"
                            whileInView="visible"
                            viewport={viewportOptions}
                            custom={i}
                            whileHover={{ y: -4, boxShadow: "0 10px 35px rgba(0,0,0,0.08)" }}
                        >
                            <p className="text-gray-600 italic mb-4">"{quote}"</p>
                            <h4 className="font-semibold text-green-700">{author}</h4>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Junta-te a Nós */}
            <section className="mt-16 md:mt-24 mb-10">
                <motion.div
                    className="bg-green-700 rounded-3xl p-10 md:p-16 text-center"
                    variants={scaleIn}
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewportOptions}
                >
                    <motion.h1
                        className="text-3xl md:text-5xl font-bold text-white mb-4"
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={viewportOptions}
                    >
                        Junta-te a <span className="text-green-300">Nós</span>
                    </motion.h1>
                    <motion.p
                        className="text-green-100 text-base md:text-xl max-w-2xl mx-auto mb-10"
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={viewportOptions}
                        custom={1}
                    >
                        Estamos a construir o futuro da agricultura em Angola. Se és produtor, investidor ou simplesmente acreditas no potencial do sector agrícola, a AgroZimbu é o teu parceiro nesta transformação.
                    </motion.p>
                    <motion.div
                        className="flex flex-col sm:flex-row gap-4 justify-center"
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={viewportOptions}
                        custom={2}
                    >
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
                    </motion.div>
                </motion.div>
            </section>

        </main>
    );
}