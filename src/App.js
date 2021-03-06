import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import Review from './components/Review/Review';
import ProductNotFound from './components/ProductNotFound/ProductNotFound';
import Inventory from './components/Inventory/Inventory'; 
import ProductDetail from './components/ProductDetail/ProductDetail';
import {  
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"; 


function App() {
  return (
    <div>
      <Header></Header>
      <Router>   
        <Switch>
            <Route path = '/shop'>
              <Shop></Shop>
            </Route>
            <Route path = '/review'>
              <Review></Review>
            </Route>
            <Route path = '/inventory'>
              <Inventory></Inventory>
            </Route>
            <Route path = '/product/:productKey'>
               <ProductDetail></ProductDetail>
            </Route>
            <Route exact path = '/'>
               <Shop></Shop>
            </Route>
            <Route path = '*'>
                <ProductNotFound></ProductNotFound>
            </Route> 
        </Switch> 
      </Router>
       
     
    </div>
  );
}

export default App;
