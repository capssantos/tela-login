import React, { useState } from 'react';
import '../view.css';
import '../../global.css';
import '../../App.css';
import firebase from '../../database/firebase';
import 'firebase/auth';
import {Link} from 'react-router-dom';
import medsenior from '../objetos/medsenior-logo-primary.png';


function Cadastro(){

    const [login_usuario, setLoginUsuario] = useState('');
    const [senha_usuario, setSenhaUsuario] = useState('');
    const [msgTipo, setMsgTipo] = useState();
    const [msg, setMsg] = useState();
    const [carregando, setCarregando] = useState();

    function cadastrar(){

        setCarregando(1);

        setMsgTipo(null);

        if(!login_usuario || !senha_usuario){
            setMsgTipo('erro');
            setMsg('Voce precisa informa email e senha para fazer o cadastro.');
            return;
        }
        firebase.auth().createUserWithEmailAndPassword(login_usuario, senha_usuario).then(resultado =>{
            setCarregando(0);
            setMsgTipo('sucesso')
        }).catch(erro =>{
            setCarregando(0);
            setMsgTipo('erro')
            switch(erro.message){
                case 'Password should be at least 6 characters':
                    setMsg('A senha deve ter pelo menos 6 caracteres!');
                    break;
                case 'The email address is already in use by another account.':
                    setMsg('Este email já está sendo utilizado por outro usuário');
                    break;
                case 'The email address is badly formatted.':
                    setMsg('O formato do email é inválido!');
                    break;
                default:
                    setMsg('Não foi possível cadastrar. Tente novamente mais tarde!');
                    break;
                }
        })
    }

return (

<div id="app">

<main>

    <div className="logo-medsenio">
        <img src={medsenior} width="170px" height="70px"></img>
    </div>
    
    <strong>Registar</strong>
    <form >
    <div className="area-do-usuario">
        <input type="email" name="usuario_login" id="area-do-usuario" required onChange={e => setLoginUsuario(e.target.value)} placeholder="Email" />
        <input type="password" name="usuario_senha" id="area-do-usuario" required  onChange={e => setSenhaUsuario(e.target.value)} placeholder="Senha" />
    </div>

    <div className="input-group">
        <Link to='/'><button type="button">Voltar</button></Link>
        {
          carregando ? <span className="load">Loading...</span> : <button onClick={cadastrar} type="button">Cadastrar</button>  
        }   
    </div>
    </form>

    <div className="msg-login">
            { msgTipo === 'sucesso' && <span className="msg"><strong>WOW!</strong>Usuário Cadastrado com Sucesso. Volte e realize o Login! :)</span> }
            { msgTipo === 'erro' && <span className="msg"><strong>OPS! {msg}</strong></span>}
    </div>
</main>
</div>
  );
}
  export default Cadastro;