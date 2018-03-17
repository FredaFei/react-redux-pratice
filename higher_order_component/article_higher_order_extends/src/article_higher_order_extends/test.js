import React, { Component } from 'react';

function HOC(WrappedComponent){
    return class HOC extends WrappedComponent {
        //继承了传入的组件
        test1(){
            return this.test2() + 5;
        }
        
        componentDidMount(){
            console.log('1');
            this.setState({number:2});
        }

        render(){
            //使用super调用传入组件的render方法
            return super.render();
        }
    }
}

class OriginComponent extends Component {
    constructor(props){
        super(props);
        this.state = {number:1}
    }
    
    test2(){
        return 4;
    }
    componentDidMount(){
        console.log('2');
    }

    render(){
        return (
            <div>
                {this.state.number}{'and'}
                {this.test1()}
                这是原始组件
            </div>
        )
    }
}

// const newComponent = HOC(OriginComponent)
export default HOC(OriginComponent)
