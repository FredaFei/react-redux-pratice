import React, { Component } from 'react';

const getData = (url)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log('opop')
            resolve(url)
        },2000)
    })
}

const LoadAndRefresh = (url) => WrappedComponent => {
    return class extends Component {
        constructor() {
            super(...arguments)
            this.state = {content: ''}
        }

        componentWillMount() {
            this._loadData()
        }

        async _loadData() {
            this.setState({content: '数据加载中...'})
            let content = await getData(url)
            this.setState({content})
        }

        render() {
            let props = {
                content: this.state.content,
                refresh: this._loadData.bind(this),
                ...this.props
            }
            return (
                <WrappedComponent {...props}/>
            )
        }
    }
};

class Post extends Component {
    render () {
        return (
            <div>
                <p>{this.props.content}</p>
                <button onClick={() => this.props.refresh()}>刷新</button>
            </div>
        )
    }
}

export {LoadAndRefresh, Post}