import React, { Component } from 'react';
import api from '../api.js'
import WithSubscription from './withSubscription.js'
//文章详情
class ArticleDetail extends Component{
    constructor(){
        super(...arguments)
        this.state = {
            data: null
        }
    }
    componentDidMount(){
        api.getDetail().then(data=>{ this.setState({data}) })
    }
    render(){
        let {data} = this.state
        return(
            <div>
                <div>article details:</div>
                <span className="title">{data.title}</span>
                <span className="content">{data.content}</span>
            </div>
        )
    }
    
}
// export default WithSubscription(ArticleDetail)
export default WithSubscription(ArticleDetail, api.getDetail())