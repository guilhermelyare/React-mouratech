import React from 'react';

class Timer extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = { seconds: 0 };
    }

    contar() {
        this.setState(state => ({
          seconds: state.seconds + 1
        }));
    }

    componentDidMount() {
        this.interval = setInterval(() => this.contar(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    startStop() {
        if(this.interval==null) {
            this.interval = setInterval(() => this.contar(), 1000);
        } else {
            clearInterval(this.interval);
        }
    }
    
    render() {
    return (
        <>
        <div className='bg-black w-16 h-16 m-4 rounded-xl flex flex-col justify-center items-center'>
            <h1 className="text-3xl font-bold  text-azulEscuro cronometro">
            {this.state.seconds}
            </h1>
        </div>
        <button onClick={this.startStop()} className='bg-azulEscuro text-white m-4 p-2 rounded-lg'>Inciar/parar</button>
        <button className='bg-red-500 text-white m-4 p-2 rounded-lg'>zerar</button>
        </>
    );
    }
}

export default Timer;