import React from 'react'
import './Widgets.css'
import 
{   TwitterTimelineEmbed, 
    TwitterShareButton, 
    TwitterTweetEmbed,
 } from 'react-twitter-embed';
import { Search } from '@material-ui/icons';
function Widgets() {
    return (
        <div className="widgets">
            <div className="widgets__input">
                <Search  className="widgets__searchIcon"/>
                <input placeholder="Search Twitter" type="text" />
            </div>
            <div className="widgets__widgetContainer">
                <h2>Whats happening</h2>
                <TwitterTweetEmbed tweetId={"1331947670550810624"} />
                <TwitterTimelineEmbed 
                    sourceType="profile"
                    screenName="narendramodi"
                    options={{height:400}}
                />
                <TwitterShareButton
                    url={'https://www.facebook.com/narayan.pandey.35728/'}
                    options={{ text: '#reactjs is awesome', via: 'Narayan27928891' }}
              />
            </div>
        </div>
    )
}

export default Widgets
