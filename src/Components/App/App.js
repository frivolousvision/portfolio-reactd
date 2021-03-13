//import logo from './logo.svg';
import './App.css';
import {Main} from '../Main/Main';
import {Header} from '../Header/Header';
import {About} from '../About/About';
import {Projects} from '../Projects/Projects';
import {Contact} from '../Contact/Contact';
import {Footer, footer} from '../Footer/Footer';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
    <div className="App">
      <Header />
      <Main/>
      <Route exact path='/' component={About}/>
      <Route exact path='/projects' component={Projects}/>
      <Route exact path='/contact' component={Contact}/>
      <Footer />
    </div>
    </Router>
  );
}

export default App;
