import { Outlet } from "react-router-dom";
import NavBar from "./pages/Shared/NabBar/NavBar";

function App() {

  

  return (
    <div className="min-h-[200vh]">
      <NavBar/>
      <Outlet></Outlet>
    </div>
  )
}

export default App
