import logo from './logo.svg';
import './App.css';
import SignUp from './components/signup'
import {Link,BrowserRouter as Router} from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <SignUp/>
    </div>
  );
}

export default App;
