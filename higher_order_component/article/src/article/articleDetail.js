import React, { Component } from 'react';
import api from '../api.js'
//文章详情
class ArticleDetail extends Component{
    constructor(){
        super(...arguments)
        this.state = {
            detail : null
        }
    }
    componentDidMount(){
        api.getDetail().then(detail=>{
            this.setState({detail})
        })
    }
    render(){
        let {detail} = this.state
        if(!detail){return <div>loading......</div>}
        return(
            <div>
                <div>article details:</div>
                <div className="title">{detail.title}</div>
                <p className="content">{detail.content}</p>
            </div>
        )
    }
}

export default ArticleDetail