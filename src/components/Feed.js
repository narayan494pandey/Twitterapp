import React,{useEffect, useState} from 'react'
import './Feed.css'
import Post from './Post'
import TweetBox from './TweetBox'
import db from './firebase'
function Feed() {
    const [posts, setPosts] = useState([]);
    useEffect(() =>{
        db.collection('posts').onSnapshot(snapshot =>{
            setPosts(snapshot.docs.map(doc => doc.data()));
        })
    },[])

    return (
        <div className="feed">
            <div className="feed__header">
                <h2>Home</h2> 
            </div>
            <TweetBox />
            <div className="feed__post">
                {posts.map(post =>(
                    <Post 
                    dispalyName={post.dispalyName}
                    username={post.username}
                    verified={post.verified}
                    text={post.text}
                    image={post.image}
                    avatar={post.avatar}
                    />
                ))}
                <Post dispalyName="Narayan Pandey" 
                    username='@narayan' verified={true}
                    text="Why are you Twitting?"
                    avatar="/images/Narayan.jpg"
                    image="https://media0.giphy.com/media/65ATdpi3clAdjomZ39/200.gif"
                /> 
                <Post dispalyName="Narayan Pandey" 
                    username='narayan' verified={true}
                    text="Lets Learn Raect It going to be fun!"
                    avatar="/images/Narayan.jpg"
                    image="https://media0.giphy.com/media/65ATdpi3clAdjomZ39/200.gif"
                /> 
                <Post dispalyName="Kumar Sanu" 
                    username='@kumarsanu' verified={true}
                    text="Lets hey hey haha ha It going to be fun!"
                    avatar="/images/ks.jpg"
                    image="https://media0.giphy.com/media/65ATdpi3clAdjomZ39/200.gif"
                /> 
                <Post dispalyName="Chhotu" 
                    username='@chhotu' verified={true}
                    text="Lets Use Firebase for Hosting!"
                    avatar="/images/Narayan.jpg"
                    image="https://media0.giphy.com/media/65ATdpi3clAdjomZ39/200.gif"
                /> 
                <Post dispalyName="Ananonyms" 
                    username='@someone' verified={false}
                    text="Its Don't going to work !"
                    avatar="/images/ak.jpg"
                    image="https://media0.giphy.com/media/65ATdpi3clAdjomZ39/200.gif"
                /> 
        
            </div>
              
        </div>
    )
}

export default Feed
