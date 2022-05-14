import AnimatedRoutes from './Components/AnimatedRoutes';
import Footer from './Components/Footer/Footer';
import NavBar from './Components/Header/TopNav/NavBar'
import "react-toastify/ReactToastify.min.css";

function App() {
  return (
    <>
      <NavBar />
      <AnimatedRoutes />
      <Footer />
      </>
  );
}

export default App;
