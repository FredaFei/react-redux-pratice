import React from 'react';

export default (props)=>{
    let {article} = props
    return(
        <li className="article-item">
            <span className="name">{article.name}</span>
            <span className="author">{article.author}</span>
            <span className="time">{article.time}</span>
        </li>
    )
}