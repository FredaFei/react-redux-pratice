const data = {
    articles: [
        { name: 'article---1', author: 'Bob', time: '2017-09-12',id:123  },
        { name: 'article---2', author: 'Jhone', time: '2017-12-12',id:456  }
    ],
    detail: { title: 'article name', content: 'article content'}
}
const api = {
    getArticle: ()=>{
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                resolve(data.articles)
            },2000)
        })
    },
    getDetail: ()=>{
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                resolve(data.detail)
            },3000)
        })
    }    
}
export default api