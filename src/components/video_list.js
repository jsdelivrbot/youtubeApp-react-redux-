import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = ({onVideoSelect, videos}) => {
    return (
        <ul className="col-md-4 list-group">
            {videos.map(video =>
                <VideoListItem video={video} key={video.etag} onVideoSelect={onVideoSelect}/>
            )}
        </ul>
    )
};

export default VideoList;