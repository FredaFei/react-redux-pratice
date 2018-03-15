import React,{Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {removeTodo, toggleTodo} from '../actions'

import TodoInput from './todoInput'

class TodoItem extends Component{
    static propTypes = {
        completed: PropTypes.bool,
        text: PropTypes.string
    }
    constructor(){
        super(...arguments)
        this.state = {
            editing: false
        }
    }
    handleDouble = ()=>{
        this.setState({editing: true})
    }
    handleSaveEdit = ()=>{
        this.setState({editing: false})
    }
    render(){
        const {editing} = this.state
        const { id, completed, text, onToggle, onRemove } = this.props
        const style = {textDecoration: completed ? 'line-through':'none'}
        let element
        if(editing){
            element = (<TodoInput
                editing={editing}
                text={text}
                id={id}
                onChangeEdit={this.handleSaveEdit}
            />)
        }else{
            element = (
                <li className="todo-item" style={style}>
                    <input className="toggle" type="checkbox"
                           checked={completed?completed:false}
                           onChange={onToggle}
                    />
                    <label className="text" onDoubleClick={this.handleDouble}>{text}</label>
                    <span className="remove" onClick={onRemove}>X</span>
                </li>
            )
        }
        return element
    }
}

const mapDispatchToProps = (dispatch,ownProps)=>{
    let {id} = ownProps
    return {
        onToggle: ()=>dispatch(toggleTodo(id)),
        onRemove: ()=>dispatch(removeTodo(id))
    }
}
export default connect(null,mapDispatchToProps)(TodoItem)