import logo from './logo.svg';
import './App.css';
import DisplayProduct from './components/DisplayProduct';
import AddProduct from './components/AddProduct';
import ViewOrders from './components/ViewOrders';

function App() {
  return (
    <div className="App">
     <AddProduct></AddProduct>
     <hr/>
     <DisplayProduct></DisplayProduct>
     <hr/>
     <ViewOrders></ViewOrders>
    </div>
  );
}

export default App;
