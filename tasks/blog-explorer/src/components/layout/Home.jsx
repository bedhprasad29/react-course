import React from 'react'
import { useSelector } from 'react-redux'
import Card from '../blogs/Card'

function Home() {
    const posts = useSelector(state => state.posts.posts)

    return (
        <div className="row mt-3">
            {posts?.map(post => (
                <Card post={post} key={post.id} />
            ))}
        </div>
    )
}

export default Home
