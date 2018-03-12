import React,{Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux';
import {toggleTodo, removeTodo} from '../actions.js';

class TodoItem extends Component{
    constructor(){
        super(...arguments)
        console.log('enter TodoItem constructor: ' + this.props.text);
    }
    render(){
        const {onToggle,onRemove,completed, text} = this.props
        const checkedProp = completed ? {checked: true}: {}
        console.log('enter TodoItem render: ' + text);
        console.log(this.props);
        return (
            <li className="todo-item" style={{textDecoration: completed ? 'line-through':'none'}}>
                <input type="checkbox" className="toggle" {...checkedProp} onClick={onToggle} readOnly />
                <label className="text">{text}</label>
                <button className="remove" onClick={onRemove}>X</button>
            </li>
        );
    }
}


TodoItem.propTypes = {
    onToggle: PropTypes.func.isRequired,
    onRemove: PropTypes.func.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
}

const mapDispatchToProps = (dispatch,ownProps)=>{
    const {id} = ownProps
    return {
        onToggle: ()=>dispatch(toggleTodo(id)),
        onRemove: ()=>dispatch(removeTodo(id))
    }
}


export default connect(null, mapDispatchToProps)(TodoItem)