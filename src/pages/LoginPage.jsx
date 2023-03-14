import React from "react";
import Menu from "../components/Menu";

function LoginPage(){
    return (
        <div>
            <Menu />
            <div className="bg-slate-200 h-screen flex flex-col justify-center items-center">
                <img src="/img/logo.png"></img>
                <h1 className="text-3xl font-bold mt-3 mb-5">Entre com sua conta</h1>
                <form className="flex flex-col w-1/3">
                    <input className="border rounded py-2 px-3 my-2 text-gray-700" type="text" placeholder="Email"></input>
                    <input className="border rounded py-2 px-3 text-gray-700 " type="text" placeholder="Senha"></input>
                    <a className="inline-block align-baseline text-sm font-medium text-blue-800 hover:text-blue-700 text-end mt-5 mb-6" href="#">Esqueceu a senha?</a>
                    <button className="bg-blue-900 rounded hover:bg-blue-700 text-white font-bold py-2 px-4" type="button">Entrar</button>
                </form>
            </div>
        </div>
    );
}

export default LoginPage;
