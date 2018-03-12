import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {addTodo} from "../actions.js";

class AddTodo extends Component{
    constructor(){
        super(...arguments)
        this.onSubmit = this.onSubmit.bind(this)
    }
    onSubmit(e){
        e.preventDefault()
        const input = this.input
        if(!input.value.trim())return
        this.props.onAdd(input.value)
        input.value = ''
    }
    render(){
        return (
            <div className="add-todo">
                <form onSubmit={this.onSubmit}>
                    <input type="text" className="new-todo" ref={input=>this.input = input}/>
                    <button className="add-btn">add todo</button>
                </form>
            </div>
        );
    }
}

AddTodo.propTypes = {
    onAdd: PropTypes.func.isRequired,
}

const mapDispatchToProps = (dispatch)=>{
    return {
        onAdd: text=>{
            dispatch(addTodo(text))
        }
    }
}

export default connect(null,mapDispatchToProps)(AddTodo)