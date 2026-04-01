import { Link } from "react-router-dom"
import logo from "@/assets/Logo_02.png"
import { Mail, MapPin, Phone } from "lucide-react"

export function Footer() {
    return (
        <footer className="bg-green-900 text-white mt-20">
            <div className="max-w-7xl mx-auto px-6 sm:px-10 py-12 sm:py-16">

                {/* Container principal responsivo */}
                <div className="flex flex-col md:flex-row gap-10 md:gap-16 justify-between">

                    {/* Logo e descrição */}
                    <div className="flex-1">
                        <img
                            src={logo}
                            alt="AgroZimbu"
                            className="w-20 h-20 sm:w-24 sm:h-24 object-contain mb-4"
                        />
                        <p className="text-green-200 text-sm leading-relaxed max-w-xs">
                            Transformando a agricultura angolana através da tecnologia. Inovação, estrutura e inteligência digital ao serviço do campo.
                        </p>
                    </div>

                    {/* Links */}
                    <div className="flex-1">
                        <h3 className="text-lg font-semibold mb-4">Navegação</h3>
                        <div className="flex flex-col gap-3">
                            <Link to="/" className="text-green-200 hover:text-white transition-colors text-sm">Início</Link>
                            <Link to="/servicos" className="text-green-200 hover:text-white transition-colors text-sm">O que Fazemos</Link>
                            <Link to="/servicos" className="text-green-200 hover:text-white transition-colors text-sm">Serviços</Link>
                            <Link to="/sobre" className="text-green-200 hover:text-white transition-colors text-sm">Sobre</Link>
                            <Link to="/contacto" className="text-green-200 hover:text-white transition-colors text-sm">Junta-te a Nós</Link>
                        </div>
                    </div>

                    {/* Contacto */}
                    <div className="flex-1">
                        <h3 className="text-lg font-semibold mb-4">Contacto</h3>
                        <div className="flex flex-col gap-3">
                            <div className="flex gap-2 items-center text-green-200 text-sm">
                                <MapPin size={16} className="shrink-0" />
                                <span>Luanda, Angola</span>
                            </div>
                            <div className="flex gap-2 items-center text-green-200 text-sm">
                                <Phone size={16} className="shrink-0" />
                                <span>+244 900 000 000</span>
                            </div>
                            <div className="flex gap-2 items-center text-green-200 text-sm">
                                <Mail size={16} className="shrink-0" />
                                <span>info@agrozimbu.ao</span>
                            </div>
                        </div>
                    </div>

                </div>

                {/* Linha separadora responsiva */}
                <div className="border-t border-green-700 mt-10 pt-6 flex flex-col md:flex-row gap-3 md:gap-0 items-center justify-between text-center md:text-left">
                    <p className="text-green-400 text-sm">
                        © 2026 AgroZimbu. Todos os direitos reservados.
                    </p>
                    <p className="text-green-400 text-sm">
                        Feito com ❤️ em Angola
                    </p>
                </div>
            </div>
        </footer>
    )
}