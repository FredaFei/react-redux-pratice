import React,{Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import Link from './link'
import {FilterTypes} from '../../constants.js'
import {action as todosAction} from '../../todos/index.js'
import './style.css'

class Filters extends Component{
    static propTypes={
        todos: PropTypes.array
    }
    constructor(){
        super(...arguments)
        this.state = {
            allChecked: false
        }
    }
    handleAllChecked=()=>{
        this.setState((prevState,props)=>({
            allChecked: !prevState.allChecked
        }))
        this.props.onCheckAllTodo()
    }
    render(){
        const {todos,onClearAllTodo} = this.props
        let num = todos.filter(item=>!item.completed).length
        const leftText = num>1? num +'items': num+'item'
        const {allChecked} = this.state
        const classList = allChecked ? 'filter':'filter not-all'
        return (
            <div className="filters">
                <div className="left">{leftText} left</div>
                <Link filter={FilterTypes.ALL}>{FilterTypes.ALL}</Link>
                <Link filter={FilterTypes.COMPLATED}>{FilterTypes.COMPLATED}</Link>
                <Link filter={FilterTypes.ACTIVE}>{FilterTypes.ACTIVE}</Link>
                <span className="clear-all" onClick={onClearAllTodo}>clear all</span>
                <button className={classList} onClick={this.handleAllChecked}>check all</button>
            </div>
        )
    }
}

const mapStateToProps = (state)=>{
    return {
        todos: state.todos
    }
}
const mapDispatchToProps = (dispatch)=>{
    return {
        onClearAllTodo: ()=>dispatch(todosAction.clearAllTodo()),
        onCheckAllTodo: ()=>dispatch(todosAction.checkAllTodo())
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Filters)