import {  useState } from "react";
import { Button } from "../../components/button"
import { Header } from "../../components/header"
import { Navbar } from "../../components/navbar";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { generateRandomId } from "../../validators/generateUserId";

export const NewOrder = () => {
    const [name, setName] = useState("");
    const [service, setService] = useState("");
    const navigate = useNavigate();
    const clientes = JSON.parse(localStorage.getItem('clients')) || [];
    const orders = JSON.parse(localStorage.getItem('orders')) || [];
    const typeService = ["Manutenção", "Instalação", "Venda"];
    function handleSubmit(e) {
        e.preventDefault();
        const newOrder = {
            id:generateRandomId(),
            name: name,
            service: service,
            typeService: typeService[service - 1],
            status: "Aberto",
            date: new Date().toLocaleDateString(),
        }
        orders.push(newOrder);
        localStorage.setItem('orders', JSON.stringify(orders));
        setName("");
        setService("");
        toast.success("Ordem de serviço cadastrada com sucesso");
        navigate("/dashboard");
    }
   
    return <>
    <div className="grid grid-cols-1 grid-rows-[100px_1fr_100px] w-screen h-screen">
                <Header element={{
                    title: "Cadastre uma nova ordem de serviço",
                    back: "/dashboard",
                }} />
                <form className="flex flex-col items-center justify-center w-full gap-4 px-8" onSubmit={handleSubmit}>
                    <h1 className="text-3xl">Formulário</h1>
                    <label className="w-full flex flex-col items-start gap-1">
                        <span>Selecione o cliente</span>
                        <select  className="w-full p-2 border border-gray-300 rounded-md" onChange={(e) => setName(e.target.value)}>
                            {clientes.map((client, index) => (
                                <option key={index} value={client.name}>{client.name}</option>
                                ))}

                        </select>
                    </label>
                    <label className="w-full flex flex-col items-start gap-1">
                        <span>Tipo de Serviço</span>
                        <select  className="w-full p-2 border border-gray-300 rounded-md" onChange={(e) => setService(e.target.value)}>
                            {typeService.map((service, index) => (
                                <option key={index} value={service}>{service}</option>
                                ))}

                        </select>
                    </label>
                    
                   
                    <Button
                        className={"w-full bg-blue-500 text-white py-2 rounded-md"}
                    >Cadastrar</Button>
                </form>
                <Navbar />
            </div>
    </>
}