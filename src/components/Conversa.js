import React, { Component } from 'react';
import { View, Text, TextInput, TouchableHighlight, ListView } from 'react-native';
import { Icon } from 'native-base';
import { connect } from 'react-redux';
import _ from 'lodash';
import { modificaMensagem, enviarMensagem, conversaUsuarioFecth } from '../actions/AppActions';

class Conversa extends Component {


    componentWillMount() {
        this.props.conversaUsuarioFecth(this.props.contatoEmail);
        this.criaFonteDeDados(this.props.conversa);
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.contatoEmail != nextProps.contatoEmail) {
            this.props.conversaUsuarioFecth(nextProps.contatoEmail);
        }        
        this.criaFonteDeDados(nextProps.conversa);
    }

    criaFonteDeDados( conversa ) {
        const ds = new ListView.DataSource({ rowHasChanged:(r1, r2) =>  r1 !== r2 })
        this.dataSource = ds.cloneWithRows( conversa );
    }

    renderRow(texto) {

        if (texto.tipo === 'e') {
            return (
                <View style={{ alignItems: 'flex-end', marginTop: 5, marginBottom: 5, marginLeft: 40 }} >
                    <Text style={{ fontSize: 16, color: '#000', padding: 10, backgroundColor: '#dbf5b4', elevation: 1 }} >{texto.mensagem}</Text>
                </View>
            )
        }

        return (
            <View style={{ alignItems: 'flex-start', marginTop: 5, marginBottom: 5, marginRight: 40 }} >
                <Text style={{ fontSize: 16, color: '#000', padding: 10, backgroundColor: '#f7f7f7', elevation: 1 }} >{texto.mensagem}</Text>
            </View>
    )
    }

    _enviarMensagem() {
        const { mensagem, contatoNome, contatoEmail } = this.props;

        this.props.enviarMensagem(mensagem, contatoNome, contatoEmail);
    }

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#eee4dc', padding: 10 }} >
                <View style={{ flex: 1, paddingBottom: 20 }} >
                    <ListView 
                        enableEmptySections
                        dataSource={this.dataSource}
                        renderRow={this.renderRow}
                    />
                </View>
                <View style={{ flexDirection: 'row', height: 45, alignItems: 'center' }} >
                    <TextInput 
                        value={this.props.mensagem}
                        onChangeText={texto => this.props.modificaMensagem(texto)}
                        style={{ flex: 4, backgroundColor: 'white', fontSize: 15 }}
                    />

                    <TouchableHighlight
                        style={{
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: 45,
                            height: 45,
                            backgroundColor: '#42a5f5',
                            borderRadius: 45,
                            marginLeft: 5                            
                        }}  
                        activeOpacity={ 0.3 }             
                        underlayColor={'#42a5f5'}
                        onPress={ this._enviarMensagem.bind(this) }
                    >
                        <Icon name="send" style={{ fontSize: 26, marginLeft: 10, color: 'white' }} />
                    </TouchableHighlight>
                    

                </View>
            </View>
        );
    }
}

mapStateToProps = state => {

    const conversa = _.map(state.ListaConversaReducer, (val, uid) => {
        return { ...val, uid };
    });

    return ({
        conversa,
        mensagem: state.AppReducer.mensagem
    })
}

export default connect(mapStateToProps, { modificaMensagem, enviarMensagem, conversaUsuarioFecth })(Conversa);