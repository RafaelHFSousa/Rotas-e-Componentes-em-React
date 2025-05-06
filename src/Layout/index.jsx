import { Link, Outlet } from "react-router-dom";
import "./style.css";

export const Layout = () => {
  return (
    <>
      <header>
        <h1><Link to={"/"}>Projeto</Link></h1>
        <nav>
          <ul>
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/sobre"}>Sobre</Link>
            </li>
            <li>
              <Link to={"/contato"}>Contato</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>Todos os direitos reservados</footer>
    </>
  );
};
