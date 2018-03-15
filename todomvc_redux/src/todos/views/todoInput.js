import React,{Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {editTodo} from '../actions'

class TodoInput extends Component{
    static propTypes={
        text: PropTypes.string,
        onSaveEdit: PropTypes.func.isRequired
    }
    constructor(){
        super(...arguments)
        this.state = {
            text: this.props.text||''
        }
    }
    handleChange = (e)=>{
        this.setState({text: e.target.value})
    }
    handleBlur = (e)=>{
        const text = e.target.value.trim()
        const {id} = this.props
        this.props.onSaveEdit(id,text)
        this.props.onChangeEdit()
    }
    handleSubmit = (e)=>{
        this._edit(e)
    }
    _edit(e){
        const text = e.target.value.trim()
        const {id} = this.props
        if(e.which === 13){ // enter
            this.props.onSaveEdit(id,text)
            this.props.onChangeEdit()
        }else if(e.which === 27){
            this.props.onChangeEdit()
        }
    }
    render(){
        return(
            <input type="text"
                   value={this.state.text}
                   onChange={this.handleChange}
                   onBlur={this.handleBlur}
                   onKeyDown={this.handleSubmit}
            />
        )
    }
}
const mapDispatchToProps = (dispatch)=>{
    return {
        onSaveEdit: (id,text)=>dispatch(editTodo({id,text}))
    }
}
export default connect(null, mapDispatchToProps)(TodoInput)