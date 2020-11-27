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
                <Avatar src={avatar} />
           </div>
           <div className="post__body">
                <div className="post__header">
                    <div className="post__headerText">
                        <h3>
                        {dispalyName} <span className="post__headerSpecial"> 
                      {verified &&      <VerifiedUserIcon  className="post__badge" />}{username}
                        </span>
                        </h3>
                    </div>
                    <div className="post__headerDescription">
                        <p>{text}</p>
                    </div>
                </div>
                <img src={image}   alt="Image" />
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
