import Home from "./components/Home";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarComponent from "./components/Navbar";
import { RegisterPage } from "./components/RegisterPage";
import "./App.css";
import { LoginPage } from "./components/LoginPage";

function App() {
  return (
    <div>
      <NavbarComponent />
      {/* <Home /> */}
      {/* <RegisterPage /> */}
      <LoginPage />
      <Footer />
    </div>
  );
}

export default App;
