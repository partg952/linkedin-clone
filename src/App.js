import logo from './logo.svg';
import './App.css';
import SignUp from './components/signup'
import Header from './components/header';
import Main from './components/main'
import {Link,BrowserRouter as Router,Route} from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <Router>
        <Route path='/' exact>
      <SignUp/>
        </Route>
        <Route path='/home' exact>
          <Header/>
          <div id='center__div'>
            <a>Hiring in a hurry?</a>
            <p>-Find talented pros in record time with Upwork and keep business moving.</p>
          </div>
          <Main/>
        </Route>
      </Router>
    </div>
  );
}

export default App;
