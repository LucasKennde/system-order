import { ChevronLeft, Plus } from "lucide-react"
import { Link } from "react-router-dom"

export const Header = ({ element }) => {
    return <> 
        <header className="shadow-xl flex justify-between items-center px-4 py-2 bg-cyan-700 text-zinc-100">
            <div>{element.back && <Link to={element.back} className="text-lg font-bold"><ChevronLeft size={50} /></Link>}</div>
            <h1 className="text-xl ">{element.title}</h1>

            <div>{element.add && <Link to={element.add}><Plus size={50}/></Link> } </div>
        </header>
    </>
}