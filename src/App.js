import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import { PrivateRoute } from './_components';
import { HomePage } from './HomePage';
import { LoginPage } from './LoginPage';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <Router>
            <div>
              <PrivateRoute exact path="/" component={HomePage} />
                <Route path="/login" component={LoginPage} />
            </div>
          </Router>
        </div>
      </header>
    </div>
  );
}

export default App;
