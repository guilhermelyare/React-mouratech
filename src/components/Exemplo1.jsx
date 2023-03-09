import React from 'react';
import ReactDOM from 'react-dom/client';

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
    
    render() {
    return (
        <div>
        Segundos: {this.state.seconds}
        </div>
    );
    }
}

export default Timer;