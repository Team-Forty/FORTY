import './App.css';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Main from './components/main/Main';
import TestApi from './components/main/TestApi';

function App() {
  return (

    <div className="App">

      <h1>Project FORTY</h1>
      <Header/>
      <Main/>
      <Footer/>
      <TestApi/>

    </div>

  );
}

export default App;
