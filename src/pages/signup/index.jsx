import { useState } from "react";
import { Button } from "../../components/button";
import { Input } from "../../components/input";
import logo from '../../images/logo.png';
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";



export const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault();
        const users = JSON.parse(localStorage.getItem('users')) || [];
        const userExists = users.find((user) => user.email === email);

        if (!email || !password || !confirmPassword) return toast.error('Preencha todos os campos');
        if (userExists) {
            toast.error('Email already exists');
        } else if (password !== confirmPassword) {
            toast.error('Passwords do not match');
        } else {
            const newUser = {
                email: email,
                password: password,
            }
            users.push(newUser);
            localStorage.setItem('users', JSON.stringify(users));
            toast.success('Usuário cadastrado com sucesso');
            navigate('/');
        }
    }
    return <>
        <div className='w-screen h-screen bg-gray-100 flex flex-col gap-8 justify-center'>
            <div className="w-screen flex justify-center ">
                <img src={logo} alt="" className='w-40' />
            </div>
            <form className='w-full flex flex-col items-center justify-center px-10 gap-2' onSubmit={handleSubmit}>
                <Input
                    placeholder='E-mail'
                    // label='E-mail'
                    id='email'
                    type='text'
                    value={email}
                    onChange={
                        (e) => setEmail(e.target.value)
                    }
                />
                <Input
                    placeholder='Senha'
                    // label='Password'
                    id='senha'
                    type='password'
                    value={password}
                    onChange={
                        (e) => setPassword(e.target.value)
                    }
                />
                <Input
                    placeholder='Confirmar senha'
                    // label='Confirmar senha '
                    id='password'
                    type='password'
                    value={confirmPassword}
                    onChange={
                        (e) => setConfirmPassword(e.target.value)
                    }
                />

                <Button
                    className='w-full bg-blue-500 text-white py-2 rounded-md'
                >Cadastrar</Button>
                <Link to='/' className='text-blue-500'>Já tem conta? clique aqui</Link>
            </form>
        </div>
    </>
}