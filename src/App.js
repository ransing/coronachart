import React from 'react'
import ReactDOM from 'react-dom'

import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import Index from './index'
import Deaths from './Deaths'
import Recovered from './Recovered'



import React, { Component } from 'react'

class App extends Component {
    render() {
        return (
        <BrowserRouter>
            <Router>
                <div>
                    Helklo

                    <Route path="/" component={Index} />
                    <Route exact path="/deaths" component={Deaths} />
                    <Route exact path="/recovered" component={Recovered} />
                </div>
            </Router>
        </BrowserRouter>
        )
    }
}
export default withRouter(App);
render(<App />, document.getElementById('root'));

// ReactDOM.render(routing, document.getElementById('root'))