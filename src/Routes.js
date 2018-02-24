import React from 'react';
import { Router, Scene } from 'react-native-router-flux';

import FormLogin from './components/FormLogin';
import FormCadastro from './components/FormCadastro';
import BoasVindas from './components/BoasVindas';
import Principal from './components/Principal';
import AdicionarContato from './components/AdicionarContato';
import Conversa from './components/Conversa'

export default props => (
    <Router navigationBarStyle={{ backgroundColor: '#115E54' }} titleStyle={{ color: '#FFF' }} >
        <Scene key='app'>
            <Scene key='formLogin' component={FormLogin} title="Login" hideNavBar={ true } />
            <Scene key='formCadastro' component={FormCadastro} title="Cadastro" hideNavBar={ false } />
            <Scene key='boasVindas' component={BoasVindas} title="Bem Vindo" hideNavBar={ true } />
            <Scene key='principal' component={Principal} hideNavBar={ true } />
            <Scene key='addContato' component={AdicionarContato} title="Adicionar Contato" hideNavBar={ false } />
            <Scene key='conversa' component={Conversa} title="" hideNavBar={ false } />
        </Scene>
    </Router>
);
