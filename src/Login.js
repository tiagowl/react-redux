import React from 'react';
import {useDispatch} from 'react-redux';
import {fetchToken} from './store/login';

// import { Container } from './styles';

function Login() {

    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");

    const dispatch = useDispatch();

    async function handleSubmit(event){
        event.preventDefault();
        dispatch(fetchToken({username, password}));
    }

  return(
      <form onSubmit={handleSubmit()}>
          <label htmlFor="">Usuário</label>
          <input type="text" value={username} onChange={(e)=>setUsername(e.target.value)} name="" id="" />
          <label htmlFor="">Senha</label>
          <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} name="" id="" />
          <button type="submit">Enviar</button>
      </form>
  );
}

export default Login;