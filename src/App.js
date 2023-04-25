
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom'
import { Container} from 'react-bootstrap'
import { Header, Footer } from './Sections/index'
import { Home, Store} from './Pages/index'
import ShoppingCartProvider from "./context/ShoppingCartContext";


function App() {
  return (
    
    <ShoppingCartProvider>
    <Router>
    <Header />
    {/* <Container>  */}
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/store" element={<Store/>} /> 
                 
        </Routes>
     {/* </Container> */}
    <Footer />
    </Router>
    </ShoppingCartProvider>


  );
}

export default App;
