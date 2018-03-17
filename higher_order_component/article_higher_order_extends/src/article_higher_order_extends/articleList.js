import React, { Component } from 'react';
import ArticleItem from './articleItem.js'
import api from '../api.js'
import WithSubscription from './withSubscription.js'
//文章列表

class ArticleList extends Component{
    constructor(){
        super(...arguments)
        this.state = {
            data: null,
            message: '我是原始信息'
        }
    }
    getCurrentClassName(){
        return 'this is a ArticleList'
    }
    render(){
        let {data} = this.state
        if(!data){
            return (
            <div> 
                {this.getChildName()}
                <div>loading......</div>
            </div>)
        }
        return(
            <ul>
                {
                    data.map(article=>{
                        return <ArticleItem article={article} key={article.id} />
                    })
                }
            </ul>
        )
    }
}

export default WithSubscription(ArticleList, api.getArticle)