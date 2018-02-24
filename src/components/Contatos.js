import React, { Component } from 'react';
import { View, Text, ListView, TouchableHighlight } from 'react-native';
import { connect } from 'react-redux';
import { contatosUsuarioFetch } from '../actions/AppActions';
import _ from 'lodash';
import { Actions } from 'react-native-router-flux';

class Contatos extends Component {

    componentWillMount() {
        this.props.contatosUsuarioFetch();
        this.criaFonteDados(this.props.contatos);
    }

    componentWillReceiveProps(nextProps) {
        this.criaFonteDados(nextProps.contatos);
    }

    criaFonteDados( contatos ) {
        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        this.fonteDados =ds.cloneWithRows(contatos)        
    }

    renderRow(contato) {
        return (
            <TouchableHighlight 
                activeOpacity = {0.3}
                underlayColor = {'#CCC'}                
                onPress={() => Actions.conversa()}
            >
                <View style={{ flex: 1, padding: 20, borderBottomWidth: 1, borderColor: '#CCC' }} >
                    <Text style={{ fontSize: 25, fontWeight: 'bold' }} > {contato.nome} </Text>
                    <Text style={{ fontSize: 18 }} > {contato.email} </Text>
                </View>
            </TouchableHighlight>

        )
    }

    render() {
        return (
            <ListView 
                enableEmptySections
                dataSource={this.fonteDados}
                renderRow={this.renderRow}
            />
        );
    }
}

mapStateToProps = state => {
    const contatos = _.map(state.ListaContatoReducer, (val, uid) => {
        return { ...val, uid }
    })
    return { contatos }
}

export default connect(mapStateToProps, { contatosUsuarioFetch })(Contatos);