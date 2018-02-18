import React from 'react';
import { View, Button, TextInput, ImageBackground } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'redux';
import { modificaEmail, modificaSenha, modificaNome } from '../actions/AutenticacaoActions';

const imageFundo = require('../imgs/bg.png');

const formCadastro = props => (
    <ImageBackground style={{ flex: 1, padding: 10 }} source={imageFundo} >
        <View style={{ flex: 4, justifyContent: 'center' }} >
            <TextInput value={props.nome} style={{ fontSize: 20, height: 45 }} placeholder="Nome" 
                onChangeText={texto => props.modificaNome(texto)}
            />
            <TextInput value={props.email} style={{ fontSize: 20, height: 45 }} placeholder="E-mail" 
                onChangeText={texto => props.modificaEmail(texto)}
            />
            <TextInput value={props.senha} style={{ fontSize: 20, height: 45 }} placeholder="Senha" 
                secureTextEntry
                onChangeText={texto => props.modificaSenha(texto)}
            />
        </View>

        <View style={{ flex: 1 }} >
            <Button title="Cadastrar" onPress={() => false} />
        </View>
    </ImageBackground>
);

const mapStateToProps = state => (
    {
        nome: state.AutenticacaoReducer.nome,
        email: state.AutenticacaoReducer.email,
        senha: state.AutenticacaoReducer.senha
    }
)

export default connect(mapStateToProps, { modificaEmail, modificaSenha, modificaNome })(formCadastro);

