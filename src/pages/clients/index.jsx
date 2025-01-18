import { Mail, Phone, User } from "lucide-react";
import { Header } from "../../components/header"
import { Navbar } from "../../components/navbar"

export const Client = () => {
    const clients = JSON.parse(localStorage.getItem('clients')) || false;
    return (
        <>
            <div className="grid grid-cols-1 grid-rows-[100px_1fr_100px] w-screen h-screen">
                <Header element={{
                    title: "Clientes",
                    back: "/dashboard",
                    add: "/novo-cliente"
                }} />
                <div className="flex flex-wrap gap-4 p-4 overflow-y-auto">
                    {clients &&
                        clients.map((client, index) => (
                            <div
                                key={index}
                                className="bg-white p-6 rounded-lg shadow-lg w-full max-w-sm transition-transform transform hover:scale-105 hover:shadow-xl"
                            >
                                <div className="flex items-center gap-4 mb-4">
                                    <User className="text-blue-500 w-6 h-6" />
                                    <h2 className="text-xl font-semibold text-gray-800">{client.name}</h2>
                                </div>
                                <div className="text-gray-600 space-y-2">
                                    <p className="flex items-center gap-2 text-sm">
                                        <Mail className="text-gray-500 w-5 h-5" />
                                        {client.email}
                                    </p>
                                    <p className="flex items-center gap-2 text-sm">
                                        <Phone className="text-gray-500 w-5 h-5" />
                                        {client.phone}
                                    </p>
                                </div>
                            </div>
                        ))}
                </div>
                <Navbar add={false} />
            </div>
        </>
    )
}