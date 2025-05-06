import { Link } from "react-router-dom";
import { usuarios } from "../../mock/usuarios";
export const Home = () => {
  return (
    <>
      <h1>Home</h1>
      <section className="container">
        {usuarios.map((usurio) => (
          <Link to={`/usuario/${usurio.id}`} className="card" id={usurio.id}>
            <h2>{usurio.nome}</h2>
            <p>{usurio.email}</p>
          </Link>
        ))}
      </section>
    </>
  );
};
