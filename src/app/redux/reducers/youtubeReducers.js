import {
    GET_YOUTUBE_VIDEOS,
    SET_YOUTUBE_VIDEOS_RESPONSE
} from '../actions/actionTypes';

const initialState = {
    youtubeVideosResponse: null
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_YOUTUBE_VIDEOS:
            return {
                ...state,
                youtubeVideosResponse: {
                    isLoading: true
                }
            };
        case SET_YOUTUBE_VIDEOS_RESPONSE:
            return {
                ...state,
                youtubeVideosResponse: {
                    isLoading: false,
                    response: action.data
                }
            };
        default:
            return state;
    }
}