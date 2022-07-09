import { Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './App.css';

import Header from './Componets/Header/Header';
import FormLogin from './Container/Form/FormLogin';
import Home from './Container/Home/Home';
import { CartProvider } from 'react-use-cart';
import Cart from './Container/Cart/Cart';

function App() {

  return (
    <div className="App">
     <Header />
     <Switch>
      <CartProvider>
        <Route path={'/'} exact component={Home} />
        <Route path={'/cart'} exact component={Cart} />
        <Route path={'/form'} exact component={FormLogin} />
      </CartProvider>
     </Switch>
    </div>
  );
}

export default App;
