import { CircleCheck, CircleX, DollarSign, FileChartLine, LayoutDashboard, Sprout, TrendingUp, Users, Cpu, Target, Eye, Zap } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Link } from "react-router-dom";

export function Sections() {
    return (
        <main className="w-full p-6 md:p-10">

            {/* Do Desafio à Solução */}
            <div className="mb-12 md:mb-20">
                <h1 className="text-center text-3xl md:text-5xl font-bold">Do Desafio{" "}
                    <span className="text-green-600">à Solução</span>
                </h1>
                <p className="text-center text-base md:text-xl text-gray-500 mt-3">Transformando obstáculos em oportunidades</p>
            </div>

            <div className="flex flex-col md:flex-row gap-10 px-0 md:px-10">
                <div className="flex-1 bg-red-50 border border-red-100 rounded-2xl p-6 md:p-8">
                    <h2 className="text-2xl md:text-3xl font-bold text-red-700 mb-6">Desafios Actuais</h2>
                    <div className="flex flex-col gap-4">
                        <div className="bg-white rounded-xl p-4 border border-red-100 shadow-sm flex gap-2">
                            <CircleX className="w-8 h-8 md:w-10 md:h-10 text-red-600 shrink-0" />
                            <div>
                                <h3 className="font-semibold text-red-600 mb-1">Falta de organização</h3>
                                <p className="text-gray-600 text-sm">Dados dispersos e processos manuais comprometem a eficiência.</p>
                            </div>
                        </div>
                        <div className="bg-white rounded-xl p-4 border border-red-100 shadow-sm flex gap-2">
                            <CircleX className="w-8 h-8 md:w-10 md:h-10 text-red-600 shrink-0" />
                            <div>
                                <h3 className="font-semibold text-red-600 mb-1">Acesso limitado a dados</h3>
                                <p className="text-gray-600 text-sm">Produtores sem informação suficiente para tomar boas decisões.</p>
                            </div>
                        </div>
                        <div className="bg-white rounded-xl p-4 border border-red-100 shadow-sm flex gap-2">
                            <CircleX className="w-8 h-8 md:w-10 md:h-10 text-red-600 shrink-0" />
                            <div>
                                <h3 className="font-semibold text-red-600 mb-1">Gestão difícil</h3>
                                <p className="text-gray-600 text-sm">Dificuldades em acompanhar e planear a produção agrícola.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex-1 bg-green-50 border border-green-100 rounded-2xl p-6 md:p-8">
                    <h2 className="text-2xl md:text-3xl font-bold text-green-700 mb-6">Soluções AgroZimbu</h2>
                    <div className="flex flex-col gap-4">
                        <div className="bg-white rounded-xl p-4 border border-green-100 shadow-sm flex gap-2">
                            <CircleCheck className="w-8 h-8 md:w-10 md:h-10 text-green-600 shrink-0" />
                            <div>
                                <h3 className="font-semibold text-green-700 mb-1">Gestão centralizada</h3>
                                <p className="text-gray-600 text-sm">Toda a informação da produção num só lugar, organizada e acessível.</p>
                            </div>
                        </div>
                        <div className="bg-white rounded-xl p-4 border border-green-100 shadow-sm flex gap-2">
                            <CircleCheck className="w-8 h-8 md:w-10 md:h-10 text-green-600 shrink-0" />
                            <div>
                                <h3 className="font-semibold text-green-700 mb-1">Dados em tempo real</h3>
                                <p className="text-gray-600 text-sm">Acompanha a tua produção com dados actualizados para decisões mais inteligentes.</p>
                            </div>
                        </div>
                        <div className="bg-white rounded-xl p-4 border border-green-100 shadow-sm flex gap-2">
                            <CircleCheck className="w-8 h-8 md:w-10 md:h-10 text-green-600 shrink-0" />
                            <div>
                                <h3 className="font-semibold text-green-700 mb-1">Planeamento inteligente</h3>
                                <p className="text-gray-600 text-sm">Ferramentas que te ajudam a planear colheitas e maximizar resultados.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* O Nosso Produto */}
            <section className="mt-16 md:mt-20">
                <div>
                    <h1 className="text-3xl md:text-5xl text-center font-bold">O Nosso{" "}
                        <span className="text-green-600">Produto</span>
                    </h1>
                    <p className="text-center text-base md:text-xl text-gray-500 mt-3">Ferramentas digitais completas para transformar a sua agricultura</p>
                </div>
                <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    <Card>
                        <CardHeader>
                            <FileChartLine className="w-10 h-10 text-green-600" />
                            <CardTitle className="text-xl md:text-2xl">Monitoramento em tempo real</CardTitle>
                        </CardHeader>
                        <CardContent className="text-gray-600">
                            Acompanhe todos os dados da sua produção em tempo real através da nossa plataforma digital.
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader>
                            <Sprout className="w-10 h-10 text-green-600" />
                            <CardTitle className="text-xl md:text-2xl">Planeamento de Colheitas</CardTitle>
                        </CardHeader>
                        <CardContent className="text-gray-600">
                            Organize e planeie as suas colheitas com ferramentas inteligentes e previsões baseadas em dados.
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader>
                            <LayoutDashboard className="w-10 h-10 text-green-600" />
                            <CardTitle className="text-xl md:text-2xl">Controlo de Produção</CardTitle>
                        </CardHeader>
                        <CardContent className="text-gray-600">
                            Gerencie todo o ciclo produtivo com dashboards intuitivos e relatórios detalhados.
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader>
                            <DollarSign className="w-10 h-10 text-green-600" />
                            <CardTitle className="text-xl md:text-2xl">Financiamento Agrícola</CardTitle>
                        </CardHeader>
                        <CardContent className="text-gray-600">
                            Acesso facilitado a oportunidades de financiamento para expandir o seu negócio agrícola.
                        </CardContent>
                    </Card>
                </div>
            </section>

            {/* Missão / Visão / Propósito */}
            <section className="mt-16 md:mt-24">
                <div className="mb-10 md:mb-12">
                    <h1 className="text-center text-3xl md:text-5xl font-bold">O Nosso{" "}
                        <span className="text-green-600">Propósito</span>
                    </h1>
                    <p className="text-center text-base md:text-xl text-gray-500 mt-3">Os valores que guiam cada decisão que tomamos</p>
                </div>
                <div className="flex flex-col md:flex-row gap-6 px-0 md:px-10">
                    <div className="flex-1 bg-green-50 border border-green-100 rounded-2xl p-6 md:p-8 text-center">
                        <Target className="w-12 h-12 text-green-600 mx-auto mb-4" />
                        <h3 className="text-xl md:text-2xl font-bold text-green-800 mb-3">Missão</h3>
                        <p className="text-gray-600">Promover a modernização da agricultura em Angola, através de soluções tecnológicas que aumentem a produtividade e melhorem a gestão agrícola.</p>
                    </div>
                    <div className="flex-1 bg-green-700 rounded-2xl p-6 md:p-8 text-center">
                        <Eye className="w-12 h-12 text-white mx-auto mb-4" />
                        <h3 className="text-xl md:text-2xl font-bold text-white mb-3">Visão</h3>
                        <p className="text-green-100">Ser uma referência na transformação digital do sector agrícola em África, contribuindo para uma agricultura mais inteligente, sustentável e inclusiva.</p>
                    </div>
                    <div className="flex-1 bg-green-50 border border-green-100 rounded-2xl p-6 md:p-8 text-center">
                        <Zap className="w-12 h-12 text-green-600 mx-auto mb-4" />
                        <h3 className="text-xl md:text-2xl font-bold text-green-800 mb-3">Propósito</h3>
                        <p className="text-gray-600">Capacitar produtores, fortalecer o sector agrícola e criar pontes entre o campo e novas oportunidades, usando a tecnologia como motor de desenvolvimento.</p>
                    </div>
                </div>
            </section>

            {/* Impacto */}
            <section className="mt-16 md:mt-24">
                <div className="mb-10 md:mb-12">
                    <h1 className="text-center text-3xl md:text-5xl font-bold">Como Geramos{" "}
                        <span className="text-green-600">Impacto</span>
                    </h1>
                    <p className="text-center text-base md:text-xl text-gray-500 mt-3">Mudança real no campo, na sociedade e na tecnologia</p>
                </div>
                <div className="flex flex-col md:flex-row gap-6 px-0 md:px-10">
                    <div className="flex-1 bg-white border border-gray-100 rounded-2xl p-6 md:p-8 shadow-sm">
                        <TrendingUp className="w-12 h-12 text-green-600 mb-4" />
                        <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">Impacto Económico</h3>
                        <div className="flex flex-col gap-3">
                            <div className="flex gap-2 items-start">
                                <CircleCheck className="w-5 h-5 text-green-600 mt-0.5 shrink-0" />
                                <p className="text-gray-600 text-sm">Aumento da produtividade agrícola</p>
                            </div>
                            <div className="flex gap-2 items-start">
                                <CircleCheck className="w-5 h-5 text-green-600 mt-0.5 shrink-0" />
                                <p className="text-gray-600 text-sm">Melhoria na gestão e rentabilidade das explorações</p>
                            </div>
                            <div className="flex gap-2 items-start">
                                <CircleCheck className="w-5 h-5 text-green-600 mt-0.5 shrink-0" />
                                <p className="text-gray-600 text-sm">Facilitação do acesso ao financiamento e investimento</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex-1 bg-white border border-gray-100 rounded-2xl p-6 md:p-8 shadow-sm">
                        <Users className="w-12 h-12 text-green-600 mb-4" />
                        <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">Impacto Social</h3>
                        <div className="flex flex-col gap-3">
                            <div className="flex gap-2 items-start">
                                <CircleCheck className="w-5 h-5 text-green-600 mt-0.5 shrink-0" />
                                <p className="text-gray-600 text-sm">Inclusão de pequenos e médios produtores</p>
                            </div>
                            <div className="flex gap-2 items-start">
                                <CircleCheck className="w-5 h-5 text-green-600 mt-0.5 shrink-0" />
                                <p className="text-gray-600 text-sm">Capacitação e apoio à tomada de decisão</p>
                            </div>
                            <div className="flex gap-2 items-start">
                                <CircleCheck className="w-5 h-5 text-green-600 mt-0.5 shrink-0" />
                                <p className="text-gray-600 text-sm">Fortalecimento das comunidades rurais</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex-1 bg-white border border-gray-100 rounded-2xl p-6 md:p-8 shadow-sm">
                        <Cpu className="w-12 h-12 text-green-600 mb-4" />
                        <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">Impacto Tecnológico</h3>
                        <div className="flex flex-col gap-3">
                            <div className="flex gap-2 items-start">
                                <CircleCheck className="w-5 h-5 text-green-600 mt-0.5 shrink-0" />
                                <p className="text-gray-600 text-sm">Introdução da digitalização no campo</p>
                            </div>
                            <div className="flex gap-2 items-start">
                                <CircleCheck className="w-5 h-5 text-green-600 mt-0.5 shrink-0" />
                                <p className="text-gray-600 text-sm">Utilização de dados para melhorar a produção</p>
                            </div>
                            <div className="flex gap-2 items-start">
                                <CircleCheck className="w-5 h-5 text-green-600 mt-0.5 shrink-0" />
                                <p className="text-gray-600 text-sm">Modernização dos processos agrícolas</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Junta-te a Nós */}
            <section className="mt-16 md:mt-24 mb-10">
                <div className="bg-green-700 rounded-3xl p-10 md:p-16 text-center">
                    <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">Junta-te a <span className="text-green-300">Nós</span></h1>
                    <p className="text-green-100 text-base md:text-xl max-w-2xl mx-auto mb-10">
                        Estamos a construir o futuro da agricultura em Angola. Se és produtor, investidor ou simplesmente acreditas no potencial do sector agrícola, a AgroZimbu é o teu parceiro nesta transformação.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link to="" className="bg-white text-green-700 font-semibold px-8 py-4 rounded-full hover:bg-green-50 transition-colors duration-200">
                            Sou Produtor
                        </Link>
                        <Link to="" className="border-2 border-white text-white font-semibold px-8 py-4 rounded-full hover:bg-green-600 transition-colors duration-200">
                            Sou Investidor
                        </Link>
                    </div>
                </div>
            </section>


        </main>
    )
}