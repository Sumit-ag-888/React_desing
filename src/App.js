import './App.scss';
import Routes from "./Routes"
import "../node_modules/bootstrap/dist/js/bootstrap";
import "react-toastify/dist/ReactToastify.css";
import CountContextprovider from './context/CountContext';

function App() {
  return (
    <CountContextprovider >
   <Routes/>
    </CountContextprovider>
 
  );
}

export default App;
