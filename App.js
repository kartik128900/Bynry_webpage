// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ProfileList from './components/ProfileList';
import ProfileDetails from './components/ProfileDetails';

function App() {
    return (
        <Router>
            <div className="App">
                <Switch>
                    <Route path="/" exact component={ProfileList} />
                    <Route path="/profile/:id" component={ProfileDetails} />
                </Switch>
            </div>
        </Router>
    );
}

export default App;
