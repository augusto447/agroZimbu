import logo from "@/assets/Logo_02.png"
import { Link } from "react-router-dom"
import { useState } from "react"
import { Menu, X } from "lucide-react"

export function Header() {
    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <header className="px-4 py-4 flex items-center justify-between h-20">
            <img className="w-24 h-24 md:w-40 md:h-40 object-contain" src={logo} alt="logomarca da empresa" />

            {/* Nav Desktop */}
            <nav className="hidden md:flex items-center gap-6">
                <Link className="hover:text-green-700 transition-colors duration-200" to="">Início</Link>
                <Link className="hover:text-green-700 transition-colors duration-200" to="">O que fizemos</Link>
                <Link className="hover:text-green-700 transition-colors duration-200" to="">Serviços</Link>
                <Link className="hover:text-green-700 transition-colors duration-200" to="">Sobre</Link>
                <Link className="hover:bg-green-600 text-white bg-green-700 font-bold rounded-2xl py-4 px-4 transition-colors duration-200" to="">Junta-te a Nós</Link>
            </nav>

            {/* Botão Mobile */}
            <button
                className="md:hidden p-2 text-green-700"
                onClick={() => setMenuOpen(!menuOpen)}
            >
                {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Menu Mobile */}
            {menuOpen && (
                <div className="md:hidden absolute top-20 left-0 right-0 bg-white border-t border-gray-100 shadow-md flex flex-col px-6 py-4 gap-4 z-50">
                    <Link onClick={() => setMenuOpen(false)} className="hover:text-green-700 transition-colors duration-200 py-2" to="">Início</Link>
                    <Link onClick={() => setMenuOpen(false)} className="hover:text-green-700 transition-colors duration-200 py-2" to="">O que fizemos</Link>
                    <Link onClick={() => setMenuOpen(false)} className="hover:text-green-700 transition-colors duration-200 py-2" to="">Serviços</Link>
                    <Link onClick={() => setMenuOpen(false)} className="hover:text-green-700 transition-colors duration-200 py-2" to="">Sobre</Link>
                    <Link onClick={() => setMenuOpen(false)} className="bg-green-700 hover:bg-green-600 text-white font-bold rounded-2xl py-3 px-4 text-center transition-colors duration-200" to="">Junta-te a Nós</Link>
                </div>
            )}
        </header>
    )
}