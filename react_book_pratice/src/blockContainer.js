import React, { Component } from 'react';

class BlackBorderContainer extends Component {
    /* TODO */
    render(){
        const style = {border: '1px solid #000000'}
        console.log(this.props.children)
        const {children} = this.props
        let childrenHtml = <div style={style}>{this.props.children}</div>
        if(Array.isArray(children)){
            childrenHtml = children.map((item,index)=> <div style={style} key={index}>{item}</div>)
        }
        return (
            <div className="block-container">
                <h1>hello</h1>
                {childrenHtml}
            </div>
        )
    }
}

export default BlackBorderContainer