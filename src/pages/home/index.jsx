import "./style.css";
import Trash from "../../assets/trash.svg";

function Home() {
  const users = [
    {
      id: "1231j2hn3j1",
      name: "Rodolfo",
      age: 33,
      email: "rod@email.com",
    },
    {
      id: "adad12312341",
      name: "Fernanda",
      age: 45,
      email: "ferfer@email.com",
    },
    {
      id: "ad123ady2",
      name: "Aline",
      age: 23,
      email: "alineuau@email.com",
    },
  ];

  return (
    <>
      <div className="container">
        <form action="">
          <h1>Cadastro de Usuários</h1>
          <input name="nome" type="text" />
          <input name="idade" type="number" />
          <input name="email" type="email" />
          <button type="button">Cadastrar</button>
        </form>

        {users.map((user) => (
          <div key={user.id}>
            <div>
              <p>Nome: {user.name}</p>
              <p>Idade: {user.age}</p>
              <p>Email: {user.email}</p>
            </div>
            <button>
              <img src={Trash} />
            </button>
          </div>
        ))}
      </div>
    </>
  );
}

export default Home;
