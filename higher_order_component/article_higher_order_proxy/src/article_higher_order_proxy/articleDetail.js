import React from 'react';
import api from '../api.js'
import withSubscription from './withSubscription.js'
//文章详情
const ArticleDetail = (props)=>{
    let {data} = props
    return(
        <div>
            <div>article details:</div>
            <div className="title">{data.title}</div>
            <p className="content">{data.content}</p>
        </div>
    )
}
export default withSubscription(ArticleDetail, api.getDetail)