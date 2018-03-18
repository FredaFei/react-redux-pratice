import React,{Component} from 'react'
// import EnhanceWrapper from './enhance/enhanceWrapper_stateless.js'
// import EnhanceWrapper from './enhance/enhanceWrapper_class.js'
import EnhanceWrapper from './enhance/enhanceWrapper_extends.js'

class Student extends Component{
    static sayHello(){
        console.log('hello from Student')
    }
    constructor(){
        super(...arguments)
        console.log('Student constructor')
    }
    componentWillMount(){
        this.setState({
            name: this.props.name,
            age: this.props.age
        })
        console.log('Student componentWillMount')
    }
    componentDidMount(){
        console.log('Student componentDidMount')
    }
    componentWillReceiveProps(nextProps){
        console.log('Student componentWillReceiveProps')
        console.log(nextProps)
    }
    handleClick=()=>{
        this.inputEle.focus()
    }
    render(){
        const {name,age} = this.state
        return(
            <div className="student">
                <div>name: {name}</div>
                <div>
                    <label>age: <input type="number" defaultValue={age}
                                    ref={(input)=>{
                                        this.inputEle = input;
                                        {/*this.props.inputRef(input)*/}
                                    }}
                                />
                    </label>
                    <button onClick={this.handleClick}>focus input</button>
                </div>
            </div>
        )
    }
}

export default EnhanceWrapper(Student)