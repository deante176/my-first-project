import React from "react";
import Navigation from './components/navigation'
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom'

function App()  {
    return (
        <Router>
         <div className="App">
            <Navigation/>
            <swtch>
                <Route path="/:page" component={PageRender} />
                <Route path="/" render={() =><Redirect to="/home />"} />
                <Route component={() => 404} />
            </swtch>
         </div>
        </Router>
    );
}

export default App;
