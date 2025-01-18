import { FileText, UserCircle } from "lucide-react"
import { Link } from "react-router-dom"

export const Navbar = ({add}) => {
    return <>
        <div className="flex justify-between px-14 items-center w-full h-full shadow-md shadow-black border-t-4 text-cyan-700">
        <Link to={'/dashboard'}><FileText size={60} /></Link>
        {add && <Link to={'/nova-ordem'}
        className="flex flex-col text-6xl items-center justify-center rounded-full bg-amber-500 text-zinc-100 w-[100px] h-[100px] translate-y-[-30%] hover:scale-110 transition-transform duration-300">
            +
        </Link>}
        
        <Link to={'/cliente'}><UserCircle size={60} /></Link>
        </div>
    </>
}