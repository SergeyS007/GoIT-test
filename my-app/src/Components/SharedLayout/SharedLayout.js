import { Outlet } from "react-router-dom";
import "./SharedLayout.css";


export const SharedLayout = () => {
  return (
    <section className="container">
      <header className="header">
        
      </header>
      <Outlet />
    </section>
  );
};
