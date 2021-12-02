import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import Autocomplete from './autocomplete';
import SlideshowGallery from './slideshow-gallery';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/autocomplete-input">
          <Autocomplete />
        </Route>
        <Route path="/slideshow-gallery">
          <SlideshowGallery />
        </Route>
        <Route path="/">
          <ul>
            <li>
              <Link to="/autocomplete-input">Autocomplete</Link>
            </li>
            <li>
              <Link to="/slideshow-gallery">Slideshow Gallery</Link>
            </li>
          </ul>
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
