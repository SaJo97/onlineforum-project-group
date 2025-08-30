import { Outlet } from "react-router";
import Navbar from "../components/ui/Navbar";

const RootLayout = () => {
  //Lägger in navbar på alla sidor.
  return (
    <div className="App">
      <Navbar />
      <div>
        <Outlet />
      </div>
    </div>
  );
};
export default RootLayout;
