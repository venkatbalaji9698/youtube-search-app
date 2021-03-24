import React from 'react';
import './index.scss';

const VideoList = ({ videosList, handleVideoSelect }) => {
    return (
        <ul className="video-list">
            {videosList.map((item, index) => {
                return (
                    <li key={index} className="video-list__item" onClick={() => handleVideoSelect(item)}>
                        <img src={item.snippet.thumbnails.medium.url} alt="" />
                        <p>{item.snippet.title}</p>
                    </li>
                );
            })}
        </ul>
    )
}

export default VideoList;
