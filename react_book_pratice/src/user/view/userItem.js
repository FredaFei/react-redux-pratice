import React,{Component} from 'react'

class User extends Component{
    render(){
        const {name,age,gender,onRemove } = this.props
        return (
            <li className="user-item">
                <span className="name">{name}</span>
                <span className="age">{age}</span>
                <span className="gender">{gender}</span>
                <button className="remove" onClick={onRemove}>remove</button>
            </li>
        )
    }
}

export default User