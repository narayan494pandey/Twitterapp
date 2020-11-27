import React,{useState} from 'react'
import {Avatar, Button } from '@material-ui/core';
import './TweetBox.css'
import db from './firebase';

function TweetBox() {
    const [tweetMessage, setTweetMessage] = useState("");
    const [tweetImage, setTweetImage] = useState(""); 
    const sendTweet = e =>{
        e.preventDefault();
        db.collection('posts').add({
            dispalyName:'Narayan Kumar',
            username:'@narayankumar',
            verified:true,
            text: tweetMessage,
            image: tweetImage,
            avatar:"/images/Narayan.jpg",
        })

    }
    return (
        <div className="tweetBox">
            <form>
                <div className="tweetBox__input">
                    <Avatar src="/images/Narayan.jpg" />
                    <input onChange={e => setTweetMessage(e.target.value)}
                         value={tweetMessage} 
                         placeholder="What's happening?"
                          type="text" />
                </div>
                <input onChange={e => setTweetImage(e.target.value)}
                    value={tweetImage} 
                    className="tweetBox__imageInput" 
                    placeholder="Optional Enter image URL" 
                    type="text" />
                <Button onClick={sendTweet} type="submit" variant="outlined" className="tweetBox__tweet">Tweet</Button>
            </form>
        </div>
    )
}

export default TweetBox
