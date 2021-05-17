// Import from React
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'

// Import CSS
import './App.css';

// Importing React Components
import Navbar from './Components/Navbar/Navbar'
import Homepage from '../src/Pages/Homepage/Homepage'
import Contact from './Pages/Contact/Contact'
import Places from './Pages/Places/Places'

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Homepage} />
          <Route path="/places" component={Places} />
          <Route path="/contact" component={Contact} />

          <Redirect from="*" to="/" />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
