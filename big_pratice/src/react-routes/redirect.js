import React, {Component} from 'react'
import {BrowserRouter as Router, Route, Link, Redirect, withRouter} from 'react-router-dom'

const Public = () => (
    <div>Public</div>
);
const Protected = () => (
    <div>Protected</div>
);

const AuthorObj = {
    isLogin: false,
    LoginIn(cb){
        this.isLogin = true
        setTimeout(cb,100)
    },
    signOut(cb){
        this.isLogin = false
        setTimeout(cb,100)
    },
}

const AuthorInfo = withRouter(({history})=>(
    AuthorObj.isLogin ?
        (<div>Welcome!<button onClick={()=>{
            AuthorObj.signOut(()=>history.push('/'));
        }}>sign out</button></div>)
        :(<p>You are not logined in</p>)
    )
)
const PrivateRoute = ({component: Component,...rest})=>(
    <Route
        {...rest}
        render={props =>
            AuthorObj.isLogin ? (
                <Component {...props} />
            ) : (
                <Redirect
                    to={{
                        pathname: "/login",
                        state: { from: props.location }
                    }}
                />
            )
        }
    />
);

class Login extends Component{
    constructor(props){
        super(props)
        this.state = {
            redirectFlag: false
        }
    }
    Login=()=>{
        AuthorObj.LoginIn(()=>{
            this.setState({redirectFlag: true})
        })
    }
    render() {
        const {from} = this.props.location.state || {from: {pathname: '/'}};
        const {redirectFlag} = this.state
        if(redirectFlag){
            return <Redirect to={from} />
        }
        return (
            <div>
                <p>You must log in to view the page at ...</p>
                <button onClick={this.Login}>Login in</button>
            </div>
        )
    }

}

class Author extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <Router>
                <div>
                    <AuthorInfo />
                    <div><Link to="/public">public</Link></div>
                    <div><Link to="/protect">protect</Link></div>

                    <Route path="/public" component={Public}/>
                    <Route path="/login" component={Login}/>
                    <PrivateRoute path="/protect" component={Protected} />
                </div>

            </Router>
        );
    }
}


export default Author