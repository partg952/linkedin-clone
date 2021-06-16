import logo from './logo.svg';
import './App.css';
import SignUp from './components/signup'
import Header from './components/header';
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
        </Route>
      </Router>
    </div>
  );
}

export default App;
