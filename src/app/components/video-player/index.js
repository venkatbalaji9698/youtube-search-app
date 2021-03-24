import React from 'react';

const VideoPlayer = ({ displayVideo }) => {
    return (
        <iframe
            src={`https://www.youtube.com/embed/${displayVideo.id.videoId}`}
            title='video'
            width="100%"
            height="300px"
        />
    )
}

export default VideoPlayer;
