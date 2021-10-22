import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import Autocomplete from './autocomplete';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/autocomplete-input">
          <Autocomplete />
        </Route>
        <Route path="/">
          <ul>
            <li>
              <Link to="/autocomplete-input">Autocomplete</Link>
            </li>
          </ul>
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
