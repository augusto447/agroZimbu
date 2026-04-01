import { Link } from "react-router-dom"



export function NotFound() {
    return (
        <div className="h-screen flex flex-col justify-center gap-2 items-center">
            <h1 className="text-5xl font-bol">Página não encontrada</h1>
            <p className="text-2xl">volta para a  {""}

                <Link className="text-green-700 dark:text-green-400 " to="/" >Home</Link>

            </p>
        </div>
    )
}