import React,{Component} from 'react'

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
    }
    componentDidMount(){
        console.log('Student componentDidMount')
    }
    componentWillReceiveProps(nextProps){
        console.log('Student componentWillReceiveProps')
        console.log(nextProps)
    }
    handleFocus = ()=>{
        this.iptAge.focus()
    }
    render(){
        const {name,age} = this.state
        return(
            <div className="student">
                <div>name: {name}</div>
                <div>
                    <label>age:
                        <input type="number" value={age}
                        refs={(iptAge)=>this.iptAge = iptAge}/>
                    </label>
                </div>
                <div>
                    <input type="button" value="focus input" onClick={this.handleFocus}/>
                </div>
            </div>
        )
    }
}

export default Student