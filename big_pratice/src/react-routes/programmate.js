import React from 'react'
import { withRouter } from 'react-router-dom'
import {BrowserRouter as Router,Route} from 'react-router-dom';

// 1. Use the withRouter higher-order component
const Button = withRouter(({history})=>(
    <button onClick={()=>{history.push('/about')}}>click</button>
))

// 2. Use composition and render a <Route>
// const Button = ()=>(
//     <Route render={({history})=>(
//         <button onClick={()=>{history.push('/topics')}}>click</button>
//     )}/>
// )

// 3. Use the context*
// not recommend
// const Button =(props,context)=>(
//     <button onClick={()=>{context.history.push('/other')}}>click</button>
// )
// Button.contextTypes = {
//     history: React.PropTypes.shape({
//         push: React.PropTypes.func.isRequired
//     })
// }

export default Button