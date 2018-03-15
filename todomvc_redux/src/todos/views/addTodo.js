import React,{Component} from 'react'
// import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {addTodo} from '../actions'

class AddTodo extends Component{
    handleAddTodo =(e)=>{
        e.preventDefault()
        let input = this.input;
        if(!input.value.trim()){return}
        this.props.onAddTodo(input.value)
        input.value = ''
    }
    render(){
        return (
            <form className="add-todo" onSubmit={this.handleAddTodo}>
                <input type="text" ref={input=>this.input=input}/>
                <button type="submit">add todo</button>
            </form>
        )
    }
}

const mapDispatchToProps = (dispatch)=>{
    return {
        onAddTodo: (text)=>{return dispatch(addTodo(text))}
    }
}

export default connect(null, mapDispatchToProps)(AddTodo)