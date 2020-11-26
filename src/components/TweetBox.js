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
                   {/* <input placeholder="Enter image URL" type="text" />*/}

                </div>
                <Button variant="outlined" className="tweetBox__tweet">Tweet</Button>
            </form>
        </div>
    )
}

export default TweetBox
