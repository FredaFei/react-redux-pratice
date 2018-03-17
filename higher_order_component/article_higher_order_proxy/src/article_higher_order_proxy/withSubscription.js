import React, { Component } from 'react';

export default (WrappedComponent, selectData)=>{
    return class extends Component{
        constructor(){
            super(...arguments)
            this.state = {
                data : null
            }
        }
        componentDidMount(){
            //do somethings
            selectData().then(data=>{ this.setState({data}) })
        }
        render(){
            let {data} = this.state
            if(!data){return <div>loading......</div>}
            return(
                <div>
                    <WrappedComponent data={data} {...this.props} />
                </div>
            )
        }
    }
}