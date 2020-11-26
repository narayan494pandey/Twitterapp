import React from 'react'
import {Avatar, Button } from '@material-ui/core';
import './TweetBox.css'

function TweetBox() {
    return (
        <div className="tweetBox">
            <form>
                <div className="tweetBox__input">
                    <Avatar src="/images/Narayan.jpg" />
                    <input placeholder="What's happening?" type="text" />
                </div>
                <input className="tweetBox__imageInput" placeholder="Optional Enter image URL" type="text" />
                <Button variant="outlined" className="tweetBox__tweet">Tweet</Button>
            </form>
        </div>
    )
}

export default TweetBox
