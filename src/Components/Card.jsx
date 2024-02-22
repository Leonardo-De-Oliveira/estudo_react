// componentes funcionais

import { useEffect, useState } from 'react';
import exemplo from '../assets/ex_comp_classe.jpg';
import './styles.css';

function Card() {

    const [count, setCount] = useState(0)
    const [count2, setCount2] = useState(0)

    useEffect(() => {
        //funciona como a função componentDidUpdate() só atualiza a DOM quando 
        // a variavel de estado count2 é atualizada
        console.log(`Atualizou o componente, variavel de estado count2`)
    }, [count2])

    useEffect(() => {
        //funciona como a função componentDidMount()
        console.log('montagem do componente')


        //funciona como  a função componentWillUnMount()
        return () => {
            console.log('Desmontagem do componente')
        };

    }, []);

    return (
        <div>
            <img
                className='foto'
                src={exemplo}
                alt='foto com exemplos' />
            
            <p>imagem acima mostra em uma imagem a sequencia em que as funções sao chamadas em componente de classe</p>
            <h2>{count2}</h2>
            <button onClick={() => setCount2(count2 + 1)}>somar</button>
        </div>
    );
}

export default Card;



/*

exemplo abaixo em componentes de classes

import React, { Component } from 'react';
import exemplo from '../assets/ex_comp_classe.jpg';
import './styles.css';

class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            count2: 0
        };
    }

    componentDidMount() {
        console.log('Montagem do componente');
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.count2 !== this.state.count2) {
            console.log('Atualizou o componente, variável de estado count2');
        }
    }

    componentWillUnmount() {
        console.log('Desmontagem do componente');
    }

    render() {
        const { count2 } = this.state;
        return (
            <div>
                <img
                    className='foto'
                    src={exemplo}
                    alt='Foto com exemplos' />

                <h2>{count2}</h2>
                <button onClick={() => this.setState({ count2: count2 + 1 })}>Somar</button>
            </div>
        );
    }
}

export default Card;

*/
