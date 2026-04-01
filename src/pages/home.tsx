import { Header } from "@/components/header";
import picture from "@/assets/imagem.png";
import { Link } from "react-router-dom";
import { Sections } from "@/components/sections";
import { Footer } from "@/components/footer";

export function HomePage() {
    return (
        <div className="flex flex-col min-h-screen">

            {/* HEADER */}
            <Header />

            {/* HERO SECTION */}
            <main className="flex-1">

                <section className="relative w-full">
                    {/* Background Image */}
                    <img
                        src={picture}
                        alt="foto principal"
                        className="w-full h-[70vh] sm:h-[80vh] md:h-[85vh] object-cover"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center px-4">
                        <div className="text-center max-w-5xl">

                            {/* Title */}
                            <h1 className="text-white font-bold leading-tight text-2xl sm:text-4xl md:text-5xl lg:text-6xl drop-shadow-lg">
                                Transformando a Agricultura
                            </h1>

                            {/* Subtitle */}
                            <p className="text-white font-semibold mt-4 text-lg sm:text-xl md:text-2xl lg:text-3xl">
                                em Angola através da Tecnologia com{" "}
                                <span className="text-green-500 font-bold">
                                    AgroZimbu
                                </span>
                            </p>

                            {/* Description */}
                            <p className="text-white mt-6 text-sm sm:text-base md:text-lg lg:text-xl max-w-3xl mx-auto">
                                Criando pontes entre o campo e novas oportunidades através de soluções digitais inovadoras que conectam produtores, investidores e tecnologia.
                            </p>

                            {/* Buttons */}
                            <div className="flex flex-col sm:flex-row gap-4 mt-10 justify-center items-center">
                                <Link
                                    to=""
                                    className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-full font-semibold transition duration-200 w-full sm:w-auto text-center"
                                >
                                    Sou Produtor
                                </Link>

                                <Link
                                    to=""
                                    className="border-2 border-green-500 text-green-500 bg-white hover:bg-green-50 px-6 py-3 sm:px-8 sm:py-4 rounded-full font-semibold transition duration-200 w-full sm:w-auto text-center"
                                >
                                    Sou Investidor
                                </Link>
                            </div>

                        </div>
                    </div>
                </section>

                {/* SECTIONS */}
                <Sections />

            </main>


            <Footer />
        </div>
    );
}