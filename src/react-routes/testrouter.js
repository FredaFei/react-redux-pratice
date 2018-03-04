import React from 'react'
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'

import Button from './programmate.js'
const Home = () => (<div><h2>this is a Home</h2></div>)
const About = () => (<div><h2>this is a About</h2></div>)
const Other = ({location}) => (<div><h2>this is a {location.pathname}</h2></div>)
const Test = () => (<div><h2>this is a Test</h2></div>)


const Topics = ({match}) => (
    <div>
        <h2>Topics</h2>
        <Link to={`${match.url}/rendering`}>rendering</Link> <br/>
        <Link to={`${match.url}/components`}>components</Link> <br/>
        <Link to={`${match.url}/props-state`}>props&state</Link> <br/>
        <Switch>
            <Route path={`${match.url}/:topicId`} component={Topic} />
            <Route path={`${match.url}/:topicId`} component={Test} />
            <Route exact path={match.url} render={()=><h2>plase select a topic.</h2>} />
        </Switch>
    </div>
);

// const Topics = () => (<div><h2>this is a Topics</h2></div>)
const Topic = ({match}) => (
    <div><h3>{match.params.topicId}</h3></div>
)


const TestRouter = () => (
    <Router>
        <div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to={{pathname: '/about',search: '?id=123',hash: '#op'}}>About</Link></li>
                <li><Link to="/topics">Topics</Link></li>
                <li><Link to="/Other">Other</Link></li>
                <li><Link to="/hahahah">hahahah</Link></li>
            </ul>

            <Route exact path="/" component={Home}/>
            {/*<Route path="/about" component={About}/>*/}
            <Route path="/topics" component={Topics}/>
            <Route component={Other}/>
            <Button/>
        </div>
    </Router>
)

export default TestRouter