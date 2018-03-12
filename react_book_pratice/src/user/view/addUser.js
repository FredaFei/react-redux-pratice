import React,{Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

import {addUser} from '../action'

class AddUser extends Component{
    static propTypes = {
        onAddUser: PropTypes.func.isRequired
    }
    constructor(){
        super(...arguments)
        this.state = {
            name: '',
            age: 0,
            gender: ''

        }
    }
    handleInputName = (e)=>{this.setState({name: e.target.value})}
    handleInputAge = (e)=>{this.setState({age: e.target.value})}
    handleInputGender = (gender)=>{this.setState({gender})}
    handleSubmit = (e)=>{
        e.preventDefault()
        const { nameInput, ageInput } = this
        this.props.onAddUser(this.state)
        nameInput.value = ''
        ageInput.value = ''
    }

    render(){
        const {name,age,gender} = this.state
        return (
            <div>
                <form className="adduser" onSubmit={this.handleSubmit}>
                    <div className="username">username: <input type="text" value={name} onChange={this.handleInputName} ref={input=>this.nameInput = input} /></div>
                    <div className="userage">userage: <input type="number" value={age} onChange={this.handleInputAge} ref={input=>this.ageInput = input} /></div>
                    <div className="gender">gender:
                        <label>male <input type="radio" name="gender"
                                           value='male'
                                           checked={gender==='male'}
                                           onChange={this.handleInputGender.bind(this,'male')} /></label>
                        <label>female <input type="radio" name="gender"
                                             value='female'
                                             checked={gender==='female'}
                                             onChange={this.handleInputGender.bind(this,'female')}/></label>
                    </div>
                    <button className="adduser">add user</button>
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch)=>{
    return {
        onAddUser: user=>{
            dispatch(addUser(user))
        }
    }
}

export default connect(null, mapDispatchToProps)(AddUser)

