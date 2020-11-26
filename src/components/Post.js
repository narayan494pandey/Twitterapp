import React from 'react'
import { Avatar } from '@material-ui/core'
import './Post.css'
import  VerifiedUserIcon from '@material-ui/icons/VerifiedUser'
import { ChatBubbleOutline, FavoriteBorder, Publish, Repeat } from '@material-ui/icons'
function Post({
    dispalyName,
    username,
    verified,
    text,
    image,
    avatar
}) {
    return (
        <div className="post">
           <div className="post__avatar">
                <Avatar src="/images/Narayan.jpg" />
           </div>
           <div className="post__body">
                <div className="post__header">
                    <div className="post__headerText">
                        <h3>
                        Narayan{" "} <span> 
                            <VerifiedUserIcon className="post__badge" />@narayan 
                        </span>
                        </h3>
                    </div>
                    <div className="post__headerDescription">
                        <p>I challege you to build a twiiter Clone with Reactjs</p>
                    </div>
                </div>
                <img src="https://media0.giphy.com/media/65ATdpi3clAdjomZ39/200.gif" />
                <div className="post__footer">
                    <ChatBubbleOutline fontsize="small" />
                    <Repeat fontsize="small" />
                    <FavoriteBorder fontsize="small" />
                    <Publish fontsize="small" />
                
                </div>
           </div>
        </div>
    )
}

export default Post
