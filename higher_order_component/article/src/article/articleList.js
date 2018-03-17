import React, { Component } from 'react';
import ArticleItem from './articleItem.js'
import api from '../api.js'
//文章列表
class ArticleList extends Component{
    constructor(){
        super(...arguments)
        this.state = {
            articles : null
        }
    }
    componentDidMount(){
        api.getArticle().then(articles=>{
            this.setState({articles})
        })
    }
    render(){
        let {articles} = this.state
        if(!articles){return <div>loading......</div>}
        return(
            <ul>
                {
                    articles.map(article=>{
                        return <ArticleItem article={article} key={article.id} />
                    })
                }
            </ul>
        )
    }
}
export default ArticleList
