import {Component} from 'react'
import PropTypes from 'prop-types'

class Provider extends Component{
    static childContextTypes = {
        store: PropTypes.object
    }
    static propTypes = {
        store: PropTypes.object.isRequired
    }
    getChildContext(){
        return {
            store: this.props.store
        };
    }
    render(){
        return this.props.children;
    }
}

// Provider.propTypes = {
//     store: PropTypes.object.isRequired
// }

//-------------------//
// Provider.childContextTypes = {
//     store: PropTypes.object
// };
// static childContextTypes = {
//     store: PropTypes.object
// }
// 以上两种写法相等
//-------------------//

export default Provider;