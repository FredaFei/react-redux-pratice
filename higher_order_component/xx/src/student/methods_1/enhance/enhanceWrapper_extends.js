import React from 'react';

function EnhanceWrapper(WrappedComponent){
    const willMount = WrappedComponent.prototype.componentWillMount
    const didMount = WrappedComponent.prototype.componentDidMount
    return class WrapperComponent extends WrappedComponent{
        constructor(){
            super(...arguments)
            this.state = {
                name: 'freda',
                age: 12
            }
            console.log('WrapperComponent constructor')
        }
        componentWillMount(...argus){
            console.log('WrapperComponent componentWillMount')
            if(willMount){
                willMount.apply(this,argus)
            }
        }
        componentDidMount(...argus){
            console.log('WrapperComponent componentDidMount')
            if(didMount){
                didMount.apply(this,argus)
            }
        }
        // handleClick=()=>{
        //     this.inputEle.focus()
        // }
        render(){
            console.log(this.state)
            return(
                <div>
                    {super.render()}
                    <p>姓名：{this.state.name}</p>
                    <input type="button" value="focus's child input" 
                        onClick={this.handleClick}/>
                    <input type="button" value="call childComponent static" 
                        onClick={WrapperComponent.sayHello}
                    />
                </div>
            )
        }
    }
}

export default EnhanceWrapper