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
            dispalyName:'Narendra Modi',
            username:'@narendramodi',
            verified:true,
            text: tweetMessage,
            image: tweetImage,
            avatar:"https://upload.wikimedia.org/wikipedia/commons/2/2e/Prime_Minister%2C_Shri_Narendra_Modi%2C_in_New_Delhi_on_August_08%2C_2019_%28cropped%29.jpg",
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
