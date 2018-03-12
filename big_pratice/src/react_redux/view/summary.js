import React, {Component} from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

function Summary(props) {
    return(
        <div>Total Count: {props.sum}</div>
    )
}

Summary.propTypes = {
    sum: PropTypes.number.isRequired
}

function mapStateToProps(state,ownProps) {
    let sum = 0;
    for(const key in state){
        if(state.hasOwnProperty(key)){
            sum += state[key];
        }
    }
    return {sum: sum}
}

export default connect(mapStateToProps)(Summary)

// class SummaryContainer extends Component{
//     constructor(props,context){
//         super(props,context)
//         this.state = this.getOwnState()
//     }
//     componentDidMount(){
//         this.context.store.subscribe(this.onChange)
//     }
//     componentWillUnmount(){
//         this.context.store.subscribe(this.onChange)
//     }
//     getOwnState(){
//         const state = this.context.store.getState()
//         let sum = 0;
//         for(const key in state){
//             if(state.hasOwnProperty(key)){
//                 sum += state[key];
//             }
//         }
//         return {sum: sum}
//     }
//     onChange = ()=>{
//         this.setState(this.getOwnState())
//     }
//     render(){
//         return(
//             <Summary sum={this.state.sum}/>
//         )
//     }
// }
// SummaryContainer.contextTypes = {
//     store: PropTypes.object
// }
// export default SummaryContainer