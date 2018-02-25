import React, { Component } from 'react';
import { View, Text, TextInput, Button, TouchableHighlight, Image, ActivityIndicator } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { modificaEmail, modificaSenha, autenticarUsuario } from '../actions/AutenticacaoActions';

const imageLogo = require('../imgs/logoblue.png');

class formLogin extends Component {   
    
    _autenticarUsuario(){
        const { email, senha } = this.props;
        this.props.autenticarUsuario({ email, senha });
    }

    renderBtnAcessar(){
        if (this.props.loadingLogin) {
            return (
                <ActivityIndicator size='large' />
            );
        }

        return (
            <Button color='#42a5f5' title="Acessar" onPress={() => this._autenticarUsuario()} />            
        );
    }

    render(){
        return (
            <View 
                style={{ flex: 1, backgroundColor: '#FFF' }} 
            >
                <View style={{ flex: 1, padding: 10, marginTop: 60 }}  >
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} >
                        <Image source={require=(imageLogo)} style={{ height: 115, width: 115 }} />                        
                    </View>        
                    <View style={{ flex: 2, marginTop: 30 }} >
                        <TextInput value={this.props.email} style={{ fontSize: 20, height: 45 }} 
                            placeholder="E-mail" 
                            placeholderTextColor='#bdbdbd'
                            onChangeText={texto => this.props.modificaEmail(texto)}
                        />
                        <TextInput value={this.props.senha} style={{ fontSize: 20, height: 45 }} 
                            placeholder="Senha" 
                            placeholderTextColor='#bdbdbd'
                            secureTextEntry
                            onChangeText={texto => this.props.modificaSenha(texto)}                
                        />
                        <Text style={{ fontSize: 15, color: '#FF0000' }} >
                            {this.props.errorLogin}
                        </Text>
                        <View style={{ justifyContent: 'center', alignItems: 'center' }} >
                            <TouchableHighlight 
                                activeOpacity = {0.3}
                                underlayColor = {'white'}                    
                                onPress={() => Actions.formCadastro() }
                            >
                                <Text style={{ fontSize: 14, fontWeight: 'bold', color: '#8d8d8d' }}  > Ainda não tem cadastro? Cadastre-se </Text>
                            </TouchableHighlight>
                        </View>
                    </View>
        
                    <View style={{ flex: 2 }} >
                        {this.renderBtnAcessar()}
                    </View>
                    
                </View>
            </View>
        );
    }    
};

const mapStateToProps = state => (
    {
        email: state.AutenticacaoReducer.email,
        senha: state.AutenticacaoReducer.senha,
        errorLogin: state.AutenticacaoReducer.errorLogin,
        loadingLogin: state.AutenticacaoReducer.loadingLogin
    }
)

export default connect(mapStateToProps, { modificaEmail, modificaSenha, autenticarUsuario })(formLogin);