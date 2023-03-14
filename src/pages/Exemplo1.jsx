import { useEffect, useState } from "react";
import Menu from "../components/Menu";


function Exemplo1() {
    const [count, setCount] = useState(0);
    const [count2, setCount2] = useState(0);

    useEffect(() => {
        document.title = `Você clicou ${count} vezes`;
    }, [count2]);

    return (
        <div>
            <Menu />
            <div className="bg-slate-200 h-screen w-screen flex flex-col justify-center items-center">
                <h1>Contagem: {count}</h1>
                <button className="bg-blue-900 rounded hover:bg-blue-700 text-white font-bold py-2 px-4 mt-2" onClick = { () => {
                    setCount(count + 1)
                    if(count>=40) setCount(0);
                }}>
                Clique Aqui
                </button>
                <button className="bg-green-900 rounded hover:bg-green-700 text-white font-bold py-2 px-4 mt-2" onClick = { () => {
                    setCount2(count2 + 1)
                    if(count2>=40) setCount2(0);
                }}>
                Clique Aqui
                </button>
            </div>
        </div>
    );
}

export default Exemplo1;