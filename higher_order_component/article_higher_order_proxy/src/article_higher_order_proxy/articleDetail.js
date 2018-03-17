import React from 'react';
import api from '../api.js'
import withSubscription from './withSubscription.js'
//文章详情
const ArticleDetail = (props)=>{
    let {data} = props
    if(!data){return <div>loading......</div>}
    return(
        <div>
            <div>article details:</div>
            <div className="title">{data.title}</div>
            <p className="content">{data.content}</p>
        </div>
    )
}
export default withSubscription(ArticleDetail, api.getDetail)