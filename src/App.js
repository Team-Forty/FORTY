import './App.css';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Main from './components/main/Main';

//! changes imports:
import { Route, Switch } from 'react-router-dom';
import Gins from './components/gins/Gins';
import Vodka from './components/vodka/Vodka';
import Non_alcoholic from './components/non_alcoholic/Non_alcoholic';
import Rum from './components/rum/Rum';
import Drink from './components/drink/Drink';

// ! changes to Links  overwirking completely the body of App


function App() {
  return (


    <div className="App">

      <Header />

      <Switch>

        <Route exact path="/" component={Main} />
        <Route exact path="/gins" component={Gins} />
        <Route exact path="/vodka" component={Vodka} />
        <Route exact path="/non_alcoholic" component={Non_alcoholic} />
        <Route exact path="/rum" component={Rum} />

        <Route path="/gins/:id" component={Drink} />
        <Route path="/vodka/:id" component={Drink} />
        <Route path="/rum/:id" component={Drink} />
        <Route path="/non_alcoholic/:id" component={Drink} />


      </Switch>

      
        <Footer />





    </div >

  );
}

export default App;
