import { Link } from "react-router-dom";
import { Header } from "../../components/header"
import { Navbar } from "../../components/navbar"
import { AlertTriangle, Briefcase, Calendar, CheckCircle, User } from "lucide-react";

export const Dashboard = () => {
    const orders = JSON.parse(localStorage.getItem('orders')) || false;

    return (
        <>
            <div className="grid grid-cols-1 grid-rows-[100px_1fr_100px] w-screen h-screen">
                <Header element={{
                    title: "Ordem de Serviço",
                }} />
                <div className="grid grid-cols-1 grid-rows-[1fr] gap-2 p-4 overflow-y-auto">
                    {orders &&
                        orders.map((order, index) => (
                            <Link
                                key={index}
                                to={`/ordem/${order.id}`}
                                className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl"
                            >
                                <div className="flex items-center justify-between mb-2">
                                    <h2 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
                                        <Briefcase className="text-blue-500" /> Ordem de Serviço {index +1}
                                    </h2>
                                    {order.status === "Finalizado" ? (
                                        <CheckCircle className="text-green-500" />
                                    ) : (
                                        <AlertTriangle className="text-yellow-500" />
                                    )}
                                </div>
                                <div className="text-gray-600 space-y-1">
                                    <p className="flex items-center gap-2">
                                        <User className="text-gray-500" /> Cliente: {order.name}
                                    </p>
                                    <p className="flex items-center gap-2">
                                        <Briefcase className="text-gray-500" /> Serviço: {order.service}
                                    </p>
                                    <p className="flex items-center gap-2">
                                        <Calendar className="text-gray-500" /> Aberta em: {order.date}
                                    </p>
                                </div>
                            </Link>
                        ))}

                </div>
                <Navbar add={true} />
            </div>

        </>
    )
}