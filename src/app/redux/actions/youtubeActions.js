import {
    GET_YOUTUBE_VIDEOS,
    SET_YOUTUBE_VIDEOS_RESPONSE
} from './actionTypes';

export const getYoutubeVideos = (data) => ({
    type: GET_YOUTUBE_VIDEOS,
    data: data
})

export const setYoutubeVideosResponse = (list) => ({
    type: SET_YOUTUBE_VIDEOS_RESPONSE,
    data: list
})
