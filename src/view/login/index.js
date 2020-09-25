import React, { useState } from 'react';
import '../view.css';
import '../../global.css'
import '../../App.css'
import firebase from '../../database/firebase';
import 'firebase/auth';
import {Link} from 'react-router-dom';
import medsenior from '../objetos/medsenior-logo-primary.png';


function Login(){

    const[login_usuario, setLoginUsuario] = useState('');
    const[senha_usuario, setSenhaUsuario] = useState('');
    const [msgTipo, setMsgTipo] = useState();

      function logar(){
          firebase.auth().signInWithEmailAndPassword(login_usuario, senha_usuario).then(resultado => {
            setMsgTipo('sucesso')
          }).catch(erro =>{
            setMsgTipo('erro')
          })
      }
 

return (
<div id="app">

<main>
<div className="logo-medsenio">
        <img src={medsenior} width="170px" height="70px"></img>
    </div>
    <strong>Entrar</strong>
    <form >
    <div className="area-do-usuario">
        <input type="email" name="usuario_login" id="area-do-usuario" required onChange={e => setLoginUsuario(e.target.value)} placeholder="Email" />
        <input type="password" name="usuario_senha" id="area-do-usuario" required  onChange={e => setSenhaUsuario(e.target.value)} placeholder="Senha" />
    </div>


    <div className="input-group">
        <Link to='novousuario'><button type="button">Registrar</button></Link>
        <button onClick={logar} type="button">Entrar</button>
  </div>
</form>

<div className="msg-login">
    { msgTipo === 'sucesso' && <span id="msg"><strong>WOW!</strong>Você está conectado.</span> }
    { msgTipo === 'erro' &&    <span id="msg"><strong>OPS!</strong>Verifique se a senha ou usuário estão corretos.</span> }
</div>
</main>
</div>
  );
}
  export default Login;