import { useState } from 'react';
import { Input } from '../../components/input';
import { Button } from '../../components/button';
import logo from '../../images/logo.png';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
export const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const users = JSON.parse(localStorage.getItem('users')) || [];
        const user = users.find(user => user.email === email && user.password === password);
        if (user) {
            toast.success('Logado com sucesso');
            navigate('/dashboard');
        } else {
            toast.error('Email ou senha invalidos');
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
                    // label='Email'
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
                    id='password'
                    type='password'
                    value={password}
                    onChange={
                        (e) => setPassword(e.target.value)
                    }
                />

                <Button
                    className='w-full bg-blue-500 text-white py-2 rounded-md'
                >Logar</Button>
                <Link to='/signup' className='text-blue-500'>Ainda não tem conta? clique aqui</Link>
            </form>
        </div>
    </>
}