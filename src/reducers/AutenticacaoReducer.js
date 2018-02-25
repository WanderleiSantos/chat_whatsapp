import { MODIFICA_EMAIL, 
    MODIFICA_SENHA, 
    MODIFICA_NOME, 
    CADASTRO_USUARIO_SUCESSO, 
    CADASTRO_USUARIO_ERRO, 
    LOGIN_USUARIO_SUCESSO, 
    LOGIN_USUARIO_ERRO,
    LOGIN_EM_ANDAMENTO,
    CADASTRO_EM_ANDAMENTO 
} from '../actions/types';

const INITIAL_STATE = {
    nome: '',
    email: '',
    senha: '',
    errorCadastro: '',
    errorLogin: '',
    loadingLogin: false,
    loadingCadastro: false
}

export default (state = INITIAL_STATE, action) => {
    
    switch(action.type) {
        case MODIFICA_EMAIL:
            return { ...state, email: action.payload };
            break;
        case MODIFICA_SENHA:
            return { ...state, senha: action.payload };
            break;
        case MODIFICA_NOME:
            return { ...state, nome: action.payload };
            break;
        case CADASTRO_USUARIO_ERRO:
            return { ...state, errorCadastro: action.payload, loadingCadastro: false };
            break;
        case CADASTRO_USUARIO_SUCESSO:
            return { ...state, nome: '', senha: '' };
            break;
        case LOGIN_USUARIO_ERRO:
            return { ...state, errorLogin: action.payload, loadingLogin: false };
            break;
        case LOGIN_EM_ANDAMENTO:
            return { ...state, loadingLogin: true };
            break;
        case CADASTRO_EM_ANDAMENTO:
            return { ...state, loadingCadastro: true };
            break;   
        case LOGIN_USUARIO_SUCESSO:
            return { ...state, ...INITIAL_STATE };
            break;                       
        default:
            return state;
    }
}