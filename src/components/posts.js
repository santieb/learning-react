import React, { Component } from 'react'

class posts extends Component {

    state = {
        posts: []
    }

    async componentDidMount() {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts')
        const data = await res.json()
        this.setState({posts: data})
    }

    render() {
        return (
            <div>
                <h1>posts</h1>
                {
                    this.state.posts.map(post => {
                        return <div key={post.id}>
                            <h3>{post.title}</h3>
                            <p>{post.body}</p>
                        </div>
                    })
                }    
            </div>
        )
    }
}

export default posts