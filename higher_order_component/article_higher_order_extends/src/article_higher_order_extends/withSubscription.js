import React, { Component } from 'react';

function WithSubscription(WrappedComponent, selectData){
    return class WithSubscription extends WrappedComponent{
        constructor(){
            super(...arguments)
            this.state = {
                data: null
            }
        }
        getChildName(){
            return this.getCurrentClassName() + ' this is a withSubscription'
        }
        componentDidMount(){
            //do somethings
            if(selectData){
                selectData().then(data=>{ this.setState({data}) })
            }
            console.log('extends higher order')
            this.setState({message: '我的信息被继承修改了'})
        }
        render(){
            return super.render()
        }
    }
}
export default WithSubscription