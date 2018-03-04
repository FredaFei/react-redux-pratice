import React,{Component} from 'react'

class ShoppingList extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <div className="list">
                <h1>this is a shopping lists</h1>
                <div className="age">props age: {this.props.age}</div>
            </div>
        )
    }
}

export default ShoppingList