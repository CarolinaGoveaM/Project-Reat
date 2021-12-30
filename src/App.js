// import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import ItemListContainer from './Components/ItemList/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetail/ItemDetailContainer';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Cart from './Components/Cart/Cart';
import { CartContextProvider } from './Components/Context/CartContext';
import Dashboard from './Components/Dashboard';
import Form from './Components/Form';

function App() {
  return (
    <div className="App">
      <CartContextProvider>
        <BrowserRouter>
          <NavBar/>
          <Switch>

            <Route path= "/" exact>
              <ItemListContainer greeting="Scrunchies"/>
            </Route>

            <Route path= "/category/:categoryId">
              <ItemListContainer greeting="Productos"/>
            </Route>

            <Route path= "/product/:id">
              <ItemDetailContainer/>
            </Route>

            <Route path= "/cart">
              <Cart/>
            </Route>

            <Route path= "/form">
              <Dashboard/>
            </Route>

            <Route path= "/dashboard">
              <Form/>
            </Route>

          </Switch>
        </BrowserRouter>
      </CartContextProvider>
    </div>
  );
}

export default App;
