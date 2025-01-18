import { useState } from "react";
import { Header } from "../../components/header"
import { Navbar } from "../../components/navbar"
import { Input } from "../../components/input";
import { Button } from "../../components/button";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import {generateRandomId} from "../../validators/generateUserId";
export const NewClient = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [phone, setPhone] = useState("");
    const navigate = useNavigate();
    function handleSubmit(e) {
        e.preventDefault();
        const clients = JSON.parse(localStorage.getItem('clients')) || [];
        if(!name || !email || !address || !phone) return toast.error("Preencha todos os campos");

        const newClient = {
            id:generateRandomId(),
            name,
            email,
            address,
            phone,
            createdAt: new Date().toLocaleDateString(),
        };
        clients.push(newClient);
        localStorage.setItem('clients', JSON.stringify(clients));
        toast.success("Cliente cadastrado com sucesso");
        navigate('/cliente');
        setName("");
        setEmail("");
        setAddress("");
        setPhone("");

    }
    return <>
        <div className="grid grid-cols-1 grid-rows-[100px_1fr_100px] w-screen h-screen">
            <Header element={{
                title: "Cadastre um novo cliente",
                back: "/cliente",
            }} />
            <form className="flex flex-col items-center justify-center w-full gap-4 px-8" onSubmit={handleSubmit}>
                <h1 className="text-3xl">Novo Cliente</h1>
                <Input
                    type="text"
                    placeholder="Nome"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <Input
                    type="email"
                    placeholder="E-mail"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <Input
                    type="text"
                    placeholder="Endereço"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                />
                <Input
                    type="text"
                    placeholder="Telefone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                />
                <Button
                    className={"w-full bg-blue-500 text-white py-2 rounded-md"}
                >Cadastrar</Button>
            </form>
            <Navbar />
        </div>
    </>
}