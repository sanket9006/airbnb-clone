// Import from React
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'

// Import CSS
import './App.css';

// Importing React Components
import Navbar from './Components/Navbar/Navbar'
import Homepage from './Components/Homepage/Homepage'
import Contact from './Components/Contact/Contact'

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Homepage} />
          <Route path="/places" component={Contact} />
          <Route path="/contact" component={Contact} />

          <Redirect from="*" to="/" />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
