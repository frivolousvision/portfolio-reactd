//import logo from './logo.svg';
import './App.css';
import {Main} from '../Main/Main';
import {Header} from '../Header/Header';
import {About} from '../About/About';
import {Projects} from '../Projects/Projects';
import {Contact} from '../Contact/Contact';
import {Footer, footer} from '../Footer/Footer';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {Link} from 'react-router-dom';
import {useState} from 'react';
import './App.css';



function App() {
const [about, setAbout] = useState(true);
const [projects, setProjects] = useState(false);
const [contact, setContact] = useState(false);

  const displayAbout =()=> {
      setAbout(true)
      setProjects(false)
      setContact(false)
    
  }
  const displayProjects =()=> {
      setProjects(true)
      setAbout(false)
      setContact(false)
  }
  const displayContact =()=> {
      setContact(true)
      setAbout(false)
      setProjects(false)
  }
  return (
    
    <div className="App">
      <Header displayAbout={displayAbout} displayContact={displayContact} displayProjects={displayProjects}/>
      <Main/>
      <About about={about}/>
      <Projects projects={projects}/>
      <Contact contact={contact}/>
      <Footer />
    </div>
    
  );
}

export default App;
//<Route exact path='/' component={About}/>
//      <Route exact path='/projects' component={Projects}/>
//      <Route exact path='/contact' component={Contact}/>