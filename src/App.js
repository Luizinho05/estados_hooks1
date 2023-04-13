import React, { useState } from 'react'
import Contador from './Contador'
import './estilo.app.css'

function App() {

  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const [sexo, setSexo] = useState('')

  function handleCSadastro(){
    alert(`Nome: ${nome} \nEmail: ${email} \nSenha: ${senha} \nSexo: ${sexo}`)
  }

  return (
    <div className='contador'>
      <div>
        <h1>Estados com Hooks</h1>
        <form onSubmit={ handleCSadastro }>
          <label>Nome: </label>
          <input type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          /><br />
          <label>E-mail: </label>
          <input type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          /><br />
          <label>Senha: </label>
          <input type="password"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          /><br />
          <select
          value={sexo}
          onChange={(e) => setSexo( e.target.value )}>
          <option value=''></option>
          <option value='feminino'>Feminino</option>
          <option value='masculino'>Masculino</option>
          </select><br />
          <button type="submit">Enviar</button>
        </form>
      </div>
      <div>
        <Contador />
      </div>
    </div>
  );
}
export default App;