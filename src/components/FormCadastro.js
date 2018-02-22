import React, { Component } from 'react';
import { View, Button, TextInput, ImageBackground, Text, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'redux';
import { 
    modificaEmail, 
    modificaSenha, 
    modificaNome, 
    cadastraUsuario 
} from '../actions/AutenticacaoActions';

const imageFundo = require('../imgs/bg.png');

class formCadastro extends Component {

    _cadastraUsuario() {
        const { nome, email, senha } = this.props;
        this.props.cadastraUsuario({ nome, email, senha });
    }

    renderBtnCadastrar() {

        if ( this.props.loadingCadastro ) {
            return (
                <ActivityIndicator size="large" />
            );
        }
        
        return (
            <Button color='#115E54' title="Cadastrar" onPress={() => this._cadastraUsuario()} />
        );
    }

    render() {
        return (
            <ImageBackground style={{ flex: 1, padding: 10 }} source={imageFundo} >
                <View style={{ flex: 4, justifyContent: 'center' }} >
                    <TextInput 
                        style={{ fontSize: 20, height: 45 }} 
                        value={this.props.nome} 
                        placeholder="Nome" 
                        placeholderTextColor='#FFF'
                        onChangeText={texto => this.props.modificaNome(texto)}
                    />
                    <TextInput 
                        style={{ fontSize: 20, height: 45 }} 
                        value={this.props.email} 
                        placeholder="E-mail" 
                        placeholderTextColor='#FFF'
                        onChangeText={texto => this.props.modificaEmail(texto)}
                    />
                    <TextInput 
                        style={{ fontSize: 20, height: 45 }} 
                        value={this.props.senha}
                        placeholder="Senha" 
                        placeholderTextColor='#FFF'
                        secureTextEntry
                        onChangeText={texto => this.props.modificaSenha(texto)}
                    />
                    <View style={{ justifyContent: 'center', alignItems: 'center' }} >
                        <Text style={{ fontSize: 15, color: '#FF0000', fontWeight: 'bold' }} > { this.props.errorCadastro } </Text>
                    </View>
                </View>
        
                <View style={{ flex: 1 }} >
                    {this.renderBtnCadastrar()}
                </View>
            </ImageBackground>
        );
    }
};

const mapStateToProps = state => (
    {
        nome: state.AutenticacaoReducer.nome,
        email: state.AutenticacaoReducer.email,
        senha: state.AutenticacaoReducer.senha,
        errorCadastro: state.AutenticacaoReducer.errorCadastro,
        loadingCadastro: state.AutenticacaoReducer.loadingCadastro
    }
)

export default connect(mapStateToProps, { modificaEmail, modificaSenha, modificaNome, cadastraUsuario })(formCadastro);

