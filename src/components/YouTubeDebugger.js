// Code YouTubeDebugger Component Here
import React from 'react';

class YouTubeDebugger extends React.Component {

    state = {
        errors: [],
        user: null,
        settings: {
        bitrate: 8,
        video: {
           resolution: '1080p'
           }
        }
    }

    handleBit = () => {
        this.setState({
                settings: {
                ...this.state.settings,
                bitrate: 12
                }
        })
        // console.log(this.state)
    }

    handleRes = () => {
        
        this.setState({
            settings: {
                ...this.state.settings,
                    video: {
                        resolution: '720p'
                    }
                }
            })
    
        console.log(this.state)
    }

    render () {
        return (
        <div>
        <button onClick={this.handleBit}>{this.state.settings.bitrate}</button>
        <button onClick={this.handleRes}>{this.state.settings.video.resolution}</button>
        </div>
        )
    }
}

export default YouTubeDebugger