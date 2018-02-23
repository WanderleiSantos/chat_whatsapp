import React, { Component } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { connect } from 'react-redux';
import { modificaAdicionaContatoEmail, adicionaContato } from '../actions/AppActions';

class AdicionarContato extends Component {

    renderAdicionaContato() {
        if (!this.props.cadastro_resultado_inclusao) {
            return (
                <View style={{ flex: 1 }} >
                    <View style={{ flex: 1, justifyContent: 'center' }} >
                        <TextInput
                            placeholder='E-mail'
                            style={{ fontSize: 18, height: 45 }}
                            value={this.props.adiciona_contato_email}
                            onChangeText={texto => this.props.modificaAdicionaContatoEmail(texto)}
                        />
                    </View>
                        
                    <View style={{ flex: 1 }} >
                        <Button 
                            title="Adicionar" 
                            color='#115E54' 
                            onPress={() => this.props.adicionaContato(this.props.adiciona_contato_email)} 
                        />
                        
                        <Text 
                            style={{ fontSize: 18, color:'#FF0000' }} 
                        > 
                            {this.props.cadastro_resultado_txt_erro} 
                        </Text>
                    </View>
                </View>                
            )
        }

        return (
            <View style={{ justifyContent: 'center', alignItems: 'center' }} >
                <Text 
                    style={{ fontSize: 20, color: '#115E42', fontWeight: 'bold' }} 
                > 
                    Cadastro realizado com sucesso! 
                </Text>
            </View>
        )
    }

    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', padding: 16 }} >
                { this.renderAdicionaContato() }
            </View>
        );
    }
};

const mapStateToProps = state => ({
    adiciona_contato_email: state.AppReducer.adiciona_contato_email,
    cadastro_resultado_txt_erro: state.AppReducer.cadastro_resultado_txt_erro,
    cadastro_resultado_inclusao: state.AppReducer.cadastro_resultado_inclusao
})

export default connect(mapStateToProps, { modificaAdicionaContatoEmail, adicionaContato })(AdicionarContato);