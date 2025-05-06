import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "../layout";
import { Home } from "../pages/Home";
import { Contact } from "../pages/Contact";
import { About } from "../pages/About";
import { Page404 } from "../pages/Page404";
import { Usuario } from "../pages/Usuario";

export const App_routes = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/contato" element={<Contact />} />
            <Route path="/sobre" element={<About />} />
            <Route path="/usuario/:id" element={<Usuario />}/>
            <Route path="*" element={<Page404 />}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};
