import { useParams } from "react-router-dom";
import { usuarios } from "../../mock/usuarios";

export const Usuario = () => {
  const { id } = useParams();
  const usuario = usuarios.filter((user) => user.id == id);
  return (
    <>
      <section className="usuario">
        <h1>Usuario</h1>
        <h2>Nome: {usuario[0].nome}</h2>
        <p>Email: {usuario[0].email}</p>
      </section>
    </>
  );
};
