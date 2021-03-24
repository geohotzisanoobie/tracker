// Core
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Books
import { books } from './books';

// Pages
import { Home } from '../pages/home';

// Routes
export const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route exact path={books.home}>
                    <Home />
                </Route>
            </Switch>
        </Router>
    )
}