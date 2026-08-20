import { useEffect, useState } from "react";
import "./style.css";
import Trash from "../../assets/trash.svg";
import api from '../../services/api'

function Home() {
  const [users, setUsers] = useState([])

  async function getUsers(){
    const usersFrom = await api.get('/usuarios')

    users = usersFrom.data

    console.log(users)
  }

  useEffect(() => {
    getUsers()
  }, [])
  

  return (
    <>
      <div className="container">
        <form action="">
          <h1>Cadastro de Usuários</h1>
          <input placeholder="Nome" name="nome" type="text" />
          <input placeholder="Idade" name="idade" type="number" />
          <input placeholder="E-mail" name="email" type="email" />
          <button type="button">Cadastrar</button>
        </form>

        {users.map((user) => (
          <div key={user.id} className="card">
            <div>
              <p>Nome: <span>{user.name}</span></p>
              <p>Idade: <span>{user.age}</span></p>
              <p>Email: <span>{user.email}</span></p>
            </div>
            <button>
              <img src={Trash} className="imgButton" />
            </button>
          </div>
        ))}
      </div>
    </>
  );
}

export default Home;
