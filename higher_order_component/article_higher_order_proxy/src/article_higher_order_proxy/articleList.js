import React from 'react';
import ArticleItem from './articleItem.js'
import api from '../api.js'
import withSubscription from './withSubscription.js'
//文章列表

const ArticleList = (props)=>{
    let {data} = props
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


export default withSubscription(ArticleList, api.getArticle)