import React, { Component } from 'react';
import { View, Button, TextInput, Image, Text, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'redux';
import { 
    modificaEmail, 
    modificaSenha, 
    modificaNome, 
    cadastraUsuario 
} from '../actions/AutenticacaoActions';

const imageLogo = require('../imgs/logoblue.png');

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
            <Button color='#42a5f5' title="Cadastrar" onPress={() => this._cadastraUsuario()} />
        );
    }

    render() {
        return (
            <View style={{ flex: 1, padding: 10, backgroundColor: '#FFF' }} >
                <View style={{ flex: 4, justifyContent: 'center' }} >
                    <View style={{ justifyContent: 'center', alignItems: 'center', marginBottom: 30 }}  >
                        <Image source={require=(imageLogo)} style={{ height: 115, width: 115 }} />                        
                    </View>

                    <TextInput 
                        style={{ fontSize: 20, height: 45 }} 
                        value={this.props.nome} 
                        placeholder="Nome" 
                        placeholderTextColor='#bdbdbd'
                        onChangeText={texto => this.props.modificaNome(texto)}
                    />
                    <TextInput 
                        style={{ fontSize: 20, height: 45 }} 
                        value={this.props.email} 
                        placeholder="E-mail" 
                        placeholderTextColor='#bdbdbd'
                        onChangeText={texto => this.props.modificaEmail(texto)}
                    />
                    <TextInput 
                        style={{ fontSize: 20, height: 45 }} 
                        value={this.props.senha}
                        placeholder="Senha" 
                        placeholderTextColor='#bdbdbd'
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
            </View>
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

