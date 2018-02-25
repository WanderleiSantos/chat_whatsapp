import b64 from 'base-64';
import firebase from 'firebase';
import _ from 'lodash';

import { 
    MODIFICA_ADICIONA_CONTATO_EMAIL, 
    ADICIONA_CONTATO_ERRO,
    ADICIONA_CONTATO_SUCESSO,
    LISTA_CONTATO_USUARIO,
    MODIFICA_MENSAGEM,
    LISTA_CONVERSA_USUARIO,
    ENVIA_MENSAGEM_SUCESSO,
    LISTA_CONVERSAS_USUARIO 
} from './types';

export const modificaAdicionaContatoEmail = (texto) => {
    return {
        type: MODIFICA_ADICIONA_CONTATO_EMAIL,
        payload: texto
    }
}

export const adicionaContato = email => {

    return dispatch => {
        let email64 = b64.encode(email);

        firebase.database().ref(`/contatos/${email64}`)
            .once('value')
            .then(snapshot => {
                if (snapshot.val()){
                    const dadosUsuario = _.first(_.values(snapshot.val()));
                    const { currentUser } = firebase.auth();
                    let emailUsuario64 = b64.encode(currentUser.email);

                    firebase.database().ref(`/usuario_contatos/${emailUsuario64}`)
                        .push({ email, nome: dadosUsuario.nome })
                        .then(() => adicionaContatoSucesso(dispatch))
                        .catch(erro =>  adicionaContatoErro(erro.message, dispatch))

                } else {
                    dispatch({
                        type: ADICIONA_CONTATO_ERRO,
                        payload: 'E-mail inválido'
                    })
                }
                
            })         
    }
}

const adicionaContatoErro = (erro, dispatch) => (
    dispatch ({
        type: ADICIONA_CONTATO_ERRO,
        payload: erro
    })    
)

const adicionaContatoSucesso = dispatch => {
    dispatch ({
        type: ADICIONA_CONTATO_SUCESSO,
        payload: true
    })
}

export const habilitaContatoInclusao = () => {
    return {
        type: ADICIONA_CONTATO_SUCESSO,
        payload: false       
    }
}

export const contatosUsuarioFetch = () => {
    const { currentUser } = firebase.auth();

    return (dispatch) => {
        let emailUsuario64 = b64.encode(currentUser.email);

        firebase.database().ref(`/usuario_contatos/${emailUsuario64}`)
            .on("value", snapshot => {
                dispatch({
                    type: LISTA_CONTATO_USUARIO,
                    payload: snapshot.val()
                })
            })
    }
}

export const modificaMensagem = texto => {
    return ({
        type: MODIFICA_MENSAGEM,
        payload: texto
    })
}

export const enviarMensagem = (mensagem, contatoNome, contatoEmail) => {

    const { currentUser } = firebase.auth();
    const usuarioEmail = currentUser.email;

    return dispatch => {

        const usuarioEmail64 = b64.encode(usuarioEmail);
        const contatoEmail64 = b64.encode(contatoEmail);

        firebase.database().ref(`/mensagens/${usuarioEmail64}/${contatoEmail64}`)
            .push({ mensagem, tipo: 'e' })
            .then(() => {
                firebase.database().ref(`/mensagens/${contatoEmail64}/${usuarioEmail64}`)
                    .push({ mensagem, tipo: 'r' })
                    .then( () => dispatch({ type: ENVIA_MENSAGEM_SUCESSO }) )
            })
            .then( () => {
                firebase.database().ref(`/usuario_conversas/${usuarioEmail64}/${contatoEmail64}`)
                    .set({ nome: contatoNome, email: contatoEmail })
            })
            .then( () => {

                firebase.database().ref(`/contatos/${usuarioEmail64}`)
                    .once("value")
                    .then( snapshot => {
                        
                        const dadosUsuario = _.first(_.values(snapshot.val()));

                        firebase.database().ref(`/usuario_conversas/${contatoEmail64}/${usuarioEmail64}`)
                            .set({ nome: dadosUsuario.nome, email: usuarioEmail })  
                    })              
            })

    }
}

export const conversaUsuarioFecth = contatoEmail => {
    const { currentUser } = firebase.auth();

    let usuarioEmail64 = b64.encode(currentUser.email);
    let contatoEmail64 = b64.encode(contatoEmail);

    return dispatch => {
        firebase.database().ref(`/mensagens/${usuarioEmail64}/${contatoEmail64}`)
            .on("value", snapshot => {
                dispatch({ type: LISTA_CONVERSA_USUARIO, payload: snapshot.val() })
            })
    }
}

export const conversasUsuarioFetch = () => {
    
    const { currentUser } = firebase.auth();
    
    let usuarioEmail64 = b64.encode(currentUser.email);
    return dispatch => {
        firebase.database().ref(`/usuario_conversas/${usuarioEmail64}`)
            .on("value", snapshot => {
                dispatch({ type: LISTA_CONVERSAS_USUARIO, payload: snapshot.val() })
            })
    }
}