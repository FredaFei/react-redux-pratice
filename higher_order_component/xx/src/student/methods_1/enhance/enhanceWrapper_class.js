import React from 'react';

function EnhanceWrapper(WrappedComponent){
    return class WrapperComponent extends React.Component{
        static wrappedComponentStatic(){
            WrappedComponent.sayHello()
        }
        constructor(){
            super(...arguments)
            console.log('WrapperComponent constructor')
        }
        componentWillMount(){
            console.log('WrapperComponent componentWillMount')
        }
        componentDidMount(){
            console.log('WrapperComponent componentDidMount')
        }
        handleClick=()=>{
            this.inputEle.focus()
        }
        render(){
            return(
                <div className="student">
                    <WrappedComponent 
                        inputRef={(el)=>{this.inputEle = el}}
                        name="freda" age="12"
                        {...this.props}
                    />
                    <input type="button" value="focus's child input" 
                        onClick={this.handleClick}/>
                    <input type="button" value="call childComponent static" 
                        onClick={this.constructor.wrappedComponentStatic}/>
       
                </div>
            )
        }
    }
}

export default EnhanceWrapper